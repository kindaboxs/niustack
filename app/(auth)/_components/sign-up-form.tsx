"use client";

import { Suspense, useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { SignSocialButtons } from "@/app/(auth)/_components/sign-social-buttons";
import {
	signUpSchema,
	SignUpSchemaType,
} from "@/app/(auth)/_schemas/sign-up-schema";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { signUp } from "@/lib/auth/client";

export const SignUpForm = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const router = useRouter();

	const form = useForm<SignUpSchemaType>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			username: "",
			email: "",
			password: "",
		},
		mode: "all",
		reValidateMode: "onChange",
	});

	const onSubmitSignUp = async (data: SignUpSchemaType) => {
		await signUp.email({
			name: data.name,
			username: data.username,
			email: data.email,
			password: data.password,
			fetchOptions: {
				onRequest: () => {
					setLoading(true);
				},
				onSuccess: () => {
					setLoading(false);
					form.reset();
					router.push("/");
				},
				onError: (ctx) => {
					console.log(ctx);
					setLoading(false);
				},
			},
		});
	};

	return (
		<Card className="mx-auto mt-12 max-w-md">
			<CardHeader className="text-center">
				<CardTitle className="text-2xl">Sign Up</CardTitle>
				<CardDescription>
					Create an account to continue using niustack.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							e.stopPropagation();
							form.handleSubmit(onSubmitSignUp)(e);
						}}
						className="grid gap-4"
					>
						<div className="grid gap-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input placeholder="Your Name" type="text" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input
												placeholder="yourusername"
												type="text"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder="your@email.com"
												type="email"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												placeholder="********"
												type="password"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<Button
							type="submit"
							className="cursor-pointer"
							disabled={
								loading ||
								form.formState.isSubmitting ||
								!form.formState.isValid
							}
						>
							Sign Up
						</Button>
					</form>
				</Form>

				<div className="mt-6 space-y-4">
					<div className="flex items-center justify-center gap-2">
						<Separator className="flex-1" />
						<p className="text-muted-foreground text-sm">or</p>
						<Separator className="flex-1" />
					</div>

					<Suspense fallback={<Skeleton className="h-9 w-full rounded-md" />}>
						<SignSocialButtons />
					</Suspense>
				</div>
			</CardContent>
		</Card>
	);
};
