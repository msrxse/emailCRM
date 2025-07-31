import { Hono } from "hono";
import z from "zod";
import { zValidator } from "@hono/zod-validator";
import { verifyAuth } from "@hono/auth-js";

import { db } from "@/db";
import { insertOrgsSchema, Orgs, UserOrgs } from "@/db/org-schema";
import { and, eq, inArray } from "drizzle-orm";

const app = new Hono()
  .get("/", verifyAuth(), async (c) => {
    const { user } = c.get("authUser");

    if (!user) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const userOrgs = await db.query.UserOrgs.findMany({
      where: eq(UserOrgs.userId, user.id),
    });

    if (userOrgs.length === 0)
      return c.json({ error: "User has no orgs" }, 403);

    const orgs = await db.query.Orgs.findMany({
      where: inArray(
        Orgs.id,
        userOrgs.map((uo) => uo.orgId)
      ),
    });

    return c.json({ data: { orgs } });
  })
  .get(
    "/:id",
    verifyAuth(),
    zValidator(
      "param",
      z.object({
        id: z.string(),
      })
    ),
    async (c) => {
      const { user } = c.get("authUser");

      if (!user) {
        return c.json({ error: "Unauthorized" }, 401);
      }
      const { id } = c.req.valid("param");
      if (!id) return c.json({ error: "Invalid id" }, 400);

      const userOrgs = await db.query.UserOrgs.findMany({
        where: eq(UserOrgs.userId, user.id),
      });

      if (userOrgs.length === 0)
        return c.json({ error: "User has no orgs" }, 403);

      const org = await db.query.Orgs.findFirst({
        where: and(
          eq(Orgs.id, id),
          inArray(
            Orgs.id,
            userOrgs.map((uo) => uo.orgId)
          )
        ),
      });

      if (!org) {
        return c.json({ error: "Organization not found" }, 404);
      }

      return c.json({ data: org });
    }
  )
  .post("/", verifyAuth(), zValidator("json", insertOrgsSchema), async (c) => {
    const { user } = c.get("authUser");

    if (!user) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const json = c.req.valid("json");

    // If you wanted to return the org
    // const orgs = await db.insert(Orgs).values(json).returning();
    // return c.json({ data: orgs });

    // or if you wanted to check insert was successful
    // const orgsLength = await db.query.Orgs.findMany();
    // const orgs = await db.insert(Orgs).values(json).returning();
    // if (orgs.length === orgsLength.length)
    //   return c.json({ error: "Org not created" }, 500);

    const orgs = await db.query.Orgs.findMany();
    if (orgs.length > 0 && orgs.find((o) => o.id === json.id))
      return c.json({ error: "Org already exists" }, 400);

    await db.insert(Orgs).values(json);

    await db.insert(UserOrgs).values({
      isPrimary: true,
      orgId: json.id,
      userId: user.id,
    });

    return c.json({ message: "Org created" });
  });

export default app;
