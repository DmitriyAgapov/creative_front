import {
    SectionProblems, SectionSolutionPage,
} from "@/Components/Section";
import {solutionPage } from "@/utils/queries";
import { getData } from "@/utils/getData";
import React, { ReactElement } from "react";

//@ts-ignore
const Page = ({ page: { attributes } }: {page: {attributes: any}}):any[][] => {
  console.log(attributes.sections.data)
  const allSections:any[] = [];


  attributes.sections.data.forEach((section:any) => {
    let a = section.attributes.Type;
    switch (a) {
      case 'problem' as string:
        allSections.push(<SectionProblems title={section.attributes.Title} description={section.attributes.Description} Items={section.attributes.Items}/>);
        // problems.push({ title:section.attributes.Title, description:section.attributes.Description, Items:section.attributes.Items});
        break;
    case 'solution_page' as string:
        allSections.push(<SectionSolutionPage  title={section.attributes.Title} description={section.attributes.Description} link={section.attributes.Link} Items={section.attributes.Items} Uptitle={section.attributes.Uptitle} price={section.attributes.price} price_period={section.attributes.price_period} />);
        break;

      default:
          break;
    }
  });
  return [allSections]

}
export default async function Solution({ params }: { params: { slug: string } }) {

	const { data } =  await getData(solutionPage, {
      id: params.slug
    });

  // @ts-ignore
	return <Page page={data.page.data} />



}
export const revalidate = 60;
