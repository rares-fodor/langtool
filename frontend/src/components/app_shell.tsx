import { useState } from 'react';
import SearchPage from '@/components/search_page.tsx'
import {
  AppShell,
  Header,
  Container,
  Group,
  Button,
  Title,
  useMantineTheme,
  createStyles,
  rem,
} from '@mantine/core';


const useStyles = createStyles((theme) => ({
	header_container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	nav_buttons: {
		width: rem(260),
	}
}));


export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes, cx } = useStyles();

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <Container className={classes.header_container}>
            <Title
              c="gray.7"
              fw={800}
              size="h2"
            >
              Langtool
            </Title>
            <Group spacing={4}>
              <Button sx={{ visibility: "hidden"}} variant="default" color="gray.8">
                Saved
              </Button>
              <Button variant="default" color="gray.8">
                Login
              </Button>
            </Group>
          </Container>
        </Header>
      }
    >
      <SearchPage/>
    </AppShell>
  );
}
