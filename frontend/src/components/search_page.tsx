import { Text, Button, Container, Flex, TextInput, createStyles, Box, ActionIcon } from "@mantine/core";
import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import { IconSearch } from '@tabler/icons-react';
import { send_query } from '../api/requests'



export default function SearchPage() {
	const searchBoxPrompt = "Find sentences...";
	const [inputValue, setInputValue] = useState<string>('');


  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

	function handleSubmit() {
		console.log(`Input value: $(inputValue)`)
		send_query(inputValue);
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
			<Text align="left" fz="xs">
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
		</Container>
	)
}
