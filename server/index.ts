import { Hono } from "hono";

import notFound from "@/server/middlewares/not-found";
import onError from "@/server/middlewares/on-error";
import { authRoute } from "@/server/routers/auth-router";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route("/auth", authRoute);

app.notFound(notFound);
app.onError(onError);

export default app;
export type ApiRoutes = typeof routes;
