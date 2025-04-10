import { AppQueryClientProvider } from "@/components/provider/app-query-client-provider";

export const AppWrapperProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div>
			<AppQueryClientProvider>{children}</AppQueryClientProvider>
		</div>
	);
};
