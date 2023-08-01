
export const getData = async (query: string, variables: {} = {}) => {

	const uri = process.env.NODE_ENV === 'production' ? process.env.NODE_API : process.env.NODE_API_LOCAL;
	// console.log(uri)
	//@ts-ignore
	const res = await fetch(uri, {
		 cache: 'no-store',
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			query: query as string,
			variables: {
				url: variables
			}
		})
	})
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	// if (!res.ok) {
	// 	// This will activate the closest `error.js` Error Boundary
	// 	throw new Error('Failed to fetch data');
	// }
	const data = await res.json();
	// console.log(data)
	return data
}
export default getData
