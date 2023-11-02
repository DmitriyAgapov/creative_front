import Link from "next/link";
import Image from "next/image";
import React, { ReactElement } from "react";
import { parseHtml } from "@/utils/utils";
import Script from "next/script";
import ContactForm from "@/Components/ContactForm/ContactForm";
import getData from "@/utils/getData";
import { webSiteConfig } from "@/utils/queries";
interface SectionProps {
  title?: string;
  attributes?: any;
  description?: any | string | ReactElement;
  link?: {
    text: string;
    link: string;
    url?: string;
  };

  Items?: any[];
  Uptitle?: string;
  className?: string;
  children?: React.ReactElement;
}
interface SectionSolutionPage extends SectionProps {
  price?: number;
  price_period?: string;
}
export const SectionCta = ({
  title,
  description,
  link,
  Items,
  Uptitle,
}: SectionProps) => {
  // @ts-ignore

  return (
    <section className="cta__area">
      <div className="container line pt-140 pb-110">
        <div className="line-3"></div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="cta__content">
              <p className="cta__sub-title">{Uptitle}</p>
              <h2 className="cta__title title-anim">{title}</h2>
              <div className="btn_wrapper">
                <a
                  // @ts-ignore
                  // href={link?.url || "/"}
                  id={"offcanvas__area-contact_form-toggle"}
                  className="wc-btn-primary btn-hover btn-item"
                >
                  <span></span>
                  {
                    // @ts-ignore
                    link?.Text
                  }{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const SectionCase = ({
  title,
  description,
  link,
  Items,
  Uptitle,
}: SectionProps) => {
  const dt = Items?.filter(
    (item) => item.__typename == "ComponentLayoutDefinitionTable",
  );
  const blocks = Items?.filter(
    (item) => item.__typename == "ComponentCardsCard",
  );
  const media = Items?.filter(
    (item) => item.__typename == "ComponentLayoutMedia",
  );

  return (
    <section className="portfolio__detail">
      <div className="portfolio__detail-top">
        <div className="container g-0  pt-110 pb-6 lg:pb-20 divide-y">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come">
                  {title?.split(" ")[0]} <br />
                  {title?.split(" ")[1]}
                </h2>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="portfolio__detail-info">
                <ul className={"portfolio__description_header"}>
                  {dt?.map((item) => (
                    <li key={item.id}>
                      {item.Term}
                      <span> {item.Text}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={"portfolio__description"}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {media && media.length >= 1 && (
        <div key={media[0].id} className="portfolio__detail-thumb">
          <Image
            // fill={true}
            quality={90}
            src={`${
              process.env.NODE_ENV === "development"
                ? process.env.BACK_URL
                : process.env.NODE_BACK
            }${media[0].img.data.attributes.url}`}
            width={media[0].img.data.attributes.width}
            height={media[0].img.data.attributes.height}
            alt={media[0].alt}
            data-speed="auto"
          />
        </div>
      )}

      <div className="portfolio__detail-content">
        <div className="container-md divide-y   g-0  pt-100 lg:px-24 bg-white  relative z-50">
          {blocks && (
            <div key={blocks[0].id} className="block-content">
              <div className="row ">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                    {blocks[0].Title}
                  </h2>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blocks[0].Description,
                      }}
                    />
                    <ul className={"mt-6"}>
                      {blocks[0].List_item?.map((item: any) => (
                        <li key={item.id}>+ {item.Title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {media && media.length >= 2 && (
            <div key={media[1]?.id} className="block-thumb">
              <Image
                src={`${
                  process.env.NODE_ENV === "development"
                    ? process.env.BACK_URL
                    : process.env.NODE_BACK
                }${media[1]?.img.data.attributes.url}`}
                width={media[1]?.img.data.attributes.width}
                height={media[1]?.img.data.attributes.height}
                alt={media[1]?.alt}
                data-speed="0.5"
              />
            </div>
          )}

          {blocks && (
            <div key={blocks[1].id} className="block-content  pt-140">
              <div className="row ">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                    {blocks[1].Title}
                  </h2>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blocks[1].Description,
                      }}
                    />
                    <ul>
                      {blocks[1].List_item?.map((item: any) => (
                        <li key={item.id}>+ {item.Title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/*<div className="block-gallery">*/}
          {/*  <img*/}
          {/*    src="assets/imgs/portfolio/detail/3.jpg"*/}
          {/*    alt="Portfolio Image"*/}
          {/*  />*/}
          {/*  <img*/}
          {/*    src="assets/imgs/portfolio/detail/4.jpg"*/}
          {/*    alt="Portfolio Image"*/}
          {/*  />*/}
          {/*</div>*/}

          {/*<div className="block-thumb">*/}
          {/*  <img*/}
          {/*    src="assets/imgs/portfolio/detail/5.jpg"*/}
          {/*    alt="Portfolio Image"*/}
          {/*    data-speed="0.5"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export const SectionCases = ({
  title,
  description,
  link,
  Items,
  Uptitle,
}: SectionProps) => {
  const Slide = (props: any) => {
    // console.log(props.Image.data[0]?.attributes.url);
    return (
      <div className="swiper-slide">
        <div className="portfolio__slide-2">
          <div className="slide-img">
            <a href={props.Link[0].url}>
              <Image
                src={
                  props.Image.data[0]
                    ? `${
                        process.env.NODE_ENV === "development"
                          ? process.env.BACK_URL
                          : process.env.NODE_BACK
                      }${props.Image.data[0]?.attributes.url}`
                    : "/assets/imgs/portfolio/2/1.jpg"
                }
                width={640}
                height={814}
                alt={props.Title}
              />
            </a>
          </div>
          <div className="slide-content text-anim">
            <h2 className="sec-title title-anim">
              <a href={props.Link[0].url || "portfolio-details.html"}>
                {props.Title?.split(" ")[0]}{" "}
                <span>{props.Title?.split(" ")[1]}</span>
              </a>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: props.Description }} />

            <div className="btn-common-wrap">
              <a
                href={props.Link[0].url || "portfolio-details.html"}
                className={"btn-common"}
              >
                {props.Link[0].Text}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  let slides: any[] = [];

  return (
    <section className="portfolio__area-2 portfolio-v3">
      <div className="container g-0 line pt-100 pb-140">
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper text-anim">
              <h2 className="sec-title-3 title-anim">
                Selected <span>Projects</span>
              </h2>
              <div
                className="sec-text"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="swiper portfolio__slider-2">
        <div className="swiper-wrapper">
          {Items?.map((item) => <Slide key={item.index} {...item} />)}
        </div>
        <div className="portfolio__slider-2-pagination--">
          <div className="swiper-pagination circle-pagination right"></div>
        </div>
      </div>
    </section>
  );
};
export const SectionTechStack = ({
  title,
  description,
  link,
  Items,
  Uptitle,
}: SectionProps) => {
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
              {Items?.map((item, index) => (
                <div className="brand__item fade_bottom" key={index}>
                  <Image
                    src={`${process.env.NODE_FRONT}${item.Image.data[0].attributes.url}`}
                    width={item.Image.data[0].attributes.width}
                    height={item.Image.data[0].attributes.height}
                    alt="Brand Logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const SectionWhatWeAlsoDo = ({
  title,
  description,
  link,
  Items,
  Uptitle,
}: SectionProps) => {
  return (
    <section className=" service-v5 pt-140 what-we-also-do">
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
            <h2 className="sec-title animation__char_come"> {title}</h2>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
            <div
              className="sec-text"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
        <div className="portfolio__service-list">
          <div className="row">
            <div className="col-xxl-12">
              <div className="service__items-7 animation_service_7">
                {Items?.map((item, index) => (
                  <div className="service__item-7" key={item.id}>
                    <a href={"#"}>
                      <h3 className="service__title-7">
                        {item.Title.split(" ")[0]}{" "}
                        <span>{item.Title.split(" ")[1]}</span>
                      </h3>
                    </a>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.Description }}
                    />
                    <ul>
                      {item.List_item.map(
                        (item: { id: any; Title: string }) => (
                          <li key={item.id}>+ {item.Title}</li>
                        ),
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionSolutionPage = ({
  title,
  description,
  link,
  Items,
  Uptitle,
  price,
  price_period,
}: SectionSolutionPage) => {
  // console.log(Items);
  const Card = ({
    Title,
    List_item,
    Description,
  }: {
    List_item?: [{ Title: string; id: number }];
    Title?: string;
    Description?: any;
  }) => (
    <>
      <h4 className="pb-4">{Title}</h4>
      {Description}
      <ul>
        {List_item &&
          List_item.map((item) => <li key={item.id}>+ {item.Title}</li>)}
      </ul>
    </>
  );

  return (
    <section className="development__area   pt-130 section_solution_page">
      <div className="container g-0">
        <div className="line-3"></div>
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
            <div className="sec-title-wrapper">
              <h3 className="sec-sub-title title-anim">Solution:</h3>
              <h2 className="sec-title animation__char_come ">{title}</h2>
              <div className="btn_wrapper">
                <a href="#" className="wc-btn-primary btn-hover open_offcanvas">
                  <span></span> Get Started
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              {/*<div className="price__amount pt-4 d-inline">*/}
              {/*  <div className={"cursor-btn btn_wrapper"}>*/}
              {/*    <a*/}
              {/*      href={"#"}*/}
              {/*      className={" wc-btn-primary btn-hover"}*/}
              {/*      id={"offcanvas__area-contact_form-toggle"}*/}
              {/*    >*/}
              {/*      Get Started Today*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
            <div className="development__wrapper">
              <div
                className="development__content border-b-0"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              {Items && Items?.length > 0 && (
                <div className={"solution-features mb-12"}>
                  {Items?.filter(
                    (value) =>
                      value.__typename === "ComponentLayoutDefinitionTable",
                  ).map((item) => <FeatureCounter key={item.id} item={item} />)}
                </div>
              )}
              {Items?.filter(
                (value) =>
                  value.__typename !== "ComponentLayoutDefinitionTable",
              ).map((item, index) => (
                <Card
                  key={index}
                  Title={item.Title}
                  Description={item.Description}
                  List_item={item.List_item}
                />
              ))}
            </div>
          </div>
          {/*<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">*/}
          {/*	<div className="development__img">*/}
          {/*		<img src="/assets/imgs/thumb/dev-1.jpg" alt="Development Image" data-speed="auto"/>*/}
          {/*	</div>*/}
          {/*</div>*/}
          {/*<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">*/}
          {/*	<div className="development__img">*/}
          {/*		<img src="/assets/imgs/thumb/dev-2.jpg" alt="Development Image"/>*/}
          {/*	</div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};
export const SectionHowWeWork = ({
  title,
  description,
  link,
  Items,
  Uptitle,
}: SectionProps) => {
  const Card = ({
    num,
    title,
    description,
  }: {
    num: number;
    title: string;
    description: any;
  }) => (
    <div className="swiper-slide workflow__slide fade_left">
      <h4 className="workflow__step">step 0{num}</h4>
      <h5 className="workflow__number">0{num}</h5>
      <h6 className="workflow__title">{title}</h6>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
  return (
    <section className="workflow__area section_how_we_work">
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
                {Items?.map((item, index) => (
                  <Card
                    key={index}
                    num={index + 1}
                    title={item.Title}
                    description={item.Description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export function SectionAboutUsFirstItem(props: {
  title: string;
  description: any | string | ReactElement;
  Items?: any[];
  Uptitle: string;
}) {
  const brTitle = props.title?.split(" ");
  console.log(brTitle);
  return (
    <div className="choose-wrapper wf_panel section_about_us_first_item">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="choose-title-wrapper">
              <h2 className="choose-title">
                {brTitle[0]}

                <br />
                {brTitle[1] + " " + brTitle[2]}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionAboutUsSecondItem(props: {
  title: string;
  description: any | string | ReactElement;
  Items?: any[];
  Uptitle: string;
}) {
  const brUptitle = props.Uptitle?.split(" ");
  // console.log(props);
  return (
    <div className="research__area wf_panel  pt-150 section_about_us_second_item">
      <div className="container inner_content">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="sec-title-wrapper">
              <h2 className="sec-sub-title">
                {brUptitle && brUptitle.shift()}
                <br />
                {brUptitle &&
                  brUptitle.map((item, index) => {
                    if (index % 2 == 0) {
                      return item;
                    } else {
                      return " " + item;
                    }
                  })}
              </h2>
              <h3 className="sec-title">{props.title}</h3>
              {props.description && parseHtml(props.description)}
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="research__list">
              {props.Items &&
                props.Items?.length > 0 &&
                props.Items?.map((item) => {
                  return (
                    <div className="research__item" key={item.index}>
                      <div className="research__number">
                        <span>{item.Uptitle}</span>
                      </div>
                      <div className="research__info">
                        <h4 className="research__title">{item.Title}</h4>
                        {item.Description && parseHtml(item.Description)}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionAboutUsFThirdItem(props: {
  title: string;
  description: any | string | ReactElement;
  Items?: any[];
  Uptitle: string;
}) {
  const brTitle = props.Uptitle?.split(" ");
  return (
    <div className="counter__area-3 wf_panel section_about_us_third_item">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper">
              <h2 className="sec-sub-title">
                {brTitle.shift()}
                <br />
                {brTitle.map((item, index) => {
                  if (index % 2 == 0) {
                    return item;
                  } else {
                    return " " + item;
                  }
                })}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
            <div className="counter__wrapper-3">
              {props.Items?.map((item) => {
                return (
                  <div className="counter__item-3" key={item.index}>
                    <h2 className="counter__number">{item.Term}</h2>
                    {item.Text && parseHtml(item.Text)}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
            <div className="counter__img-3">
              <img src="/assets/imgs/thumb/counter-3.png" alt="Counter Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionAboutUsFourthItem(props: {
  title: string;
  description: any | string | ReactElement;
  Items?: any[];
  Uptitle: string;
}) {
  return (
    <div className="cta__area-3 wf_panel section_about_us_fourth_item">
      <div className="container pt-150 pb-150">
        <div className="row">
          <div className="col-xxl-12">
            <div className="cta__content-3">
              <p className="cta__sub-title-2">{props.Uptitle}</p>
              <h2 className="cta__title-2">{props.title}</h2>
              <div className="btn_wrapper">
                <a
                  href="#"
                  className="btn-item wc-btn-primary btn-hover open_offcanvas"
                >
                  <span></span>Contact <br />
                  with us <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const SectionAboutUs = ({
  title,
  description,
  link,
  Items,
  Uptitle,
  className = "",
  children,
}: SectionProps) => {
  return (
    <section className="workflow__area-3 section_about_us">
      <div className="workflow__wrapper-3">{children}</div>
    </section>
  );
};
export const SectionProblems = ({
  title,
  description,
  link,
  Items,
  Uptitle,
  className = "",
}: SectionProps) => {
  // const [];
  return (
    <section
      className={`career__benefits section_problems ${className} h-full`}
    >
      <div className="container  g-0 pt-100 pb-100">
        <div className="row">
          <div className="col-xxl-7 col-xl-7 col-lg-7 problems__text">
            <div className="slide-content">
              <h2 className="sec-title">{title}</h2>

              <div
                style={{ display: "contents" }}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <ul className="career__benefits-list">
              {Items?.map((item) => <li key={item.id}>{item.Title}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export const SectionPitch = ({
  title,
  description,
  link,
  Items,
  Uptitle,
  ...props
}: SectionProps) => {
  // console.log(props.attributes.Items[0].img.data.attributes.url);
  return (
    <section className="about__area">
      <div className="container line g-0 pt-100 pb-130">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-12">
            <div className="about__title-wrapper">
              <h3 className="sec-title title-anim">{title}</h3>
            </div>

            <div className="about__content-wrapper">
              <div className="about__img">
                <div className="img-anim">
                  <Image
                    width={props.attributes.Items[0].img.data.attributes.width}
                    height={
                      props.attributes.Items[0].img.data.attributes.height
                    }
                    src={
                      process.env.NODE_BACK +
                      props.attributes.Items[0].img.data.attributes.url
                    }
                    alt="About Image"
                    data-speed="0.3"
                  />
                </div>

                <div className="about__img-right">
                  <Image
                    width={props.attributes.Items[1].img.data.attributes.width}
                    height={
                      props.attributes.Items[1].img.data.attributes.height
                    }
                    src={
                      process.env.NODE_BACK +
                      props.attributes.Items[1].img.data.attributes.url
                    }
                    alt="About Image Right"
                    data-speed="0.5"
                  />
                  <div className="shape">
                    <div className="secondary" data-speed="0.9"></div>
                    <div className="primary"></div>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="about__content text-anim"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                {link?.url && (
                  <div className="cursor-btn btn_wrapper">
                    <a
                      className="btn-item wc-btn-primary btn-hover"
                      // @ts-ignore
                      href={link?.url || "/"}
                    >
                      <span></span> Explore Us{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const SectionScreen = ({
  title,
  description,
  link,
  Items,
  Uptitle,
}: SectionProps) => {
  return (
    <section className="service__hero-2 section_screen">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="service__hero-inner-2">
              <div className="service__hero-left-2">
                <img
                  src="/assets/imgs/home-7/sc1.png"
                  alt="Image"
                  className="image-1"
                />
                <img
                  src="/assets/imgs/home-7/sc2.png"
                  alt="Image"
                  className="image-2"
                />
                <img
                  src="/assets/imgs/home-7/sc3.png"
                  alt="Image"
                  className="image-3"
                />
                <img
                  src="/assets/imgs/home-7/sc4.png"
                  alt="Image"
                  className="image-4"
                />
              </div>
              <div className="service__hero-right-2 hero7__thum-anim">
                <h1 className="title creative">
                  {title?.split(" ")[0]}{" "}
                  <span className="solution">{title?.split(" ")[1]}</span>
                </h1>
                <div
                  className="animate_content"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <img
                  src="/assets/imgs/home-7/scroll.png"
                  alt="scroll Image"
                  className="scroll"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/assets/imgs/home-7/shape-6.png"
        alt="Shape Image"
        className="shape-1"
      />
    </section>
  );
};
export const FeatureCounter = ({ item }: any) => {
  return (
    <div className={"counter-feature"} key={item.id}>
      <dl>
        <dt className={"counter__number text-6xl font-medium font-mono"}>
          {item.Term}
        </dt>
        <dd className={"text-md font-thin "}>{item.Text}</dd>
      </dl>
    </div>
  );
};
export const SectionDefault = ({
  title,
  description,
  link,
  Items,
  Uptitle,
  ...props
}: SectionProps) => {
  return (
    <section className="section_default pt-140 pb-130">
      {/*<Script*/}
      {/*  id={"serv"}*/}
      {/*  strategy={"afterInteractive"}*/}
      {/*  dangerouslySetInnerHTML={{ __html: inlineScript }}*/}
      {/*/>*/}

      <div className="container   g-0 ">
        <div className="row">
          <div className="col-xxl-8">
            <div className="sec-title-wrapper  title-anim">
              <h2 className="sec-title title-anim">
                {title?.split(" ")[0]} <br />
                {title?.split(" ")[1]}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xxl-8 my-12"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </section>
  );
};
const Section = ({
  title,
  description,
  link,
  Items,
  Uptitle,
}: SectionProps) => {
  const inlineScript = `

    // 20. Register GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);

    // 21. Config GSAP
    gsap.config({
      nullTargetWarn: false,
    });

    // 22. Service 6
    if (window.innerWidth > 1200) {
      gsap.to(".service__list-6", {
        scrollTrigger: {
          trigger: ".service__area-6",
          pin: ".service__list-6",
          pinSpacing: true,
          start: "top top",
          end: "bottom bottom"
        }
      })

      gsap.to(".service__image-wrap", {
        scrollTrigger: {
          trigger: ".service__area-6",
          pin: ".mid-content",
          pinSpacing: true,
          start: "top top",
          end: "bottom bottom",
          markers: false
        }
      })

      let service_images = gsap.utils.toArray(".service__image")
      let service_imagess = gsap.utils.toArray(".service__image img")
      let service_items = gsap.utils.toArray(".service__item-6")

      if (service_items) {
        service_items.forEach((image, i) => {
          console.log(service_images[i])
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: image,
              scrub: 1,
              start: "top top-=600",
              markers: false,
            }
          });
          tl.to(service_images[i], {
            zIndex: "1",
          })
          tl.to(service_imagess[i], {
            opacity: 0,
            duration: 1,
            scale: 1.2,
            ease: "power4.out"
          }, "-=1")
        })
      }

      let navItems = gsap.utils.toArray(".service__list-6 li a")
      if (navItems) {
        navItems.forEach((nav) => {
          nav.addEventListener("click", (e) => {
            e.preventDefault();
            const ids = nav.getAttribute("href")
            gsap.to(window, { duration: 0.5, scrollTo: ids, ease: "power4.out" });
          })
        })
      }

      // Active Nav
      jQuery(document).on('scroll', function () {
        jQuery('.service__item-6').each(function () {
          if (jQuery(this).position().top <= jQuery(document).scrollTop() && (jQuery(this).position().top + jQuery(this).outerHeight()) > jQuery(document).scrollTop()) {
            var sec_id = jQuery(this).data('secid');

            jQuery('.service__list-6 li:nth-child(' + sec_id + ')').addClass('active').siblings().removeClass('active');
          }
        });
      });
    }

`;
  return (
    <section className="service__area-6 section_default">
      {/*<Script*/}
      {/*  id={"serv"}*/}
      {/*  strategy={"afterInteractive"}*/}
      {/*  dangerouslySetInnerHTML={{ __html: inlineScript }}*/}
      {/*/>*/}
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="content-wrapper">
              <div className="left-content">
                <ul className="service__list-6">
                  {Items?.map((item, index) => (
                    <li key={item.id} className={index == 0 ? "active" : ""}>
                      <a href={`#service_${index + 1}`}>
                        {/*{console.log(item.Title.split(" ").length)}*/}
                        {item.Title.split(" ")[0]} <br />
                        {item.Title.split(" ")[1]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mid-content">
                <div className="service__image">
                  <img
                    src="/assets/imgs/home-7/spec1.png"
                    alt="Service Image"
                  />
                </div>
                <div className="service__image">
                  <img
                    src="/assets/imgs/home-7/spec2.png"
                    alt="Service Image"
                  />
                </div>
                <div className="service__image">
                  <img
                    src="/assets/imgs/home-7/spec3.png"
                    alt="Service Image"
                  />
                </div>
                <div className="service__image">
                  <img
                    src="/assets/imgs/home-7/spec4.png"
                    alt="Service Image"
                  />
                </div>
              </div>

              <div className="right-content">
                <div className="service__items-6">
                  {Items?.map((item, index) => {
                    // console.log(item)
                    return (
                      <div
                        key={item.id}
                        className={`service__item-6 ${
                          index == 0 ? "has__service_animation" : ""
                        }`}
                        id={`service_${index + 1}`}
                        data-secid={index + 1}
                      >
                        <div className="image-tab">
                          <img
                            src={`/assets/imgs/home-7/spec${index + 1}.png`}
                            alt="Service Image"
                          />
                        </div>

                        <div className="animation__service_page">
                          <h2 className="service__title-6">{item.Title}</h2>
                          {parseHtml(item.Description)}
                          <ul>
                            {item.List_item.map(
                              (item: {
                                id: any;
                                Title: string;
                              }): JSX.Element => (
                                <li key={item.id}>+ {item.Title}</li>
                              ),
                            )}
                          </ul>
                          {item.Link.length > 0 && (
                            <div className="btn_wrapper">
                              <a
                                href={item.Link[0].url || "#"}
                                className="wc-btn-secondary btn-item btn-hover"
                              >
                                <span></span>
                                {item.Link[0].Text || "text none"}
                                <i className="fa-solid fa-arrow-right"></i>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function TeamItem(props: { index: number; item: any }) {
  return (
    <a href="#">
      <div className="team__item-7 fade_bottom_3">
        <div className="team__name-wrap-7">
          <p className="tm-serial">0{props.index + 1}</p>

          <h3 className="tm-name">{props.item.FullName}</h3>
        </div>
        <h4 className="tm-role">{props.item.Position}</h4>
        {/*<div className="tm-link">*/}
        {/*  <i className="fa-solid fa-arrow-right"></i>*/}
        {/*</div>*/}
        {/*<div*/}
        {/*  className="team__hover-7"*/}
        {/*  style={{ backgroundImage: "url(/assets/imgs/team/1.jpg)" }}*/}
        {/*></div>*/}
      </div>
    </a>
  );
}

export const SectionTeam = (props: SectionProps) => {
  // console.log(props)
  return (
    <section className="team__area-7 pt-120 pb-130 section_team">
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
              {props.Items &&
                props.Items?.length > 0 &&
                props.Items?.map((item, index) => (
                  <TeamItem key={item.id} index={index} item={item} />
                ))}

              <div className="team7__img-wrap">
                <div className="team7__img"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const SectionSLider = ({ sections }: any | []) => {
  // console.log(sections)
  const cl = [
    "portfolio__hero-area portfolio-section",
    "portfolio-section portfolio__about pt-140 pb-150",
    "portfolio-section portfolio__project",
  ];
  return (
    <div className="portfolio__page section_slider">
      <div className="swiper portfolio__main-slider">
        <div className="swiper-wrapper portfolio__main-wrapper">
          {sections.map((section: {}, index: number) => (
            <div key={index} className="swiper-slide test">
              <SectionProblems {...section} className={cl[index]} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination circle-pagination-2"></div>
      </div>
    </div>
  );
};
export default Section;

export const ContactSection = async () => {
  const {
    data: {
      websiteConfiguration: {
        data: { attributes },
      },
    },
  } = await getData(webSiteConfig);
  // console.log(attributes);
  return (
    <section className="contact__area-6  bg-white h-full z-20 flex items-center">
      <div className="container g-0 pt-120 pb-120 ">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-12">
            <div className="sec-title-wrapper">
              <h2 className="sec-title-2 animation__char_come">
                Let’s get in touch{" "}
              </h2>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-12">
            <div className="contact__text">
              <p>
                If you would like to work with us or just want to get in touch,
                we’d love to hear from you!{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row contact__btm">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
            <div className="contact__info">
              <ul>
                <li>
                  <a href={`tel:${attributes.PhoneNumber}`}>
                    {attributes.PhoneNumber}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${attributes.email}`}>{attributes.email}</a>
                </li>
                <li>{attributes.Address}</li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
