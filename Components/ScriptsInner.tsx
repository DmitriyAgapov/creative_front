"use client";
import Script from "next/script";
import { Suspense, useEffect } from "react";
import { mainScript } from "@/Components/main";

const arrSc = ["https://theonebureau.design/assets/js/jquery-3.6.0.min.js", ""];

export const OutScripts = (): any => {
  return <></>;
};

const ScriptsInner = (): any => {
  // const pathname = usePathname();
  // const router = useRouter();
  // const [load, setLoad] = useState(0);
  // const [currentPath, setPathname] = useState("");
  //
  // useEffect(() => {
  //   setPathname(pathname);
  //   setLoad(14);
  //   if (pathname !== currentPath) {
  //     setLoad(0);
  //   }
  // }, [currentPath, load, pathname]);
  useEffect(() => {
    // mainScript();
  }, []);
  return (
    <>
      <Script
        strategy={"afterInteractive"}
        src={`https://theonebureau.design/assets/js/main.js`}
      />
    </>
    //     </Suspense>
    //   )}
    // </>
  );
};

export default ScriptsInner;
