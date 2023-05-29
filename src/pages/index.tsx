import { Grid, Stack } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";
import { useMemo } from "react";

import { CustomShell } from "@/components/custom-shell";
import { ProductEmbedded } from "@/components/product-embedded";
import { SearchForm } from "@/components/search-form";
import { useStore } from "@/store";

import { PRODUCTS } from "../../data/products";
import { CATEGORIES } from "../../data/types";

const Home: NextPage = () => {
  const { filters } = useStore();
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (!product.name.toLowerCase().includes(filters.name.toLowerCase())) {
        return false;
      }

      if (
        !filters.categories.some((category) =>
          product.categories.includes(category)
        )
      ) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      return (
        Object.values(CATEGORIES).indexOf(a.categories[0]) -
        Object.values(CATEGORIES).indexOf(b.categories[0])
      );
    });
  }, [filters]);

  return (
    <>
      <Head>
        <title>Awesome Nonprofit Software</title>
        <meta name="description" content="Awesome Nonprofit Software" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <CustomShell>
        <Grid sx={{ position: "relative" }} p={0} m={0}>
          <Grid.Col
            span={3}
            p={"sm"}
            h={"calc(100vh - 50px)"}
            sx={{ borderRight: "1px #343434 solid" }}
          >
            <SearchForm />
          </Grid.Col>
          <Grid.Col
            span={9}
            p={"sm"}
            sx={{
              overflowY: "scroll",
            }}
            h={"calc(100vh - 50px)"}
          >
            <Stack spacing={"xs"}>
              {filteredProducts.map((product) => (
                <ProductEmbedded key={product.name} product={product} />
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </CustomShell>
    </>
  );
};

export default Home;
