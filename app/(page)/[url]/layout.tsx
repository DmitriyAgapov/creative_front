"use client"

import { Suspense } from "react";
import DefaultScripts from "@/Components/Scripts";

export default async function PageLayout({
	children,
}: {
	children: React.ReactNode
}) {


	return (<>{children}
		<Suspense>
		<DefaultScripts/>
	</Suspense></>)}
