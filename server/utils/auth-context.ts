import type { Env } from "hono";

import { auth } from "@/lib/auth/server";

export interface AuthContext extends Env {
	Variables: {
		user: typeof auth.$Infer.Session.user | null;
		session: typeof auth.$Infer.Session.session | null;
	};
}
