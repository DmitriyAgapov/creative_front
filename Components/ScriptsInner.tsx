"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
export default function ScriptsInner() {
  const pathname = usePathname();
  const router = useRouter();

  const [load, setLoad] = useState(0);
  const [currentPath, setPathname] = useState("");
  const arrSc = [
    "https://theonebureau.design/assets/js/jquery-3.6.0.min.js",
    "",
  ];
  const OutScripts = () => {
    return (
      <>
        <Script
          strategy={"afterInteractive"}
          src={`https://theonebureau.design/assets/js/bootstrap.bundle.min.js`}
          onLoad={() => setLoad((prevState) => prevState++)}
        />
        <Script
          strategy={"afterInteractive"}
          src={`https://theonebureau.design/assets/js/swiper-bundle.min.js`}
        />
        <Script
          strategy={"afterInteractive"}
          src={`https://theonebureau.design/assets/js/counter.js`}
          onLoad={() => {
            setLoad((prevState) => prevState++);
          }}
        />{" "}
        {/*<Script*/}
        {/*  strategy={"afterInteractive"}*/}
        {/*  src={`https://theonebureau.design/assets/js/ScrollTrigger.min.js`}*/}
        {/*  onLoad={() => {*/}
        {/*    setLoad((prevState) => prevState++);*/}
        {/*  }}*/}
        {/*/>*/}
        <Script
          strategy={"afterInteractive"}
          src={`https://theonebureau.design/assets/js/ScrollToPlugin.min.js`}
          onLoad={() => setLoad((prevState) => prevState++)}
        />
        {/*<Script*/}
        {/*  strategy={"afterInteractive"}*/}
        {/*  src={`https://theonebureau.design/assets/js/ScrollSmoother.min.js`}*/}
        {/*  onLoad={() => setLoad((prevState) => prevState++)}*/}
        {/*/>*/}
        <Script
          strategy={"afterInteractive"}
          src={`https://theonebureau.design/assets/js/SplitText.min.js`}
          onLoad={() => setLoad((prevState) => prevState++)}
        />
        <Script
          strategy={"afterInteractive"}
          src={`https://theonebureau.design/assets/js/chroma.min.js`}
          onLoad={() => setLoad((prevState) => prevState++)}
        />
        <Script
          strategy={"afterInteractive"}
          src={`https://theonebureau.design/assets/js/mixitup.min.js`}
          onLoad={() => setLoad((prevState) => prevState++)}
        />
        <Script
          strategy={"afterInteractive"}
          src={`https://theonebureau.design/assets/js/vanilla-tilt.js`}
          onLoad={() => setLoad((prevState) => prevState++)}
        />
        <Script
          strategy={"afterInteractive"}
          src={`https://theonebureau.design/assets/js/jquery.meanmenu.min.js`}
          onLoad={() => setLoad((prevState) => prevState++)}
        />
      </>
    );
  };
  useEffect(() => {
    setPathname(pathname);
    // componentDidMount() {}
    // const externalScript = document.createElement("script");
    // const externalScriptGsap = document.createElement("script");
    // const externalScript1 = document.createElement("script");
    // const externalScript2 = document.createElement("script");
    // const externalScript3 = document.createElement("script");
    // const externalScript4 = document.createElement("script");
    // const externalScript5 = document.createElement("script");
    // // @ts-ignore
    // externalScript.src = `https://theonebureau.design/assets/js/jquery-3.6.0.min.js`;
    // externalScriptGsap.src = `https://theonebureau.design/assets/js/gsap.min.js`;
    // externalScript2.src = `https://theonebureau.design/assets/js/bootstrap.bundle.min.js`;
    // externalScript3.src = `https://theonebureau.design/assets/js/swiper-bundle.min.js`;
    // externalScript4.src = `https://theonebureau.design/assets/js/counter.js`;
    // externalScript5.src = `https://theonebureau.design/assets/js/ScrollTrigger.min.js`;
    // externalScriptGsap.async = true;
    // externalScript.async = true;
    // externalScript1.async = true;
    // externalScript2.async = true;
    // externalScript3.async = true;
    // externalScript4.async = true;
    // externalScript5.async = true;
    // externalScript.async = true;
    // document.head.append(externalScript);
    // document.head.append(externalScriptGsap);
    // document.head.append(externalScript1);
    // document.head.append(externalScript2);
    // document.head.append(externalScript3);
    // document.head.append(externalScript4);
    // document.head.append(externalScript5);
    //
    // // const inlineScript = document.createElement('script');
    // // inlineScript.innerHTML = '...';
    // // document.body.append(inlineScript);
    //
    // // componentWillUnmount() {}
    console.log(load);
    setLoad(14);
    if (pathname !== currentPath)
      return () => {
        setLoad(0);
        // externalScript.remove();
        // externalScript1.remove();
        // externalScript2.remove();
        // externalScript3.remove();
        // externalScript4.remove();
        // externalScript5.remove();
        // inlineScript.remove();
      };
  }, [currentPath, load]);

  return (
    <>
      <OutScripts />
      {load > 13 && (
        <Script strategy={"afterInteractive"} src={`/assets/js/main.js`} />
      )}
    </>
  );
}
