const path = {
  root: '/',
  help: {
    root: '/help',
    aboutus: '/help/about-us',
    contact: '/help/contact',
  },
  admission: {
    root: '/admission',
    signin: '/admission',
    signup: '/admission/sign-up',
    findaccount: '/admission/find-account',
  },
  main: {
    root: '/main-page',
    newspeed: '/main-page/newspeeds',
    leaderboard: '/main-page/leader-board',
    runnerboard: '/main-page/runner-board',
    channel: '/main-page/channel',
    unit: '/main-page/unit',
    documents: '/main-page/my-documents',
    statistics: '/main-page/statistics',
  },
};

export default path;
export const LocalHelp = path.help;
export const LocalAdmission = path.admission;
export const LocalMainPage = path.main;
