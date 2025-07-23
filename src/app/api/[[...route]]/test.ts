import { Hono } from "hono";

import { verifyAuth } from "@hono/auth-js";

const app = new Hono().get("/", verifyAuth(), (c) => {
  const { user } = c.get("authUser");

  if (!user) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  return c.json({ message: "Test route is working!" });
});

export default app;
