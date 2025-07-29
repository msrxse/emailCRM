import "dotenv/config";
import { Context, Hono } from "hono";
import { handle } from "hono/vercel";

import { authConfig } from "@/app/auth";

import { AuthConfig, initAuthConfig } from "@hono/auth-js";

import test from "./test";

const getAuthConfig = (c: Context): AuthConfig => ({
  ...authConfig,
  secret: c.env.AUTH_SECRET,
});

const app = new Hono<{
  Bindings: {
    AUTH_SECRET: string;
  };
}>().basePath("/api");

/**
 * Outside platforms like Cloudflare Workers, you often need to
 * inject environment bindings manually into c.env, since Hono won’t automatically
 * map process.env in a traditional Node.js environment.
 *
 * If you ever migrate to something like Deno, Bun, or a serverless provider,
 * you might need to tweak that again depending on how they expose env vars.
 *
 * See: https://github.com/honojs/middleware/tree/main/packages/auth-js
 */
app.use("*", async (c, next) => {
  // Inject environment variables into context manually
  c.env = {
    AUTH_SECRET: process.env.AUTH_SECRET!,
  };
  await next();
});

app.use("*", initAuthConfig(getAuthConfig));

const routes = app.route("/test", test);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);

export type AppType = typeof routes;
