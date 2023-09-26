"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const NoSSR = dynamic(() => import("@/Components/ScriptsInner"), {
  ssr: false,
});
export default function Template({ children }: { children: React.ReactNode }) {
  // @ts-ignore
  return (
    <div>
      {children}
      {/*<Suspense>*/}
      {/*//@ts-ignore*/}
      <NoSSR />
      {/*</Suspense>*/}
    </div>
  );
}
