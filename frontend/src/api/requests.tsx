export async function send_query(query: string) {
	const params = new URLSearchParams({ q: query });

	const url = `http://localhost:8080/api/search?${params}`;
	console.log(url);

	return await fetch(url)
		.then(response => response.json())
		.then(data => { return data; })
		.catch(error => console.error(error))
}

