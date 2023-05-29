import { MantineProvider } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark", primaryColor: "red" }}
    >
      <Analytics />
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default MyApp;
