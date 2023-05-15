import Script from 'next/script';
export default function DefaultScripts(){
	return (
		<>
			<Script src={`${process.env.NODE_FRONT}/assets/js/jquery-3.6.0.min.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/bootstrap.bundle.min.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/swiper-bundle.min.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/counter.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/gsap.min.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/jquery-3.6.0.min.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/ScrollTrigger.min.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/ScrollToPlugin.min.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/ScrollSmoother.min.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/SplitText.min.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/chroma.min.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/mixitup.min.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/vanilla-tilt.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/jquery.meanmenu.min.js`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/main.js`}/>
		</>
	);
}
