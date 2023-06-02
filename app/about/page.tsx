import Section, {
  SectionAboutUs,
  SectionAboutUsFirstItem, SectionAboutUsFourthItem, SectionAboutUsFThirdItem, SectionAboutUsSecondItem,
  SectionHowWeWork,
  SectionPitch,
  SectionProblems,
  SectionScreen,
  SectionSLider, SectionTeam,
  SectionTechStack,
  SectionWhatWeAlsoDo
} from "@/Components/Section";
import { aboutPage, mainPage } from "@/utils/queries";
import { getData } from "@/utils/getData";
import React, { ReactElement } from "react";

//@ts-ignore
const PageAbout = ({ page: { attributes } }: {page: {attributes: any}}):ReactElement<any, any>[] => {
  console.log(attributes.sections.data)
  const allSections:any[] = [];
  const aboutslider:any[] = [];

  attributes.sections.data.forEach((section:any) => {
    let a = section.attributes.Type;
    switch (a) {
      case 'about_us' as string:
        aboutslider.push({ title:section.attributes.Title, Uptitle:section.attributes.Uptitle, description:section.attributes.Description, Items:section.attributes.Items});
        // aboutslider.push(<SectionAboutUs title={section.attributes.Title} description={section.attributes.Description} Uptitle={section.attributes.Uptitle} Items={section.attributes.Items}/>);
        break;
      case 'team' as string:
        allSections.push(<SectionTeam  title={section.attributes.Title} description={section.attributes.Description} Items={section.attributes.Items}/>);
        // aboutslider.push(<SectionAboutUs title={section.attributes.Title} description={section.attributes.Description} Uptitle={section.attributes.Uptitle} Items={section.attributes.Items}/>);
        break;

      default:
          break;
    }
  });
  //@ts-ignore
  const slides =  <SectionAboutUs>{aboutslider.map((slide, index) => index === 0 && <SectionAboutUsFirstItem {...slide} /> || index === 1 && <SectionAboutUsSecondItem {...slide} /> || index === 2 && <SectionAboutUsFThirdItem {...slide} /> || index === 3 && <SectionAboutUsFourthItem {...slide} /> )}</SectionAboutUs>;
  const result = [slides, ...allSections];
  // allSections.push(<SectionSLider sections={problems}/>)
  // @ts-ignore
  return [result]

}
export default async function About() {
	const { data } =  await getData(aboutPage);

  // @ts-ignore
	return <PageAbout page={data.page.data} />



}
export const revalidate = 60;
