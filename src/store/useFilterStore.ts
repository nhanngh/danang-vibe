import { create } from "zustand";

type Category = "all" | "bridge" | "beach" | "mountain" | "museum" | "other";

interface FilterState {
  category: Category;
  searchQuery: string;
  setCategory: (category: Category) => void;
  setSearchQuery: (query: string) => void;
  reset: () => void;
}

const initialState = {
  category: "all" as Category,
  searchQuery: "",
};

export const useFilterStore = create<FilterState>((set) => ({
  ...initialState,
  setCategory: (category) => set({ category }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  reset: () => set(initialState),
}));
