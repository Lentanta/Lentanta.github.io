import create from "zustand";

import createInformationState from "./createInformationState";

export const useStore = create((set, get) => ({
  ...createInformationState(set, get),
}))