import { SiteHeader } from "@/components/global/header";
import { AppQueryClientProvider } from "@/components/provider/app-query-client-provider";

export const AppWrapperProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader />
			<div className="container grow p-4">
				<AppQueryClientProvider>{children}</AppQueryClientProvider>
			</div>
		</div>
	);
};
