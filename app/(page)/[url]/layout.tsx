import DefaultScripts from "@/Components/Scripts";
import { Suspense } from "react";
import ScriptsInner from "@/Components/ScriptsInner";

export default async function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
