import type { ApiRoutes } from "@/server";

export type SuccessResponse<T = void> = {
	success: true;
	message: string;
} & (T extends void ? object : { data: T });

export type ErrorResponseServer = {
	success: false;
	error: string;
	isFormError?: boolean;
};

export { type ApiRoutes };
