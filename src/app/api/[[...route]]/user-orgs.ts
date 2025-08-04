import { db } from "@/db";
import { insertUserOrgsSchema, UserOrgs } from "@/db/org-schema";
import { verifyAuth } from "@hono/auth-js";
import { zValidator } from "@hono/zod-validator";
import { and, eq, ne } from "drizzle-orm";
import { Hono } from "hono";

const app = new Hono().patch(
  "/",
  verifyAuth(),
  zValidator(
    "json",
    insertUserOrgsSchema.pick({
      orgId: true,
    })
  ),
  async (c) => {
    const { user } = c.get("authUser");
    if (!user) return c.json({ error: "Unauthorized" }, 401);

    const existingUserOrgs = await db.query.UserOrgs.findMany({
      where: eq(UserOrgs.userId, user.id),
    });
    if (existingUserOrgs.length === 0)
      return c.json({ error: "User does not belong to any orgs" }, 400);

    const { orgId } = c.req.valid("json");
    const selectedOrg = existingUserOrgs.find((uo) => uo.orgId === orgId);

    if (selectedOrg?.isPrimary)
      return c.json({ error: "Org is already primary" }, 400);

    await db
      .update(UserOrgs)
      .set({
        isPrimary: false,
      })
      .where(and(eq(UserOrgs.userId, user.id), ne(UserOrgs.orgId, orgId)));

    await db
      .update(UserOrgs)
      .set({
        isPrimary: true,
      })
      .where(and(eq(UserOrgs.userId, user.id), eq(UserOrgs.orgId, orgId)));

    return c.json({ message: "Primary org updated" });
  }
);

export default app;
