import {
  AppShell,
  Box,
  Burger,
  Group,
  Header,
  MediaQuery,
  ModalBase,
  Navbar,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { ReactNode, useState } from "react";
import { IconHeartHandshake, IconMenu, IconMenu2 } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const CustomHeader = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: any;
}) => {
  const theme = useMantineTheme();
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Group>
          <ThemeIcon variant={"light"}>
            <IconHeartHandshake />
          </ThemeIcon>
          <Text weight={600}>Awesome Nonprofit Software</Text>
        </Group>
      </div>
    </Header>
  );
};
const CustomNavbar = ({ opened }: { opened: boolean }) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
    </Navbar>
  );
};

export const CustomShell = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      padding="md"
      navbar={<CustomNavbar opened={opened} />}
      header={<CustomHeader opened={opened} setOpened={setOpened} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
