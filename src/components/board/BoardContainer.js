import React from 'react';
import { useHistory } from 'react-router-dom';

import Board from './view/Board';
import { LocalMainPage } from 'local-path';
const title = {
  en: {
    leader: 'FOR LEADER',
    runner: 'FOR RUNNER',
  },
};

const channels = [
  {
    id: 0,
    title: 'Basic Programming',
    detail: 'Tue. 15:00~18:00',
    imgType: 0,
  },
  { id: 1, title: 'Data Structure', detail: 'Wed. 15:00~18:00', imgType: 2 },
  {
    id: 2,
    title: 'Basic Programming',
    detail: 'Wed. 15:00~18:00',
    imgType: 1,
  },
  { id: 3, title: 'Data Structure', detail: 'When ever You Want!', imgType: 4 },
  {
    id: 4,
    title: 'Basic Programming',
    detail: 'When ever You Want!',
    imgType: 2,
  },
  { id: 5, title: 'Algorithm', detail: 'When ever You Want!', imgType: 6 },
  { id: 6, title: 'Data Structure', detail: 'When ever You Want!', imgType: 7 },
  {
    id: 7,
    title: 'Basic Programming',
    detail: 'When ever You Want!',
    imgType: 4,
  },
];

const BoardContainer = ({ type }) => {
  const history = useHistory();
  const clickChannelHandler = (boardType, id) => () => {
    history.push(LocalMainPage.channel.root + boardType + '?id=' + id);
    console.log('enter to Channel : ' + id);
  };
  const createChannelHandler = (type) => () => {
    if (type === 'leader') console.log('create leader channel');
    else if (type === 'runner') console.log('enter to leader channel');
    else console.log('기능이 구현되지 않았습니다.');
  };
  return (
    <Board
      type={type}
      title={title.en[type]}
      channels={channels}
      clickChannelHandler={clickChannelHandler}
      createChannelHandler={createChannelHandler}
    />
  );
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default BoardContainer;
