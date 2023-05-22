import { Text, Button, Container, Flex, TextInput, createStyles, Box, ActionIcon, Paper, Space, ScrollArea } from "@mantine/core"
import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import { IconSearch } from '@tabler/icons-react';
import { send_query } from '../api/requests'
import { SentenceResult } from './sentence_result'


interface Sentence {
	id: number,
	sentence: string;
	source: string;
}

function mapSentences(sentences: Sentence[], needle: string) {
	return sentences.map((s) => (
		<SentenceResult
			key={s.id}
			value={s.sentence}
			needle={needle}
			source={s.source}
		/>
	))
}

export default function SearchPage() {
	const searchBoxPrompt = "Find sentences...";
	const [inputValue, setInputValue] = useState<string>('');
	const [sentences, setSentences] = useState<React.ReactNode[]>([]);
	const [resultsFound, setResultsFound] = useState<boolean>(false);
	
	let response: Sentence[];

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

	async function handleSubmit() {
		response = await send_query(inputValue);

		if (response.length > 0) {
			setResultsFound(true);
			setSentences(mapSentences(response, inputValue));
		} else {
			setResultsFound(false);
		}
	}

	function handleMouseClick(event: MouseEvent<HTMLButtonElement>) {
		if (event.button === 0) {
			handleSubmit();
		}
	}

	function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			handleSubmit();
		}
	}

	return (
		<Container size="sm">
			<Text align="left" fz="xs" c="gray.6">
				{searchBoxPrompt}
			</Text>
			<TextInput
				size="md"
				placeholder="Write your segment here"
				value={inputValue}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
				rightSectionWidth={42}
				rightSection={
					<ActionIcon onClick={handleMouseClick}>
						<IconSearch size="1.125rem"/>
					</ActionIcon>
				}
			/>
			<Space h="sm"/>
			<ScrollArea.Autosize mah={600} scrollbarSize={2}>
				{ resultsFound ? sentences : <Text>No results found...</Text> }
			</ScrollArea.Autosize>
		</Container>
	)
}
