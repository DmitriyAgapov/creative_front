import "./globals.scss";
import Footer from "@/Components/Footer";
import { HorizontalHeader, OffcanvasContact } from "@/Components/Header";
import getData from "@/utils/getData";
import { mainMenuList, webSiteConfig } from "@/utils/queries";
import React, { Suspense } from "react";
import { sortMenu } from "@/utils/utils";
import Script from "next/script";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: {
      menusMenuItems: { data },
    },
  } = await getData(mainMenuList);
  const {
    data: {
      websiteConfiguration: {
        data: { attributes },
      },
    },
  } = await getData(webSiteConfig);
  const sortedMenu = sortMenu(data);
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <Script
          strategy={"afterInteractive"}
          src={`https://theonebureau.design/assets/js/jquery-3.6.0.min.js`}
          // onLoad={() => setLoad((prevState) => prevState++)}
        />
        <Script
          strategy={"afterInteractive"}
          src={`https://theonebureau.design/assets/js/ScrollTrigger.min.js`}
          // onLoad={() => setLoad((prevState) => prevState++)}
        />
        <Script
          strategy={"afterInteractive"}
          src={`https://theonebureau.design/assets/js/gsap.min.js`}
          // onLoad={() => setLoad((prevState) => prevState++)}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>asd</title>
      </head>
      <body>
        <Suspense>
          <HorizontalHeader menus={sortedMenu} config={attributes} />
        </Suspense>
        {/*<Header />*/}
        <OffcanvasContact attributes={attributes} />
        {/*<div className="has-smooth" id="has_smooth"></div>*/}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main> {children}</main>
            <Suspense>
              <Footer menus={sortedMenu} config={attributes} />
            </Suspense>
          </div>
        </div>
        <button id="scroll_top" className="scroll-top">
          <i className="fa-solid fa-arrow-up"></i>
        </button>{" "}
      </body>
    </html>
  );
}
