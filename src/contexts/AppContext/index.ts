import { createContext } from "react";

const defaultContext = {
  backgroundImg: `url("/assets/png/catwall.jpg");`,
  dockStyles: {
    columnGap: 5
  }
};

export const AppContext = createContext(defaultContext)