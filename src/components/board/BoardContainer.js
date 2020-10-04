import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { show } from 'store/modules/creators/modal';
import Board from './view/Board';
import { LocalMainPage } from 'common/local-path';

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
  const history = useHistory();
  const clickChannelHandler = (boardType, id) => () => {
    history.push(LocalMainPage.channel.root + boardType + '?id=' + id);
    console.log('enter to Channel : ' + id);
  };

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
      clickChannelHandler={clickChannelHandler}
      createChannelHandler={createChannelHandler}
    />
  );
};

const mapStateToProps = ({ board }) => ({
  leader: board.leader,
  runner: board.runner,
});

const mapDispatchToProps = (dispatch) => ({
  showOverlay: (type) => dispatch(show(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
// export default BoardContainer;
