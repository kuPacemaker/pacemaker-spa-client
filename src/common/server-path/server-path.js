export const app = {
  base: 'https://117.16.136.171',
  api: '/polls/',
  signIn: 'signIn/',
  signUp: 'signUp/',
  findAccount: 'findAccount/',
  modifyAccount: 'modifyAccount/',
  requestBoard: 'requestBoard/',
  requestBKD: 'requestBKD/',
  createBKD: 'createBKD/',
  editBKD: 'editBKD/',
  deleteBKD: 'deleteBKD/',
  createChannel: 'createChannel/',
  editChannel: 'editChannel/',
  deleteChannel: 'deleteChannel/',
  enterChannel: 'enterChannel/',
  exitChannel: 'exitChannel/',
  requestChannel: 'requestChannel/',
  createUnit: 'createUnit/',
  editUnit: 'editUnit/',
  deleteUnit: 'deleteUnit/',
  requestUnit: 'requestUnit/',
  generateQuestion: 'generateQuestion/',
  verifyQuestion: 'verifyQuestion/',
  makeReservation: 'makeReservation/',
  requestPaper: 'requestPaper/',
  submitPaper: 'submitPaper/',
  refresh: 'refresh/',

  account: {
    signin: () => app.base + app.api + app.signIn,
    signup: () => app.base + app.api + app.signUp,
    find: () => app.base + app.api + app.findAccount,
    modify: () => app.base + app.api + app.modifyAccount,
  },
  board: {
    request: () => app.base + app.api + app.requestBoard,
  },
  documents: {
    request: () => app.base + app.api + app.requestBKD,
    create: () => app.base + app.api + app.createBKD,
    edit: () => app.base + app.api + app.editBKD,
    delete: () => app.base + app.api + app.deleteBKD,
  },
  channel: {
    create: () => app.base + app.api + app.createChannel,
    edit: () => app.base + app.api + app.editChannel,
    delete: () => app.base + app.api + app.deleteChannel,
    enter: () => app.base + app.api + app.enterChannel,
    exit: () => app.base + app.api + app.exitChannel,
    request: () => app.base + app.api + app.requestChannel,
  },
  unit: {
    create: () => app.base + app.api + app.createUnit,
    edit: () => app.base + app.api + app.editUnit,
    delete: () => app.base + app.api + app.deleteUnit,
    request: () => app.base + app.api + app.requestUnit,
  },
  paper: {
    generateQuestion: () => app.base + app.api + app.generateQuestion,
    verifyQuestion: () => app.base + app.api + app.verifyQuestion,
    makeReservation: () => app.base + app.api + app.makeReservation,
    submitPaper: () => app.base + app.api + app.submitPaper,
  },
  common: {
    refresh: () => app.base + app.api + app.refresh,
    requestPaper: () => () => app.base + app.api + app.requestPaper,
  },
};

export const unilm = {
  base: 'https://117.16.136.170',
  api: '/restful/',
  qg: 'qg/',
  qa: 'qa/',
  search: 'nouns',
  bible: 'bible_nouns',
  generateQuestion: () => unilm.base + unilm.api + unilm.qg,
  answerQuestion: () => unilm.base + unilm.api + unilm.qa,
  searchNouns: () => unilm.base + unilm.api + unilm.qg + unilm.search,
  searchNounsBible: () => unilm.base + unilm.api + unilm.qg + unilm.bible,
};
