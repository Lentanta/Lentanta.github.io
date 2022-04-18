import { tabs } from "@constants";

const createGlobalState = (set: any, get: any) => ({
  selectedTab: tabs.INFORMATION,

  setSelectedTab: (tabName: string) => {
    set(() => ({ selectedTab: tabName }))
  }
});

export default createGlobalState;