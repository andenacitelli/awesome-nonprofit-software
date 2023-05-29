import { type AppType } from "next/dist/shared/lib/utils";
import {MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";
import { Analytics } from "@vercel/analytics/react";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <MantineProvider withGlobalStyles withNormalizeCSS>
    <Notifications />
    <Analytics />
    <Component {...pageProps} />
  </MantineProvider>
};

export default MyApp;
