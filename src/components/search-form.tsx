import { Button, Checkbox, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { z } from "zod";

import { useStore } from "@/store";

import { CATEGORIES } from "../../data/types";

export const SearchForm = () => {
  const { filters, setFilters } = useStore();

  const form = useForm({
    initialValues: filters,
  });

  useEffect(() => {
    setFilters(form.values);
  }, [form.values]);

  return (
    <Stack styles={{ borderRight: "1px gray solid" }}>
      <TextInput
        {...form.getInputProps("search")}
        placeholder={"Search"}
        label={"Search by Name"}
      />

      <Stack>
        <Checkbox.Group
          value={filters.categories}
          label={"Filter by Category"}
          onChange={(categories) =>
            form.setValues({
              ...form.values,
              categories: z.array(z.nativeEnum(CATEGORIES)).parse(categories),
            })
          }
        >
          <Stack mt={"5px"} spacing={"xs"}>
            {Object.values(CATEGORIES)
              .sort()
              .map((category) => {
                return (
                  <Checkbox
                    key={category}
                    {...form.getInputProps("categories")}
                    value={category}
                    label={category}
                  />
                );
              })}
          </Stack>
        </Checkbox.Group>
        <Button
          size={"xs"}
          variant={"outline"}
          onClick={() => {
            if (
              form.values.categories.length === Object.values(CATEGORIES).length
            ) {
              form.setValues({
                ...form.values,
                categories: [],
              });
            } else {
              form.setValues({
                ...form.values,
                categories: Object.values(CATEGORIES),
              });
            }
          }}
        >
          Toggle All
        </Button>
      </Stack>
    </Stack>
  );
};
