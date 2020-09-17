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
  channel: {
    root: '/main-page/channel/',
  },
  unit: {
    root: '/main-page/unit/',
  },

  documents: {
    root: '/main-page/my-documents/',
  },
  statistics: {
    root: '/main-page/statistics/',
  },
};

main.board['leaderpath'] = main.board.root + main.board.elements.leader;
main.board['runnerpath'] = main.board.root + main.board.elements.runner;
main.channel['path'] = main.channel.root + ':id';
main.unit['path'] = main.channel.root + ':id';
main.documents['path'] = main.documents.root + ':id';
main.statistics['path'] = main.statistics.root + ':id';

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
