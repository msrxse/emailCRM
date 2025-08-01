import { db } from "@/db";
import { Orgs, UserOrgs } from "@/db/org-schema";
import { verifyAuth } from "@hono/auth-js";
import { eq, inArray } from "drizzle-orm";
import { Hono } from "hono";

const app = new Hono().get("/", verifyAuth(), async (c) => {
  const { user } = c.get("authUser");
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const userOrgs = await db.query.UserOrgs.findMany({
    where: eq(UserOrgs.userId, user.id),
  });
  if (userOrgs.length === 0)
    return c.json({
      data: {
        primaryOrg: null,
        userOrgs: [],
      },
    });

  const primaryOrgId =
    userOrgs.find((org) => org.isPrimary)?.orgId ?? userOrgs[0].orgId;

  const orgs = await db.query.Orgs.findMany({
    where: inArray(
      Orgs.id,
      userOrgs.map((uo) => uo.orgId)
    ),
  });

  return c.json({
    data: {
      primaryOrg: orgs.find((org) => org.id === primaryOrgId) ?? null,
      userOrgs: orgs,
    },
  });
});

export default app;
