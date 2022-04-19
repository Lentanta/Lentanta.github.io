const createUiState = (set: any, get: any) => ({
  DockStyle: {
    iconsGap: 0,
  },

  setIconsGap: (data: number) => {
    set((prevState: any) => ({
      ...prevState.DockStyle,
      iconsGap: data
    }))
  }
});

export default createUiState;