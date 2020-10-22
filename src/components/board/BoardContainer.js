import React from 'react';
import { connect } from 'react-redux';

import { show } from 'store/modules/creators/modal';
import Board from './view/Board';

const title = {
  en: {
    leader: 'FOR LEADER',
    runner: 'FOR RUNNER',
  },
};

const BoardContainer = ({
  type,
  leader: leaderBoard,
  runner: runnerBoard,
  showOverlay,
}) => {
  const createChannelHandler = (_type) => () => {
    if (_type === 'leader') showOverlay('CREATE CHANNEL');
    else if (_type === 'runner') showOverlay('ENTER CHANNEL');
    else console.log('기능이 구현되지 않았습니다.');
  };
  return (
    <Board
      type={type}
      title={title.en[type]}
      channels={type === 'leader' ? leaderBoard : runnerBoard}
      createChannelHandler={createChannelHandler}
    />
  );
};

const mapStateToProps = ({ board }) => ({
  leader: board.data.leader,
  runner: board.data.runner,
});

const mapDispatchToProps = (dispatch) => ({
  showOverlay: (type) => dispatch(show(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
// export default BoardContainer;
