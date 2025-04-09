import { env } from "@/env";

export const APP_NAME =
	env.NODE_ENV === "production" ? "nuistack" : "niustack (dev)";
