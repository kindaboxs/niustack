import { Hono } from "hono";

import { zValidator } from "@hono/zod-validator";

import { db } from "@/server/db";
import { loggedIn } from "@/server/middlewares/logged-in";
import { SuccessResponse } from "@/server/types";
import { createPostSchema } from "@/server/types/post-type";
import { AuthContext } from "@/server/utils/auth-context";
import * as httpStatusCodes from "@/server/utils/http-status-codes";

export const postRoute = new Hono<AuthContext>();

postRoute.post(
	"/",
	loggedIn,
	zValidator("form", createPostSchema),
	async (c) => {
		const { title, url, content } = c.req.valid("form");

		const user = c.get("user")!;

		const newPost = await db.post.create({
			data: {
				title,
				url,
				content,
				userId: user.id,
			},
		});

		return c.json<SuccessResponse<{ postId: number }>>(
			{
				success: true,
				message: "Post created successfully",
				data: {
					postId: newPost.id,
				},
			},
			httpStatusCodes.CREATED
		);
	}
);
