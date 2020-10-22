import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { LocalMainPage } from 'common/local-path';
import ChannelThumbnail from './view/ChannelThumbnail';
// import { fetchChannel } from 'store/modules/action/channel';

const clickChannelHandler = (boardType, channelId) => (
  callbackHandler
) => () => {
  callbackHandler(boardType, channelId);
  // fetch(
  //   { token, type: boardType, channel: channelId },
  //   callbackHandler(boardType, channelId)
  // );
};

const ChannelThumbnailContainer = ({ type, id, title, detail, image }) => {
  const history = useHistory();

  const changeHistory = (boardType, channelId) => {
    history.push(LocalMainPage.channel.root + boardType + '?id=' + channelId);
  };

  const channelImage = require(`resources/images/channel/channel-image-${image}.jpg`);
  return (
    <ChannelThumbnail
      title={title}
      detail={detail}
      image={channelImage}
      onClickHandler={clickChannelHandler(type, id)(changeHistory)}
    />
  );
};

// const mapStateToProps = ({ account }) => ({ token: account.token });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ fetchChannel }, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ChannelThumbnailContainer);
export default ChannelThumbnailContainer;
