import React from 'react';
import { useHistory } from 'react-router-dom';
import { LocalMainPage } from 'common/local-path';

import ChannelThumbnail from './view/ChannelThumbnail';

const clickChannelHandler = (history) => (boardType, channelId) => () => {
  history.push(LocalMainPage.channel.root + boardType + '?id=' + channelId);
  console.log('enter to Channel : ' + channelId);
};

const ChannelThumbnailContainer = ({ type, id, title, detail, imgType }) => {
  const history = useHistory();

  const image = require(`resources/images/channel/channel-image-${imgType}.jpg`);
  return (
    <ChannelThumbnail
      title={title}
      detail={detail}
      image={image}
      onClickHandler={clickChannelHandler(history)(type, id)}
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
export default ChannelThumbnailContainer;
