import create from "zustand";
import { immer } from "zustand/middleware/immer"

import createUiState from "./createUiState";
import createGlobalState from "./createGlobalState";
import createInformationState from "./createInformationState";


export const useStore = create(immer((set, get) => ({
  ...createUiState(set, get),
  ...createGlobalState(set, get),
  ...createInformationState(set, get),
})));