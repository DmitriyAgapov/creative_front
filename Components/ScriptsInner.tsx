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
		externalScript.src = 'http://localhost:10001/assets/js/main.js';
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
		<Script strategy={'beforeInteractive'} src={`http://localhost:10001/assets/js/jquery-3.6.0.min.js`}/>
		<Script  strategy={'beforeInteractive'}   src={`http://localhost:10001/assets/js/bootstrap.bundle.min.js`}/>
		<Script  strategy={'beforeInteractive'}   src={`http://localhost:10001/assets/js/swiper-bundle.min.js`}/>
		<Script  strategy={'beforeInteractive'}   src={`http://localhost:10001/assets/js/counter.js`}/>
		<Script  strategy={'beforeInteractive'}   src={`http://localhost:10001/assets/js/gsap.min.js`}/>
		{/*<Scr  strategy={'beforeInteractive'}  ipt src={`http://localhost:10001/assets/js/jquery-3.6.0.min.js`}/>*/}
		<Script  strategy={'beforeInteractive'}   src={`http://localhost:10001/assets/js/ScrollTrigger.min.js`}/>
		<Script  strategy={'beforeInteractive'}   src={`http://localhost:10001/assets/js/ScrollToPlugin.min.js`}/>
		<Script  strategy={'beforeInteractive'}   src={`http://localhost:10001/assets/js/ScrollSmoother.min.js`}/>
		<Script  strategy={'beforeInteractive'}   src={`http://localhost:10001/assets/js/SplitText.min.js`}/>
		<Script  strategy={'beforeInteractive'}   src={`http://localhost:10001/assets/js/chroma.min.js`}/>
		<Script  strategy={'beforeInteractive'}    src={`http://localhost:10001/assets/js/mixitup.min.js`}/>
		<Script  strategy={'beforeInteractive'}   src={`http://localhost:10001/assets/js/vanilla-tilt.js`}/>
		<Script  strategy={'beforeInteractive'}   src={`http://localhost:10001/assets/js/jquery.meanmenu.min.js`}/>


	</>;
}
