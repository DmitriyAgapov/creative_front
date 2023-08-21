'use client'
import Script from 'next/script';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export default function ScriptsInner(){
	const pathname = usePathname()
	console.log(pathname)
	useEffect(() => {
		// componentDidMount() {}
		const externalScript = document.createElement('script');
		// @ts-ignore
		externalScript.src = process.env.NODE_ENV === 'development' ? 'http://localhost:10001/assets/js/main.js' : `${process.env.NODE_FRONT}/assets/js/main.js`;
		externalScript.async = true;
		document.head.append(externalScript);

		// const inlineScript = document.createElement('script');
		// inlineScript.innerHTML = '...';
		// document.body.append(inlineScript);

		// componentWillUnmount() {}
		return () => {
			externalScript.remove();
			// inlineScript.remove();
		};
	}, []);

	return <>
		<Script strategy={'afterInteractive'} src={`${process.env.NODE_ENV === 'development' ?    'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/jquery-3.6.0.min.js`}/>
		<Script  strategy={'afterInteractive'}   src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/bootstrap.bundle.min.js`}/>
		<Script  strategy={'afterInteractive'}   src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/swiper-bundle.min.js`}/>
		<Script  strategy={'afterInteractive'}   src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/counter.js`}/>
		<Script  strategy={'afterInteractive'}   src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/gsap.min.js`}/>
		{/*<Scr  strategy={'afterInteractive'}  ipt sr${process.env.NODE_ENV === 'development' ? 'http://localhost:10001/ : process.env.NODE_FRONT}:10001/assets/js/jquery-3.6.0.min.js`}/>*/}
		<Script  strategy={'afterInteractive'}   src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/ScrollTrigger.min.js`}/>
		<Script  strategy={'afterInteractive'}   src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/ScrollToPlugin.min.js`}/>
		<Script  strategy={'afterInteractive'}   src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/ScrollSmoother.min.js`}/>
		<Script  strategy={'afterInteractive'}   src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/SplitText.min.js`}/>
		<Script  strategy={'afterInteractive'}   src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/chroma.min.js`}/>
		<Script  strategy={'afterInteractive'}    src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/mixitup.min.js`}/>
		<Script  strategy={'afterInteractive'}   src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/vanilla-tilt.js`}/>
		<Script  strategy={'afterInteractive'}   src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:10001' : process.env.NODE_FRONT}/assets/js/jquery.meanmenu.min.js`}/>


	</>;
}
