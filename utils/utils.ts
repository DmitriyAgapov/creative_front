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
export const SendFetch =  ({name, phone, email, message}:{name:string, phone:string, message:string, email:string}) => {
	const response =  fetch("/api", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
			// 'Authorization': `Bearer ${process.env.EMAIL_ENV}`
		},
		body: JSON.stringify({
			email: email,
			fields: {
				name: name,
				last_name: name.split(' ' )[1],
				phone: phone,
				message: message,

			},

		})
	})
	const url = encodeURI(`/api?firstName=${name}&phone=${phone}&email=${email}&message=${message}`);
	// const data = new URLSearchParams();
	// data.append('name', values.name);
	// data.append('email', values.email);
	console.log(url)
	// data.append('phone', values.phone);
	fetch(url);

	// .then(response => console.log(response.json()))
	// .then(status => console.log(status))
	// .then(data => console.log(data))
	// .catch(error => console.error(error));
	// @ts-ignore
	if(response.ok) {
		return true
	}
	return false
}
