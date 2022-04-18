import create from "zustand";

import createGlobalState from "./createGlobalState";
import createInformationState from "./createInformationState";

export const useStore = create((set, get) => ({
  ...createGlobalState(set, get),
  ...createInformationState(set, get),
}));