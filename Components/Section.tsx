import Link from "next/link";
import Image from "next/image";
import React, { ReactElement } from "react";

export const SectionTechStack = ({ title, description, link, Items, Uptitle }:SectionProps) => {
	return (
		<section className="brand__area">
			<div className="container g-0 line pt-140 pb-130">
				<span className="line-3"></span>
				<div className="row">
					<div className="col-xxl-12">
						<div className="sec-title-wrapper">
							<h2 className="sec-sub-title title-anim">{Uptitle}</h2>
							<h3 className="sec-title title-anim">{title}</h3>
						</div>
					</div>

					<div className="col-xxl-12">
						<div className="brand__list">
							{Items?.map((item, index) =>
								<div className="brand__item fade_bottom" key={index}>
									<Image src={`${process.env.BACK_URL}${item.Image.data[0].attributes.url}`}
										width={item.Image.data[0].attributes.width}
										height={item.Image.data[0].attributes.height}
										alt="Brand Logo"/>
								</div>)}

						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export const SectionWhatWeAlsoDo = ({ title, description, link, Items, Uptitle }:SectionProps) => {
	return (
		<section className=" service-v5 pt-140 pb-140 what-we-also-do">
			<div className="container">
				<div className="row">
					<div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
						<h2 className="sec-title animation__char_come"> {title}</h2>
					</div>
					<div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
						<div className="sec-text"
							dangerouslySetInnerHTML={{ __html: description }}/>

					</div>
				</div>
				<div className="portfolio__service-list">

					<div className="row">
						<div className="col-xxl-12">
							<div className="service__items-7 animation_service_7">
								{Items?.map((item, index) =>
									<div className="service__item-7"
										key={item.id}>
										<Link href={"#"}>
											<h3 className="service__title-7">{item.Title.split(" ")[0]} <span>{item.Title.split(" ")[1]}</span></h3>
										</Link>
										<div dangerouslySetInnerHTML={{ __html: item.Description }}/>
										<ul>
											{item.List_item.map((item:{id: any, Title: string}) => <li key={item.id}>+ {item.Title}</li>)}
										</ul>
									</div>)}

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

interface SectionProps {
	title?: string
	description?: any | string | ReactElement
	link?: {
		text: string
		link: string
	}
	Items?: any[]
	Uptitle?: string
	className?:string
}

export const SectionHowWeWork = ({ title, description, link, Items, Uptitle }:SectionProps) => {
	const Card = ({ num, title, description }:{num: number, title: string, description: any}) => <div className="swiper-slide workflow__slide fade_left">
		<h4 className="workflow__step">step 0{num}</h4>
		<h5 className="workflow__number">0{num}</h5>
		<h6 className="workflow__title">{title}</h6>
		<div dangerouslySetInnerHTML={{ __html: description }}/>
	</div>
	return (
		<section className="workflow__area">
			<div className="container g-0 line pt-140 pb-140">
				<div className="line-3"></div>
				<div className="row">
					<div className="col-xxl-12">
						<div className="sec-title-wrapper">
							<h2 className="sec-sub-title title-anim">{Uptitle}</h2>
							<h3 className="sec-title title-anim">{title}</h3>
						</div>
					</div>

					<div className="col-xxl-12">
						<div className="swiper workflow__slider ">
							<div className="swiper-wrapper">
								{Items?.map((item, index) => <Card key={index}
									num={index + 1}
									title={item.Title}
									description={item.Description}/>)}

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export const SectionProblems = ({ title, description, link, Items, Uptitle, className = "" }:SectionProps) => {
	return (

		<section className={`career__benefits ${className}` }>
			<div className="container  g-0 pt-100 pb-100">

				<span className="line-3"></span>

				<div className="row">
					<div className="col-xxl-7 col-xl-7 col-lg-7">
						<div className="sec-title-wrapper">
							<h2 className="sec-title title-anim">{title}</h2>
							<div className={'text-anim'} dangerouslySetInnerHTML={{ __html: description }}/>
						</div>
					</div>
					<div className="col-xxl-5 col-xl-5 col-lg-5">
						<ul className="career__benefits-list">
							{Items?.map(item => <li key={item.id}>{item.Title}</li>)}


						</ul>
					</div>

				</div>
			</div>
		</section>


	)
}
export const SectionPitch = ({ title, description, link, Items, Uptitle }:SectionProps) => {
	return (
		<section className="about__area">
			<div className="container line g-0 pt-140 pb-130">
				<span className="line-3"></span>
				<div className="row">
					<div className="col-xxl-12">
						<div className="about__title-wrapper">
							<h3 className="sec-title title-anim">{title}</h3>
						</div>

						<div className="about__content-wrapper">
							<div className="about__img">
								<div className="img-anim">
									<img src="assets/imgs/about/1/1.jpg"
										alt="About Image"
										data-speed="0.3"/>
								</div>

								<div className="about__img-right">
									<img src="assets/imgs/about/1/2.jpg"
										alt="About Image Right"
										data-speed="0.5"/>
									<div className="shape">
										<div className="secondary"
											data-speed="0.9"></div>
										<div className="primary"></div>
									</div>
								</div>
							</div>

							<div>
								<div className="about__content text-anim"
									dangerouslySetInnerHTML={{ __html: description }}/>


								<div className="cursor-btn btn_wrapper">
									<a className="btn-item wc-btn-primary btn-hover"
										href="about.html"><span></span> Explore Us <i className="fa-solid fa-arrow-right"></i></a>

								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}
export const SectionScreen = ({ title, description, link, Items, Uptitle }:SectionProps) => {

	return (
		<section className="service__hero-2">
			<div className="container">
				<div className="row">
					<div className="col-xxl-12">
						<div className="service__hero-inner-2">
							<div className="service__hero-left-2">
								<img src="assets/imgs/home-7/sh-1.jpg"
									alt="Image"
									className="image-1"/>
								<img src="assets/imgs/home-7/sh-2.jpg"
									alt="Image"
									className="image-2"/>
								<img src="assets/imgs/home-7/sh-3.jpg"
									alt="Image"
									className="image-3"/>
								<img src="assets/imgs/home-7/sh-4.jpg"
									alt="Image"
									className="image-4"/>
							</div>
							<div className="service__hero-right-2 hero7__thum-anim">
								<h1 className="title creative">{title?.split(" ")[0]} <span className="solution">{title?.split(" ")[1]}</span></h1>
								<div className="animate_content"
									dangerouslySetInnerHTML={{ __html: description }}/>
								<img src="assets/imgs/home-7/scroll.png"
									alt="scroll Image"
									className="scroll"/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img src="assets/imgs/home-7/shape-6.png"
				alt="Shape Image"
				className="shape-1"/>
		</section>
	);
}


const Section = ({ title, description, link, Items, Uptitle }:SectionProps) => {
	return (
		<section className="service__area-6">
			<div className="container">
				<div className="row inherit-row">
					<div className="col-xxl-12">
						<div className="content-wrapper">
							<div className="left-content">
								<ul className="service__list-6">
									{Items?.map((item, index) => {
										console.log(item)
										return(
										<li key={item.id}
											className={item.id == 0 ? 'active' : ''}><a href={`#service_${item.id}`}>{item.Title.split(" ")[0]} <br/>{item.Title.split(" ")[1]}</a></li>
										)})}
								</ul>
							</div>

							<div className="mid-content">
								<div className="service__image">
									<img src="assets/imgs/service/1.jpg"
										alt="Service Image"/>
								</div>
								<div className="service__image">
									<img src="assets/imgs/service/2.jpg"
										alt="Service Image"/>
								</div>
								<div className="service__image">
									<img src="assets/imgs/service/3.jpg"
										alt="Service Image"/>
								</div>
								<div className="service__image">
									<img src="assets/imgs/service/4.jpg"
										alt="Service Image"/>
								</div>
								<div className="service__image">
									<img src="assets/imgs/service/5.jpg"
										alt="Service Image"/>
								</div>
								<div className="service__image">
									<img src="assets/imgs/service/4.jpg"
										alt="Service Image"/>
								</div>
							</div>

							<div className="right-content">
								<div className="service__items-6">
									{Items?.map((item, index) =>
										<div key={item.id}
											className={`service__item-6 ${item.id == 0 ? 'has__service_animation' : ''}`}
											id={`service_${item.id}`}
											data-secid={item.id}>
											<div className="image-tab">
												<img src="assets/imgs/service/1.jpg"
													alt="Service Image"/>
											</div>

											<div className="animation__service_page">
												<h2 className="service__title-6">{item.Title}</h2>
												<div dangerouslySetInnerHTML={{ __html: item.Description }}/>
												<ul>
													{item.List_item.map((item:{id: any, Title:string}):JSX.Element => <li key={item.id}>+ {item.Title}</li>)}
												</ul>
												<div className="btn_wrapper">
													<a href="#"
														className="wc-btn-secondary btn-item btn-hover"><span></span>Get
														free
														<br/>qoutes <i className="fa-solid fa-arrow-right"></i></a>
												</div>

											</div>
										</div>)}
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export const SectionSLider = ({ sections }) => {
	console.log(sections)
	const cl = [
		'portfolio__hero-area portfolio-section',
		'portfolio-section portfolio__about pt-140 pb-150',
		'portfolio-section portfolio__project'
	]
	return (
		<div className="portfolio__page">
			<div className="swiper portfolio__main-slider">
				<div className="swiper-wrapper portfolio__main-wrapper">
					{sections.map((section, index) => <div key={index} className="swiper-slide">
						<SectionProblems {...section} className={cl[index]}/>
					</div>)}

				</div>
				<div className="swiper-pagination circle-pagination-2"></div>
			</div>
		</div>
)
}
export default Section

