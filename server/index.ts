import { Hono } from "hono";
import { cors } from "hono/cors";

import { env } from "@/env";
import notFound from "@/server/middlewares/not-found";
import onError from "@/server/middlewares/on-error";
import { authRoute } from "@/server/routers/auth-router";

const app = new Hono().basePath("/api");

app.use(
	"*",
	cors({
		origin: env.NEXT_PUBLIC_APP_URL,
		allowHeaders: ["Content-Type", "Authorization"],
		allowMethods: ["POST", "GET", "OPTIONS"],
		exposeHeaders: ["Content-Length"],
		maxAge: 600,
		credentials: true,
	})
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route("/auth", authRoute);

app.notFound(notFound);
app.onError(onError);

export default app;
export type ApiRoutes = typeof routes;
