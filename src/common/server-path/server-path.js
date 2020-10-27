export const app = {
  base: 'https://117.16.136.171',
  api: '/polls/',
  signIn: 'signIn/',
  signUp: 'signUp/',
  findAccount: 'findAccount/',
  modifyAccount: 'modifyAccount/',
  requestBKD: 'requestBKD/',
  createBKD: 'createBKD/',
  editBKD: 'editBKD/',
  deleteBKD: 'deleteBKD/',
  createChannel: 'createChannel/',
  editChannel: 'editChannel/',
  deleteChannel: 'deleteChannel/',
  enterChannel: 'enterChannel/',
  requestChannel: 'requestChannel/',
  createUnit: 'createUnit/',
  editUnit: 'editUnit/',
  deleteUnit: 'deleteUnit/',
  generateQuestion: 'generateQuestion/',

  account: {
    signIn: () => app.base + app.api + app.signIn,
    signUp: () => app.base + app.api + app.signUp,
    findAccount: () => app.base + app.api + app.findAccount,
    modifyAccount: () => app.base + app.api + app.modifyAccount,
  },

  documents: {
    requestBKD: () => app.base + app.api + app.requestBKD,
    createBKD: () => app.base + app.api + app.createBKD,
    editBKD: () => app.base + app.api + app.editBKD,
    deleteBKD: () => app.base + app.api + app.deleteBKD,
  },
  channel: {
    createChannel: () => app.base + app.api + app.createChannel,
    editChannel: () => app.base + app.api + app.editChannel,
    deleteChannel: () => app.base + app.api + app.deleteChannel,
    enterChannel: () => app.base + app.api + app.enterChannel,
    requestChannel: () => app.base + app.api + app.requestChannel,
  },
  unit: {
    createUnit: () => app.base + app.api + app.createUnit,
    editUnit: () => app.base + app.api + app.editUnit,
    deleteUnit: () => app.base + app.api + app.deleteUnit,
  },
  quiz: {
    generateQuestion: () => app.base + app.api + app.generateQuestion,
  },
};

export const gqqa = {
  base: 'https://117.16.136.170',
  api: '/restful/',
  qg: 'qg/',
  qa: 'qa/',
  generateQuestion: () => gqqa.base + gqqa.api + gqqa.qg,
  answerQuestion: () => gqqa.base + gqqa.api + gqqa.qa,
};
