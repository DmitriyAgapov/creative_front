import Section, { SectionHowWeWork, SectionPitch, SectionProblems, SectionScreen, SectionSLider, SectionSolutionPage, SectionTechStack, SectionWhatWeAlsoDo } from "@/Components/Section";
import { mainPage } from "@/utils/queries";
import getData from "@/utils/getData";
import React, { ReactElement } from "react";

//@ts-ignore
const Page = ({ page: { attributes } }: {page: {attributes: any}}):ReactElement<any, any>[] => {
  // console.log(page.attributes.sections.data)
  const allSections:any[] = [];
  const problems:any[] = [];

  attributes.sections.data.forEach((section:any) => {
    let a = section.attributes.Type;
    switch (a) {
      case 'screen' as string:
        allSections.push(<SectionScreen title={section.attributes.Title} description={section.attributes.Description}/>);
        break;
      case 'pitch' as string:
        allSections.push(<SectionPitch title={section.attributes.Title} description={section.attributes.Description}/>);
        break;
      case 'problem' as string:
        allSections.push(<SectionProblems title={section.attributes.Title} description={section.attributes.Description} Items={section.attributes.Items}/>);
        // problems.push({ title:section.attributes.Title, description:section.attributes.Description, Items:section.attributes.Items});
        break;
      case 'how_we_work' as string:
        allSections.push(<SectionHowWeWork title={section.attributes.Title} description={section.attributes.Description} Uptitle={section.attributes.Uptitle} Items={section.attributes.Items}/>);
        break;
      case 'what_we_also_do' as string:
        allSections.push(<SectionWhatWeAlsoDo title={section.attributes.Title} description={section.attributes.Description} Uptitle={section.attributes.Uptitle} Items={section.attributes.Items}/>);
        break;
      case 'technology_stack' as string:
        allSections.push(<SectionTechStack title={section.attributes.Title} description={section.attributes.Description} Uptitle={section.attributes.Uptitle} Items={section.attributes.Items}/>);
        break;

      case 'solutions' as string:
        allSections.push(<Section Items={section.attributes.Items}/>);
        break;


      default:
          break;
    }
  });

  // allSections.push(<SectionSLider sections={problems}/>)
  // @ts-ignore
  return [allSections]

}
export default async function Home() {
	const { data } =  await getData(mainPage);
	// console.log(data)
  // @ts-ignore
	return <Page page={data.page.data} />



}
export const revalidate = 60;
