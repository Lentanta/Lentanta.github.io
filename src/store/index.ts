import create from "zustand";

import createUiState from "./createUiState";
import createGlobalState from "./createGlobalState";
import createInformationState from "./createInformationState";

export const useStore = create((set, get) => ({
  ...createUiState(set, get),
  ...createGlobalState(set, get),
  ...createInformationState(set, get),
}));