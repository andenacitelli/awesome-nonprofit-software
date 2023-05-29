import {
  AppShell,
  Burger,
  Group,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconHeartHandshake } from "@tabler/icons-react";
import { ReactNode, useState } from "react";

const CustomHeader = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: any;
}) => {
  const theme = useMantineTheme();
  return (
    <Header height={50} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o: any) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Group spacing={"xs"}>
          <IconHeartHandshake />
          <Text weight={600}>Awesome Nonprofit Software</Text>
        </Group>
      </div>
    </Header>
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
      padding={0}
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
