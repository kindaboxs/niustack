"use client";

import { useState } from "react";
import Link from "next/link";

import { LogOutIcon, MenuIcon, UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import { ThemeToggleMode } from "../theme-toggle-mode";

export const MobileNavHeader = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className="flex items-center space-x-4 md:hidden">
			<ThemeToggleMode />

			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="size-8 cursor-pointer"
					>
						<MenuIcon />
					</Button>
				</SheetTrigger>
				<SheetContent side="bottom">
					<SheetHeader>
						<SheetTitle className="text-2xl font-bold">niustack</SheetTitle>
						<SheetDescription>
							a simple platform created by @mrboxs.
						</SheetDescription>
					</SheetHeader>
					<div className="grid gap-4 px-4">
						<SheetClose asChild>
							<Button variant="outline" className="cursor-pointer" asChild>
								<Link href="#">new</Link>
							</Button>
						</SheetClose>
						<SheetClose asChild>
							<Button variant="outline" className="cursor-pointer" asChild>
								<Link href="#">top</Link>
							</Button>
						</SheetClose>
						<SheetClose asChild>
							<Button variant="outline" className="cursor-pointer" asChild>
								<Link href="#">submit</Link>
							</Button>
						</SheetClose>
					</div>
					<SheetFooter>
						<div className="flex items-center justify-center gap-4">
							<SheetClose asChild>
								<Button className="w-full shrink cursor-pointer">
									<LogOutIcon />
									Sign out
								</Button>
							</SheetClose>
							<SheetClose asChild>
								<Button className="cursor-pointer" size="icon">
									<UserIcon />
								</Button>
							</SheetClose>
						</div>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
};
