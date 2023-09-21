"use client";
import Link from "next/link";
import getData from "@/utils/getData";
import { mainMenuList, webSiteConfig } from "@/utils/queries";
import Image from "next/image";
import menuBlack from "@/assets/imgs/icon/menu-black.png";
import { useEffect, useMemo, useState } from "react";

function MenuItem({ item }: any) {
  const SubItems = ({
    items,
  }: {
    items: { id: string; url: string; title: string }[];
  }) => {
    // console.log(items)
    return (
      <>
        {items.map((subItem: any) => (
          <li key={subItem.id}>
            <a href={subItem.attributes.url}>{subItem.attributes.title}</a>
          </li>
        ))}
      </>
    );
  };
  return (
    <li>
      <a href={item.url}>{item.title}</a>
      {item.childs ? (
        <ul className="main-dropdown">
          <SubItems items={item.childs} />
        </ul>
      ) : null}
    </li>
  );
}

// const HorizontalHeader = () => {
// 	const [data, setData] = useState([]);
// 	// const memoizedMenu = useMemo(async () => {
// 	// 	const { data: { menusMenuItems: { data } } } =  ;
// 	// 	const { data: { websiteConfiguration: { data: { attributes } } } } = await getData(webSiteConfig);
// 	//
// 	// 	return {data, attributes};
// 	// },[data])
// 	useEffect(() => {
// 		const ar = [];
// 		getData(mainMenuList)
// 			.then(r => ar.push(r))
// 		getData(webSiteConfig)
// 			.then(r => ar.push(r))
// 		setData(ar);
// 		console.log(data);
// 	}, [])
//
// 	console.log(data)
// 	const sortMenu = (ar:any[]) => {
//
// 		const newAr:any = [];
// 		ar.sort((a, b) => a.id - b.id);
//
// 		ar.forEach((item) => {
// 			if(!item.attributes.parent.data) {
// 				newAr.push(item)
// 			}
// 		});
//
// 		ar.forEach((item) => {
// 			if(item.attributes.parent.data !== null) {
// 				const {id} = item.attributes.parent.data;
// 				const targetChild = newAr.filter((item:any) => item.id === id)[0].attributes;
// 				if(!targetChild.childs) targetChild.childs = [];
// 				newAr.filter((item:any) => item.id === id)[0].attributes.childs.push(item);
//
// 			}
// 		});
//
// 		return newAr
// 	}
// 	// const sortedMenu = sortMenu(data);
//
// 	return (
// 		<>
// 			<header className="header__area-3">
// 				<div className="header__inner-3">
// 					<div className="header__logo-2">
// 						{/*<Link href={"/"}*/}
// 						{/*	className="logo-dark"><Image src={"assets/imgs/logo/logo-black.png"}*/}
// 						{/*	alt="Site Logo"/></Link>*/}
// 						{/*<Link href={"/"}*/}
// 						{/*	className="logo-dark"><Image width={attributes.logo.data.attributes.width / 2}*/}
// 						{/*	height={attributes.logo.data.attributes.height / 2}*/}
// 						{/*	src={`${process.env.NODE_ENV === 'development' ? process.env.BACK_URL : process.env.NODE_API}${attributes.logo.data.attributes.url}`}*/}
// 						{/*	alt="Site Logo"/></Link>*/}
// 						{/*<Link href={"/"}*/}
// 						{/*	className="logo-light"><Image width={attributes.logo.data.attributes.width}*/}
// 						{/*	height={attributes.logo.data.attributes.height}*/}
// 						{/*	src={`${process.env.NODE_ENV === 'development' ? process.env.BACK_URL : process.env.NODE_API}${attributes.logo.data.attributes.url}`}*/}
// 						{/*	alt="Site Logo"/></Link>*/}
// 					</div>
// 					<div className="header__nav-2">
// 						<ul className="main-menu-3 menu-anim">
// 							{/*{sortedMenu.map((item:any) => <MenuItem key={item.id} item={item.attributes} />)}*/}
//
// 						</ul>
// 					</div>
// 					<div className="header__nav-icon-3">
// 						<button className="search-icon"
// 							id="search_icon"><i className="fa-solid fa-magnifying-glass"></i></button>
// 						<button className="search-icon"
// 							id="search_close"><i className="fa-solid fa-xmark"></i></button>
// 						<button id="open_offcanvas"><Image src={menuBlack}
// 							alt="Menubar Icon"/></button>
// 					</div>
// 				</div>
// 			</header>
// 			<div className="header__search">
// 				<form action="#">
// 					<input type="text"
// 						name="s"
// 						id="s"
// 						placeholder="Search.."/>
// 				</form>
// 			</div>
// 		</>
// 	);
//
//
// }
// export default HorizontalHeader
