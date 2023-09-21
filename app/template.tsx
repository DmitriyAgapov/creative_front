"use client";
import dynamic from "next/dynamic";

// @ts-ignore
const NoSSR = dynamic(() => import("@/Components/ScriptsInner.tsx"), {
  ssr: true,
});
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}

      <NoSSR />
    </div>
  );
}
