import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark", primaryColor: "red" }}
    >
      <Notifications />
      <Analytics />
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default MyApp;
