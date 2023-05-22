import { Highlight, Paper, Space, Text } from "@mantine/core";

interface SentenceProps {
	value: string,
	source: string,
	needle: string,
}

export default function SentenceResult (props: SentenceProps) {
	return (
		<>
			<Paper shadow="sm" p="lg">
				<Text fw={400} fz="lg">
					<Highlight highlight={props.needle} highlightColor="teal">
						{props.value}
					</Highlight>
				</Text>
				<Text fz="sm" c="gray.6">
					Source: {props.source}
				</Text>
			</Paper>
			<Space h="sm"/>
		</>
	)	
}
