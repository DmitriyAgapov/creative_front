import Link from "next/link";
import Image from "next/image";
import getData from "@/utils/getData";
import { mainMenuList, webSiteConfig } from "@/utils/queries";
import menuBlack from "@/assets/imgs/icon/menu-black.png"


export const Preloader = () => {
	return (
		<div className="preloader">
			<div className="loading">
				<div className="bar bar1"></div>
				<div className="bar bar2"></div>
				<div className="bar bar3"></div>
				<div className="bar bar4"></div>
				<div className="bar bar5"></div>
				<div className="bar bar6"></div>
				<div className="bar bar7"></div>
				<div className="bar bar8"></div>
			</div>
		</div>
	)
}
export const Offcanvas = async () => {
	const {data: {menusMenuItems: {data}}} = await getData(mainMenuList)
	// console.log(data)
	const {data: {websiteConfiguration: {data: {attributes}}}} = await getData(webSiteConfig);
	return (
		<div className="offcanvas__area">
			<div className="offcanvas__body">
				<div className="offcanvas__left">
					<div className="offcanvas__logo">
						<Link href={"/"}
							><Image width={attributes.logo.data.attributes.width} height={attributes.logo.data.attributes.height} src={`${process.env.NODE_ENV === 'development' ? process.env.BACK_URL : process.env.NODE_API}${attributes.logo.data.attributes.url}`}
							alt="Site Logo"/></Link>

					</div>
					<div className="offcanvas__social">
						<h3 className="social-title">Follow Us</h3>
						<ul>
							<li><a href="#">Dribbble</a></li>
							<li><a href="#">Behance</a></li>
							<li><a href="#">Instagram</a></li>
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Twitter</a></li>
							<li><a href="#">YouTube</a></li>
						</ul>
					</div>
					<div className="offcanvas__links">
						<ul>
							<li><a href="about.html">About</a></li>
							<li><a href="contact.html">contact</a></li>
							<li><a href="career.html">Career</a></li>
							<li><a href="blog.html">blog</a></li>
						</ul>
					</div>
				</div>
				<div className="offcanvas__mid">
					<div className="offcanvas__menu-wrapper">
						<nav className="offcanvas__menu">
							<ul className="menu-anim">
								<li><a>home</a>
									<ul>
										<li><a href="index.html">Digital Maketing</a></li>
										<li><a href="index-dark.html">Digital Maketing dark</a></li>
										<li><a href="index-2.html">Design Studio </a></li>
										<li><a href="index-2-dark.html">Design Studio dark</a></li>
										<li><a href="index-3.html">Digital Agency</a></li>
										<li><a href="index-3-dark.html">Digital Agency dark</a></li>
										<li><a href="index-7.html">creative Agency</a></li>
										<li><a href="index-7-dark.html">creative Agency dark</a></li>
										<li><a href="index-6.html">Startup Agency</a></li>
										<li><a href="index-6-dark.html">Startup Agency dark</a></li>
										<li><a href="index-8.html">modern agency</a></li>
										<li><a href="index-8-dark.html">modern agency dark</a></li>
										<li><a href="index-4.html">personal Portfolio</a></li>
										<li><a href="index-4-dark.html">personal Portfolio dark</a></li>
										<li><a href="index-5.html">portfolio showcase</a></li>
										<li><a href="index-5-dark.html">portfolio showcase dark</a></li>
										<li><a href="index-10.html">showcase carousel</a></li>
										<li><a href="index-10-dark.html">showcase carousel dark</a></li>
										<li><a href="index-12.html">Interactive link </a></li>
										<li><a href="index-12-dark.html">Interactive link dark</a></li>
										<li><a href="index-13.html">portfolio masonry</a></li>
										<li><a href="index-13-dark.html">portfolio masonry dark</a></li>
										<li><a href="index-14.html">vertical grid</a></li>
										<li><a href="index-14-dark.html">vertical grid dark</a></li>
										<li><a href="index-15.html">Interactive image slider</a></li>
										<li><a href="index-15-dark.html">Interactive image slider dark</a></li>
										<li><a href="index-16.html">showcase parallax</a></li>
										<li><a href="index-16-dark.html">showcase parallax dark</a></li>
										<li><a href="index-17.html">logo showcase</a></li>
										<li><a href="index-17-dark.html">logo showcase dark</a></li>
										<li><a href="index-9.html">showcase slider</a></li>
										<li><a href="index-11.html">Interactive hover showcase</a></li>
									</ul>
								</li>
								<li><a href="about.html">about</a></li>
								<li>
									<a>Service</a>
									<ul>
										<li><a href="service.html">service</a></li>
										<li><a href="service-dark.html">service dark</a></li>
										<li><a href="service-2.html">service V.2</a></li>
										<li><a href="service-2-dark.html">service V.2 dark</a></li>
										<li><a href="service-3.html">service V.3</a></li>
										<li><a href="service-3-dark.html">service V.3 dark</a></li>
										<li><a href="service-4.html">service V.4</a></li>
										<li><a href="service-4-dark.html">service V.4 dark</a></li>
										<li><a href="service-5.html">service V.5</a></li>
										<li><a href="service-5-dark.html">service V.5 dark</a></li>
										<li><a href="service-6.html">service V.6</a></li>
										<li><a href="service-6-dark.html">service V.6 dark</a></li>
										<li><a href="service-details.html">service details</a></li>
										<li><a href="service-details-dark.html">service details dark</a></li>
									</ul>
								</li>
								<li><a>pages</a>
									<ul>

										<li>
											<a>Service</a>
											<ul>
												<li><a href="service.html">service</a></li>
												<li><a href="service-dark.html">service dark</a></li>
												<li><a href="service-2.html">service V.2</a></li>
												<li><a href="service-2-dark.html">service V.2 dark</a></li>
												<li><a href="service-3.html">service V.3</a></li>
												<li><a href="service-3-dark.html">service V.3 dark</a></li>
												<li><a href="service-4.html">service V.4</a></li>
												<li><a href="service-4-dark.html">service V.4 dark</a></li>
												<li><a href="service-5.html">service V.5</a></li>
												<li><a href="service-5-dark.html">service V.5 dark</a></li>
												<li><a href="service-6.html">service V.6</a></li>
												<li><a href="service-6-dark.html">service V.6 dark</a></li>
												<li><a href="service-details.html">service details</a></li>
												<li><a href="service-details-dark.html">service details dark</a></li>
											</ul>
										</li>
										<li>
											<a>portfolio</a>
											<ul>
												<li><a href="portfolio.html">portfolio</a></li>
												<li><a href="portfolio-dark.html">portfolio dark</a></li>
												<li><a href="portfolio-2.html">portfolio v.2</a></li>
												<li><a href="portfolio-2-dark.html">portfolio v.2 dark</a></li>
												<li><a href="portfolio-3.html">portfolio v.3</a></li>
												<li><a href="portfolio-3-dark.html">portfolio v.3 dark</a></li>
												<li><a href="portfolio-4.html">portfolio v.4</a></li>
												<li><a href="portfolio-4-dark.html">portfolio v.4 dark</a></li>
												<li><a href="portfolio-5.html">portfolio v.5</a></li>
												<li><a href="portfolio-5-dark.html">portfolio v.5 dark</a></li>
												<li><a href="portfolio-details.html">portfolio details</a></li>
												<li><a href="portfolio-details-dark.html">portfolio details dark</a></li>
											</ul>
										</li>
										<li>
											<a>team</a>
											<ul>
												<li><a href="team.html">Team</a></li>
												<li><a href="team-dark.html">Team dark</a></li>
												<li><a href="team-details.html">Team Details</a></li>
												<li><a href="team-details-dark.html">Team Details dark</a></li>
												<li><a href="career.html">career</a></li>
												<li><a href="career-dark.html">career dark</a></li>
												<li><a href="job-details.html">job details</a></li>
												<li><a href="job-details-dark.html">job details dark</a></li>
											</ul>
										</li>
										<li>
											<a>blog</a>
											<ul>
												<li><a href="blog.html">blog</a></li>
												<li><a href="blog-dark.html">blog dark</a></li>
												<li><a href="blog-2.html">blog v.2</a></li>
												<li><a href="blog-2-dark.html">blog v.2 dark</a></li>
												<li><a href="category.html">category</a></li>
												<li><a href="category-dark.html">category dark</a></li>
												<li><a href="blog-details.html">blog details</a></li>
												<li><a href="blog-details-dark.html">blog details dark</a></li>
											</ul>
										</li>
										<li>
											<a>Others</a>
											<ul>
												<li><a href="about.html">about</a></li>
												<li><a href="about-dark.html">about dark</a></li>
												<li><a href="faq.html">FAQs</a></li>
												<li><a href="faq-dark.html">FAQs dark</a></li>
												<li><a href="contact.html">contact</a></li>
												<li><a href="contact-dark.html">contact dark</a></li>
												<li><a href="404.html">404</a></li>
												<li><a href="404-dark.html">404 dark</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li><a>blog</a>
									<ul>
										<li><a href="blog.html">blog</a></li>
										<li><a href="blog-dark.html">blog dark</a></li>
										<li><a href="blog-2.html">blog v.2</a></li>
										<li><a href="blog-2-dark.html">blog v.2 dark</a></li>
										<li><a href="category.html">category</a></li>
										<li><a href="category-dark.html">category dark</a></li>
										<li><a href="blog-details.html">blog details</a></li>
										<li><a href="blog-details-dark.html">blog details dark</a></li>
									</ul>
								</li>
								<li><a href="contact.html">contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="offcanvas__right">

					<div className="offcanvas__contact">
						<h3>Get in touch</h3>
						<ul>
							<li><a href="tel:02094980547">+(02) - 094 980 547</a></li>
							<li><a href="mailto:info@extradesign.com">info@extradesign.com</a></li>
							<li>230 Norman Street New York, QC (USA) H8R 1A1</li>
						</ul>
					</div>
					<img src="/assets/imgs/shape/11.png"
						alt="shape"
						className="shape-1"/>
					<img src="/assets/imgs/shape/12.png"
						alt="shape"
						className="shape-2"/>
				</div>
				<div className="offcanvas__close">
					<button type="button"
						id="close_offcanvas"><i className="fa-solid fa-xmark"></i></button>
				</div>
			</div>
		</div>
	)
}

