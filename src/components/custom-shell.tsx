import {
  Anchor,
  AppShell,
  Burger,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { IconHeartHandshake, IconSearch } from "@tabler/icons-react";
import { ReactNode, useState } from "react";

interface MainLinkProps {
  icon: ReactNode;
  label: string;
  link: string;
}

const NavbarLink = ({ icon, label, link }: MainLinkProps) => {
  return (
    <Anchor
      href={link}
      color="gray"
      size="lg"
      style={{ textDecoration: "none" }}
    >
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon variant="light">{icon}</ThemeIcon>
          <Text>{label}</Text>
        </Group>
      </UnstyledButton>
    </Anchor>
  );
};

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
const CustomNavbar = ({ opened }: { opened: boolean }) => {
  return (
    <Navbar p="xs" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200 }}>
      <NavbarLink icon={<IconSearch />} link={"/"} label={"Search"} />
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
