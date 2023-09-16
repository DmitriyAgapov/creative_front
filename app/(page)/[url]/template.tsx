import ScriptsInner from "@/Components/ScriptsInner";
import { Suspense } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Suspense>
        <ScriptsInner />
      </Suspense>
    </div>
  );
}
