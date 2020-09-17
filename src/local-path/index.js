const help = {
  root: '/help',
  aboutus: '/help/about-us',
  contact: '/help/contact',
};
const admission = {
  root: '/admission',
  signin: '/admission',
  signup: '/admission/sign-up',
  findaccount: '/admission/find-account',
};
const main = {
  root: '/main-page',
  newspeed: '/main-page/newspeeds',
  board: {
    root: '/main-page/board/',
    elements: {
      leader: 'leader',
      runner: 'runner',
    },
    path: '/main-page/board/:type',
  },
  channel: '/main-page/channel',
  unit: '/main-page/unit',
  documents: '/main-page/my-documents',
  statistics: '/main-page/statistics',
};

main.board['leaderpath'] = main.board.root + main.board.elements.leader;
main.board['runnerpath'] = main.board.root + main.board.elements.runner;

const path = {
  root: '/',
  help: help,
  admission: admission,
  main: main,
};

export default path;
export const LocalHelp = help;
export const LocalAdmission = admission;
export const LocalMainPage = main;
