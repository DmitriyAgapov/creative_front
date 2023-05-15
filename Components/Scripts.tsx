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
			<Script src={`${process.env.NODE_FRONT}/assets/js/ScrollTrigger.min.j`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/ScrollToPlugin.min.j`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/ScrollSmoother.min.j`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/SplitText.min.j`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/chroma.min.j`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/mixitup.min.j`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/vanilla-tilt.j`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/jquery.meanmenu.min.j`}/>
			<Script src={`${process.env.NODE_FRONT}/assets/js/main.j`}/>
		</>
	);
}
