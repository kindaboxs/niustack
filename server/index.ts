import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import { env } from "@/env";
import { authRoute } from "@/server/routers/auth-router";
import { ErrorResponseServer } from "@/server/types";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route("/auth", authRoute);

app.get("/hello", (c) => {
	return c.json({
		message: "Hello from Hono!",
	});
});

app.onError((err, c) => {
	if (err instanceof HTTPException) {
		const errResponse =
			err.res ??
			c.json<ErrorResponseServer>(
				{
					success: false,
					error: err.message,
					isFormError:
						err.cause && typeof err.cause === "object" && "form" in err.cause
							? err.cause.form === true
							: false,
				},
				err.status
			);

		return errResponse;
	}

	return c.json<ErrorResponseServer>(
		{
			success: false,
			error:
				env.NODE_ENV === "production"
					? "Internal Server Error"
					: (err.stack ?? err.message),
		},
		500
	);
});

export default app;
export type ApiRoutes = typeof routes;
