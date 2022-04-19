const createUiState= (set: any, get: any) => ({
  dockStyle: {
    iconsGap: 10,
  },

  setIconsGap: (spaceNum: number) => {
    set((state: any) => {
      state.dockStyle.iconsGap = spaceNum;
    })
  }
});

export default createUiState;