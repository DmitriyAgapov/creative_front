"use client";
import Script from "next/script";
import { useEffect } from "react";
import { mainScript } from "@/Components/main";

const arrSc = ["https://theonebureau.design/assets/js/jquery-3.6.0.min.js", ""];

const OutScripts = (): any => {
  return (
    <>
      <Script
        strategy={"afterInteractive"}
        src={`https://theonebureau.design/assets/js/bootstrap.bundle.min.js`}
      />
      <Script
        strategy={"afterInteractive"}
        src={`https://theonebureau.design/assets/js/swiper-bundle.min.js`}
      />
      <Script
        strategy={"afterInteractive"}
        src={`https://theonebureau.design/assets/js/counter.js`}
      />
      <Script
        strategy={"afterInteractive"}
        src={`https://theonebureau.design/assets/js/ScrollToPlugin.min.js`}
      />
      <Script
        strategy={"afterInteractive"}
        src={`/assets/js/ScrollSmoother.min.js`}
      />

      <Script
        strategy={"afterInteractive"}
        src={`https://theonebureau.design/assets/js/SplitText.min.js`}
      />
      <Script
        strategy={"afterInteractive"}
        src={`https://theonebureau.design/assets/js/chroma.min.js`}
      />
      <Script
        strategy={"afterInteractive"}
        src={`https://theonebureau.design/assets/js/mixitup.min.js`}
      />
      <Script
        strategy={"afterInteractive"}
        src={`https://theonebureau.design/assets/js/vanilla-tilt.js`}
      />
      <Script
        strategy={"afterInteractive"}
        src={`https://theonebureau.design/assets/js/jquery.meanmenu.min.js`}
      />
    </>
  );
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
    mainScript();
  }, []);
  return (
    <OutScripts />

    //   {load > 13 && (
    //     <Suspense>
    //       <Script
    //         strategy={"afterInteractive"}
    //         src={`https://theonebureau.design/assets/js/main.js`}
    //       />
    //     </Suspense>
    //   )}
    // </>
  );
};

export default ScriptsInner;
