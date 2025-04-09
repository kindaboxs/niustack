import type { ErrorHandler } from "hono";
import { HTTPException } from "hono/http-exception";

import { env } from "@/env";
import { ErrorResponseServer } from "@/server/types";
import * as httpStatusCodes from "@/server/utils/http-status-codes";

const onError: ErrorHandler = (err, c) => {
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
				[httpStatusCodes.BAD_REQUEST, httpStatusCodes.UNAUTHORIZED].includes(
					err.status
				)
					? err.status
					: httpStatusCodes.INTERNAL_SERVER_ERROR
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
		httpStatusCodes.INTERNAL_SERVER_ERROR
	);
};

export default onError;
