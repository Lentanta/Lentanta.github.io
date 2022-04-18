const createInformationState = (set: any, get: any) => ({
  githubInfo: {},

  setGithubInfo: (data: any) => {
    set(() => ({ githubInfo: data }))
  }
});

export default createInformationState;