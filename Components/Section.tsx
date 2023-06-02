import Link from "next/link";
import Image from "next/image";
import React, { ReactElement } from "react";
import { parseHtml } from "@/utils/utils";

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
	children?: React.ReactElement;
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

export function SectionAboutUsFirstItem(props:{title:string, description: any | string | ReactElement, Items?: any[], Uptitle:string}) {

	const brTitle = props.title?.split(" ");

	return <div className="choose-wrapper wf_panel">
		<div className="container">
			<div className="row">
				<div className="col-xxl-12">
					<div className="choose-title-wrapper">
						<h2 className="choose-title title-anim">{brTitle.shift()}<br/>{brTitle}</h2>
					</div>
				</div>
			</div>
		</div>
	</div>;
}

export function SectionAboutUsSecondItem(props:{title:string, description: any | string | ReactElement, Items?: any[], Uptitle:string}) {
	const brUptitle = props.Uptitle?.split(" ");

	return <div className="research__area wf_panel pt-150">
		<div className="container inner_content">
			<div className="row">
				<div className="col-xxl-6 col-xl-6 col-lg-6">
					<div className="sec-title-wrapper">
						<h2 className="sec-sub-title">{brUptitle.shift()}<br/>{brUptitle.map((item, index) =>  {
							if (index % 2  == 0) {
								return item
							} else {
								return " " + item
							}})}</h2>
						<h3 className="sec-title">{props.title}</h3>
						{parseHtml(props.description)}
					</div>

				</div>
				<div className="col-xxl-6 col-xl-6 col-lg-6">
					<div className="research__list">
						{props.Items?.map(item => {

							return (
								<div className="research__item" key={item.index}>
									<div className="research__number">
										<span>{item.Uptitle}</span>
									</div>
									<div className="research__info">
										<h4 className="research__title">{item.Title}</h4>
										{parseHtml(item.Description)}
									</div>
								</div>)
						})}

					</div>
				</div>
			</div>
		</div>
	</div>;
}

export function SectionAboutUsFThirdItem(props:{title:string, description: any | string | ReactElement, Items?: any[], Uptitle:string}) {
	const brTitle = props.Uptitle?.split(" ");
	return <div className="counter__area-3 wf_panel">
		<div className="container">
			<div className="row">
				<div className="col-xxl-12">
					<div className="sec-title-wrapper">
						<h2 className="sec-sub-title">{brTitle.shift()}<br/>{brTitle.map((item, index) =>  {
							if (index % 2  == 0) {
								return item
							} else {
								return " " + item
							}})}</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
					<div className="counter__wrapper-3">
						{props.Items?.map(item => {

							return (
								<div className="counter__item-3" key={item.index}>
									<h2 className="counter__number">{item.Title}</h2>
									{parseHtml(item.Description)}
								</div>
							)
						})}


					</div>
				</div>
				<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
					<div className="counter__img-3">
						<img src="assets/imgs/thumb/counter-3.png"
							alt="Counter Image"/>
					</div>
				</div>
			</div>
		</div>
	</div>;
}

export function SectionAboutUsFourthItem(props:{title:string, description: any | string | ReactElement, Items?: any[], Uptitle:string}) {
	return <div className="cta__area-3 wf_panel">
		<div className="container pt-150 pb-150">
			<div className="row">
				<div className="col-xxl-12">
					<div className="cta__content-3">
						<p className="cta__sub-title-2">{props.Uptitle}</p>
						<h2 className="cta__title-2">{props.title}</h2>
						<div className="btn_wrapper">
							<a href="contact.html"
								className="wc-btn-black btn-hover btn-item"><span></span>Contact <br/>with
								us <i className="fa-solid fa-arrow-right"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>;
}

export const SectionAboutUs = ({ title, description, link, Items, Uptitle, className = "" , children}:SectionProps) => {

	return (
		<section className="workflow__area-3">
			<div className="workflow__wrapper-3">
				{children}

			</div>
		</section>
	)
};
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
									{Items?.map((item, index) => <li key={item.id}
										className={item.id == 0 ? 'active' : ''}><a href={`#service_${item.id}`}>{item.Title.split(" ")[0]} <br/>{item.Title.split(" ")[1]}</a></li>)}
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
									{Items?.map((item, index) => {
										console.log(item)
										return (
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
													{ parseHtml(item.Description) }
													<ul>
														{item.List_item.map((item:{id: any, Title:string}):JSX.Element => <li key={item.id}>+ {item.Title}</li>)}
													</ul>
													{item.Link.length > 0 && <div className="btn_wrapper">
														<a href={item.Link[0].url || "#"}
															className="wc-btn-secondary btn-item btn-hover"><span></span>{item.Link[0].Text || 'text none'}<i className="fa-solid fa-arrow-right"></i></a>
													</div>}

												</div>
											</div>)})}
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export const SectionTeam = (props:SectionProps) => {
	console.log(props)
	return (
		<section className="team__area-7">
			<h2 className="team__title-7 title-anim">{props.title}</h2>
			<div className="container">
				<div className="row">
					<div className="col-xxl-12">
						<div className="sec-text pb-100 text-anim">
							{parseHtml(props.description)}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xxl-12">
						<div className="team__items-7">
							{props.Items && props.Items?.length > 0 && props.Items?.map((item,index) => <a key={item.id} href="#">
								<div className="team__item-7 fade_bottom_3">
									<div className="team__name-wrap-7">
										<p className="tm-serial">0{index + 1}</p>

										<h3 className="tm-name">{item.FullName}</h3>
									</div>
									<h4 className="tm-role">{item.Position}</h4>
									<div className="tm-link"><i className="fa-solid fa-arrow-right"></i></div>
									<div className="team__hover-7"
										style={{backgroundImage: 'url(assets/imgs/team/1.jpg)'}}></div>
								</div>
							</a>)}


							<div className="team7__img-wrap">
								<div className="team7__img"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export const SectionSLider = ({ sections }:any|[]) => {
	// console.log(sections)
	const cl = [
		'portfolio__hero-area portfolio-section',
		'portfolio-section portfolio__about pt-140 pb-150',
		'portfolio-section portfolio__project'
	]
	return (
		<div className="portfolio__page">
			<div className="swiper portfolio__main-slider">
				<div className="swiper-wrapper portfolio__main-wrapper">
					{sections.map((section:{}, index:number) => <div key={index} className="swiper-slide">
						<SectionProblems {...section} className={cl[index]}/>
					</div>)}

				</div>
				<div className="swiper-pagination circle-pagination-2"></div>
			</div>
		</div>
	)
}
export default Section

