import React from 'react';

import Board from './view/Board';

const title = {
  en: {
    leader: 'FOR LEADER',
    runner: 'FOR RUNNER',
  },
};

const channels = [
  { id: 0, title: 'TEST1', subtitle: 'test', imgType: 0 },
  { id: 1, title: 'TEST2', subtitle: 'test', imgType: 0 },
  { id: 2, title: 'TEST3', subtitle: 'test', imgType: 0 },
  { id: 3, title: 'TEST4', subtitle: 'test', imgType: 0 },
  { id: 4, title: 'TEST5', subtitle: 'test', imgType: 0 },
  { id: 5, title: 'TEST6', subtitle: 'test', imgType: 0 },
  { id: 6, title: 'TEST7', subtitle: 'test', imgType: 0 },
  { id: 7, title: 'TEST8', subtitle: 'test', imgType: 0 },
];

const BoardContainer = ({ type }) => {
  return <Board type={type} title={title.en[type]} channels={channels} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default BoardContainer;
