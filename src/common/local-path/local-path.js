const path = {
  base: '/pacemaker-spa-client',
  root: '/pacemaker-spa-client/',
};

const help = {
  root: path.base + '/help',
};
help.aboutus = help.root + '/about-us';
help.contact = help.root + '/contact';

const admission = {
  root: path.base + '/admission',
};
admission.signin = admission.root;
admission.signup = admission.root + '/sign-up';
admission.findaccount = admission.root + '/find-account';

const main = {
  root: path.base + '/main-page',
  newsfeed: {},
  board: {
    elements: {
      leader: 'leader',
      runner: 'runner',
    },
  },
  channel: {},
  unit: {},
  documents: {},
  statistics: {},
};

main.newsfeed.root = main.root + '/newsfeeds';
main.board.root = main.root + '/newsfeeds';
main.channel.root = main.root + '/channel/';
main.unit.root = main.root + '/unit/';
main.documents.root = main.root + '/my-documents/';
main.statistics.root = main.root + '/statistics/';

main.board.leaderpath = main.board.root + main.board.elements.leader;
main.board.runnerpath = main.board.root + main.board.elements.runner;

main.newsfeed.path = main.newsfeed.root;
main.board.path = main.board.root + ':type';
main.channel.path = main.channel.root + ':type';
main.unit.path = main.unit.root + ':type';
main.documents.path = main.documents.root;
main.statistics.path = main.statistics.root + ':id';

path.help = help;
path.admission = admission;
path.main = main;

export default path;
