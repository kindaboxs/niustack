"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { getQueryClient } from "@/lib/get-query-client";

const queryClient = getQueryClient();

export const AppQueryClientProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
