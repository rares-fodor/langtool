import { GetServerSidePropsContext } from "next";
import MainAppShell from "../components/app_shell"
import SearchPage from "../components/search_page"
import SentenceResult from "../components/sentence_result"
import { useEffect, useState } from "react";
import { ScrollArea, Text } from "@mantine/core";

interface SentenceData {
	id: number,
	sentence: string,
	source: string,
}

interface DataPropType {
	sentences: SentenceData[],
	needle: string,
}

function mapSentences(sentences: SentenceData[], needle: string) {
	return sentences.map((s) => (
		<SentenceResult
			key={s.id}
			value={s.sentence}
			needle={needle}
			source={s.source}
		/>
	))
}

export default function ListSentenceResults(data: DataPropType) {
	const [sentences, setSentences] = useState<React.ReactNode[]>([]);
	const [resultsFound, setResultsFound] = useState<boolean>(false);

	useEffect(() => {
		console.log(data);
		if (data.props.sentences.length > 0) {
			setResultsFound(true);
			setSentences(mapSentences(data.props.sentences, data.props.needle));
		} else {
			setResultsFound(false);
		}

	}, [data]);

	return (
		<MainAppShell>
			<SearchPage>
				<ScrollArea.Autosize mah={600} scrollbarSize={2}>
					{ resultsFound ? sentences : <Text>No results found...</Text> }
				</ScrollArea.Autosize>
			</SearchPage>
		</MainAppShell>
	)
}

// Server side rendering allows use of docker hostnames in react app
export async function getServerSideProps(context: GetServerSidePropsContext) {
	const url = `http://backend:5000/api/search?q=${context.query.q}`;
	
	try {
		const response = await fetch(url);
		const sentences: SentenceData[] = await response.json();

		const searchTerm = new URLSearchParams(url.split("?")[1]).get("q");
		const needle: string = searchTerm !== null ? searchTerm : "";

		const props: DataPropType = {
			sentences,
			needle,
		}	

		return { props: { props } };
	} catch (error) {
		console.log(error);
		return { props: { data: null }};
	}
	
}

