import { type NextPage } from "next";
import Head from "next/head";
import { CustomShell } from "@/components/custom-shell";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Awesome Nonprofit Software</title>
        <meta name="description" content="Awesome Nonprofit Software" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <CustomShell>
        <div></div>
      </CustomShell>
    </>
  );
};

export default Home;
