import { authClient as client } from "@/lib/auth/client";
import type { auth } from "@/lib/auth/server";

export type Session = typeof auth.$Infer.Session;
export type ActiveOrganization = typeof client.$Infer.ActiveOrganization;
export type Invitation = typeof client.$Infer.Invitation;