function MenuItem({item}:any) {

	const SubItems = ( {items}:{ items: { id: string, url: string, title: string }[]}) => {
		// console.log(items)
		return (<>{items.map((subItem:any) => <li key={subItem.id}>
				<Link prefetch={false} href={subItem.attributes.url}>{subItem.attributes.title}</Link>
			</li>)}</>)

	}
	return <li>
		<Link prefetch={false}  href={item.url}>{item.title}</Link>
			{item.childs ? 		<ul className="main-dropdown"><SubItems  items={item.childs}/></ul> : null}

	</li>;
}

export const HorizontalHeader =  ({menus, config}:{menus:any[], config: any[]}) => {


	const sortMenu = (ar:any[]) => {

		const newAr:any = [];
		ar.sort((a, b) => a.id - b.id);

		ar.forEach((item) => {
			if(!item.attributes.parent.data) {
				newAr.push(item)
			}
		});

		ar.forEach((item) => {
			if(item.attributes.parent.data !== null) {
				const {id} = item.attributes.parent.data;
				const targetChild = newAr.filter((item:any) => item.id === id)[0].attributes;
				if(!targetChild.childs) targetChild.childs = [];
				newAr.filter((item:any) => item.id === id)[0].attributes.childs.push(item);

			}
		});

		return newAr
	}
	const sortedMenu = sortMenu(menus);

	if(sortedMenu.length > 0) {
		return (
				<>
					<header className="header__area-3">
						<div className="header__inner-3">
							<div className="header__logo-2">
								{/*<Link href={"/"}*/}
								{/*	className="logo-dark"><Image src={"assets/imgs/logo/logo-black.png"}*/}
								{/*	alt="Site Logo"/></Link>*/}
								<Link href={"/"}
									className="logo-dark"><Image
									// @ts-ignore
									width={config.logo.data.attributes.width / 2}
									// @ts-ignore
									height={config.logo.data.attributes.height / 2}
									// @ts-ignore
									src={`${process.env.NODE_ENV === 'development' ? process.env.BACK_URL : process.env.BACK_URL}${config.logo.data.attributes.url}`}
									alt="Site Logo"/></Link>
								<Link href={"/"}
									className="logo-light"><Image
									// @ts-ignore
									width={config.logo.data.attributes.width}
									// @ts-ignore
									height={config.logo.data.attributes.height}
									// @ts-ignore
									src={`${process.env.NODE_ENV === 'development' ? process.env.BACK_URL : process.env.BACK_URL}${config.logo.data.attributes.url}`}
									alt="Site Logo"/></Link>
							</div>
							<div className="header__nav-2">
								<ul className="main-menu-3 menu-anim">
									{sortedMenu.map((item:any) => <MenuItem key={item.id} item={item.attributes} />)}

								</ul>
							</div>
							<div className="header__nav-icon-3">
								<button className="search-icon"
									id="search_icon"><i className="fa-solid fa-magnifying-glass"></i></button>
								<button className="search-icon"
									id="search_close"><i className="fa-solid fa-xmark"></i></button>
								<button id="open_offcanvas"><Image src={menuBlack}
									alt="Menubar Icon"/></button>
							</div>
						</div>
					</header>
					<div className="header__search">
						<form action="#">
							<input type="text"
								name="s"
								id="s"
								placeholder="Search.."/>
						</form>
					</div>
				</>
			)
	}
	return null;


}
function Header() {
	return <header className="header__area">
		<div className="header__inner">
			<div className="header__logo">
				<a href="/">
					<img className="logo-primary"
						src={"/assets/imgs/logo/site-logo-white.png"}
						alt="Site Logo"/>
					<img className="logo-secondary"
						src="/assets/imgs/logo/site-logo-white-2.png"
						alt="Moibile Logo"/>
				</a>
			</div>
			<div className="header__nav-icon">
				<button id="open_offcanvas"><img src="/assets/imgs/icon/menu-white.png"
					alt="Menubar Icon"/></button>
			</div>
			<div className="header__support">
				<p>Support center <a href="tel:+9587325902">+9 587 325 902</a></p>
			</div>
		</div>
	</header>;
}
export default Header
