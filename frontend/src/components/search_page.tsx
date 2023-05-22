import { Text, Container, TextInput, ActionIcon, Space } from "@mantine/core"
import { ChangeEvent, KeyboardEvent, MouseEvent, ReactNode, useState } from "react";
import { IconSearch } from '@tabler/icons-react';
import SentenceResult from './sentence_result'
import { useRouter } from "next/router";

interface SearchProps {
	children: ReactNode,
}

interface Sentence {
	id: number,
	sentence: string;
	source: string;
}


export default function SearchPage( props: SearchProps ) {
	const searchBoxPrompt = "Find sentences...";
	const [inputValue, setInputValue] = useState<string>('');
	const router = useRouter()

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

	function handleSubmit() {
		router.push({
			pathname: "/search",
			query: { q: inputValue }
		})
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
			{props.children}
		</Container>
	)
}


