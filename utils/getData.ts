
// @ts-expect-error Async Server Component
export const getData = async (query: string) => {
	//@ts-ignore
	const res = await fetch(process.env.NODE_API, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			query: query as string
		})
	})
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
	return res.json();
}
