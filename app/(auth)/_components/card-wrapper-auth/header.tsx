import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type CardWrapperAuthHeaderProps = {
	signUp?: boolean;
};

export const CardWrapperAuthHeader = ({
	signUp = false,
}: CardWrapperAuthHeaderProps) => {
	if (signUp) {
		return (
			<CardHeader className="text-center">
				<CardTitle className="text-2xl">Sign Up</CardTitle>
				<CardDescription>
					Create an account to continue using niustack.
				</CardDescription>
			</CardHeader>
		);
	}

	return (
		<CardHeader className="text-center">
			<CardTitle className="text-2xl">Sign In</CardTitle>
			<CardDescription>
				Continue using niustack with your account.
			</CardDescription>
		</CardHeader>
	);
};
