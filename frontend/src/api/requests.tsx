export async function send_query(query: string) {
	const params = new URLSearchParams({ q: query });

	// Horrible, change ASAP
	const url = `http://vm-debian11:8080/api/search?${params}`;
	console.log(url);

	return fetch(url)
		.then(response => response.json())
		.catch(error => console.error(error))
}

