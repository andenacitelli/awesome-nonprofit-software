import { z } from "zod";
import { create } from "zustand";

import { CATEGORIES } from "../data/types";

const FiltersSchema = z.object({
  name: z.string().default(""),
  categories: z
    .array(z.nativeEnum(CATEGORIES))
    .default(Object.values(CATEGORIES)),
});

export type Filters = z.infer<typeof FiltersSchema>;

interface State {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

export const useStore = create<State>((set) => ({
  filters: FiltersSchema.parse({}),
  setFilters: (filters: Filters) => {
    console.debug(`Setting filters to ${JSON.stringify(filters)}`);
    set({ filters });
  },
}));
