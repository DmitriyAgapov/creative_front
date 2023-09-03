import parse from 'html-react-parser';
export const parseHtml = (str:string) => parse(str);
export const sortMenu = (ar:any[]) => {

	const newAr:any = [];
	ar.sort((a, b) => a.id - b.id);

	ar.forEach((item) => {
		// console.log(item)
		if(!item.attributes.parent.data) {
			newAr.push(item)
		} else {
			const {id} = item.attributes.parent.data;
			// console.log(id)
			const targetChild = newAr.filter((item:any) => item.id === id)[0].attributes;
			// console.log(targetChild)
			if(!targetChild.childs) targetChild.childs = [];
			newAr.filter((item:any) => item.id === id)[0].attributes.childs.push(item);

		}
	});

	return newAr
}
