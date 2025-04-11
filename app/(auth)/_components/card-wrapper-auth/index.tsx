import { Suspense } from "react";

import { CardWrapperAuthFooter } from "@/app/(auth)/_components/card-wrapper-auth/footer";
import { CardWrapperAuthHeader } from "@/app/(auth)/_components/card-wrapper-auth/header";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type CardWrapperAuthProps = {
	signUp?: boolean;
	children: React.ReactNode;
};

export const CardWrapperAuth = ({
	signUp = false,
	children,
}: CardWrapperAuthProps) => {
	return (
		<Card className="mx-auto mt-12 max-w-md">
			<CardWrapperAuthHeader signUp={signUp} />
			<CardContent>{children}</CardContent>
			<Suspense fallback={<CardFooterSkeleton />}>
				<CardWrapperAuthFooter signUp={signUp} />
			</Suspense>
		</Card>
	);
};

const CardFooterSkeleton = () => {
	return (
		<CardFooter>
			<div className="flex w-full items-center justify-center gap-1">
				<Skeleton className="h-3.5 w-40 rounded-md" />
				<Skeleton className="h-3.5 w-14 rounded-md" />
			</div>
		</CardFooter>
	);
};
