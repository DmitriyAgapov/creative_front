import Section, {
  SectionAboutUs,
  SectionAboutUsFirstItem,
  SectionAboutUsFourthItem,
  SectionAboutUsFThirdItem,
  SectionAboutUsSecondItem,
  SectionCase,
  SectionCases,
  SectionCta,
  SectionHowWeWork,
  SectionPitch,
  SectionProblems,
  SectionScreen,
  SectionSLider,
  SectionSolutionPage,
  SectionTeam,
  SectionTechStack,
  SectionWhatWeAlsoDo,
} from "@/Components/Section";
import { pagesQuery, pagesUrl } from "@/utils/queries";
import getData from "@/utils/getData";
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { Preloader } from "@/Components/Header";

//@ts-ignore
const Page = ({
  page: { attributes },
}: {
  page: { attributes: any };
}): JSX.Element => {
  const allSections: any[] = [];
  const problemsWrapper: any[] = [];
  const Problems = () => (
    <section className={"problems__area-2"}>
      <div className={"swiper problems__slider-2 "}>
        <div className="swiper-wrapper">{problemsWrapper}</div>
        <div className="problems__slider-2-pagination--">
          <div className="swiper-pagination circle-pagination right"></div>
        </div>
      </div>
    </section>
  );
  const team: any[] = [];
  const aboutslider: any = [];
  attributes.sections.data.forEach((section: any) => {
    let a = section.attributes.Type;
    switch (a) {
      case "screen" as string:
        allSections.push(
          <SectionScreen
            title={section.attributes.Title}
            description={section.attributes.Description}
          />,
        );
        break;
      case "pitch" as string:
        allSections.push(
          <SectionPitch
            title={section.attributes.Title}
            description={section.attributes.Description}
            link={section.attributes.Link}
          />,
        );
        break;
      case "problem" as string:
        // allSections.push(<SectionProblems title={section.attributes.Title} description={section.attributes.Description} Items={section.attributes.Items}/>);
        problemsWrapper.push(
          <div className={"swiper-slide"}>
            {" "}
            <SectionProblems
              className={"problems__slide-2"}
              title={section.attributes.Title}
              description={section.attributes.Description}
              Items={section.attributes.Items}
            />
          </div>,
        );
        break;
      case "how_we_work" as string:
        allSections.push(
          <SectionHowWeWork
            title={section.attributes.Title}
            description={section.attributes.Description}
            Uptitle={section.attributes.Uptitle}
            Items={section.attributes.Items}
          />,
        );
        break;
      case "what_we_also_do" as string:
        allSections.push(
          <SectionWhatWeAlsoDo
            title={section.attributes.Title}
            description={section.attributes.Description}
            Uptitle={section.attributes.Uptitle}
            Items={section.attributes.Items}
          />,
        );
        break;
      case "technology_stack" as string:
        allSections.push(
          <SectionTechStack
            title={section.attributes.Title}
            description={section.attributes.Description}
            Uptitle={section.attributes.Uptitle}
            Items={section.attributes.Items}
          />,
        );
        break;
      case "solution_page" as string:
        allSections.push(
          <SectionSolutionPage
            title={section.attributes.Title}
            description={section.attributes.Description}
            link={section.attributes.Link}
            Items={section.attributes.Items}
            Uptitle={section.attributes.Uptitle}
            price={section.attributes.price}
            price_period={section.attributes.price_period}
          />,
        );
        break;
      case "solutions" as string:
        allSections.push(<Section Items={section.attributes.Items} />);
        break;
      case "about_us" as string:
        aboutslider.push({
          title: section.attributes.Title,
          Uptitle: section.attributes.Uptitle,
          description: section.attributes.Description,
          Items: section.attributes.Items,
        });
        // aboutslider.push(<SectionAboutUs title={section.attributes.Title} description={section.attributes.Description} Uptitle={section.attributes.Uptitle} Items={section.attributes.Items}/>);
        break;
      case "team" as string:
        team.push(
          <SectionTeam
            title={section.attributes.Title}
            description={section.attributes.Description}
            Items={section.attributes.Items}
          />,
        );
        // aboutslider.push(<SectionAboutUs title={section.attributes.Title} description={section.attributes.Description} Uptitle={section.attributes.Uptitle} Items={section.attributes.Items}/>);
        break;

      case "cases" as string:
        allSections.push(
          <SectionCases
            title={section.attributes.Title}
            description={section.attributes.Description}
            Items={section.attributes.Items}
          />,
        );
        break;

      case "case_page" as string:
        allSections.push(
          <SectionCase
            title={section.attributes.Title}
            description={section.attributes.Description}
            Items={section.attributes.Items}
          />,
        );
        break;

      case "cta" as string:
        allSections.push(
          <SectionCta
            title={section.attributes.Title}
            description={section.attributes.Description}
            Items={section.attributes.Items}
            link={section.attributes.Link}
            Uptitle={section.attributes.Uptitle}
          />,
        );
        break;

      default:
        break;
    }
  });
  if (problemsWrapper.length > 0) allSections.splice(2, 0, <Problems />);
  //@ts-ignore

  const slides =
    aboutslider.length > 0 ? (
      <SectionAboutUs>
        {
          // @ts-ignore
          aboutslider.map(
            (slide: any, index: number) =>
              (index === 0 && <SectionAboutUsFirstItem {...slide} />) ||
              (index === 1 && <SectionAboutUsSecondItem {...slide} />) ||
              (index === 2 && <SectionAboutUsFThirdItem {...slide} />) ||
              (index === 3 && <SectionAboutUsFourthItem {...slide} />),
          )
        }
      </SectionAboutUs>
    ) : null;
  const result = [...allSections, slides];

  return (
    <>
      {allSections} {slides} {team}
    </>
  );
};
// @ts-ignore
export default async function Pages({ params: { url } }) {
  const {
    data: { pages },
  } = await getData(pagesQuery, url);

  // @ts-ignore
  if (pages.data.length === 0) {
    notFound();
  }
  return (
    <Suspense fallback={<Preloader />}>
      <Preloader />
      <Page page={pages.data[0]} />
    </Suspense>
  );
}
export const dynamic = "auto";
// @ts-ignore
export async function generateStaticParams() {
  const {
    data: { pages },
  } = await getData(pagesUrl);
  // console.log(pages)
  return pages.data.map((page: any) => ({
    url: page.attributes.url,
  }));
}
