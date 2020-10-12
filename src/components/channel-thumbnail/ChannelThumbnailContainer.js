import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { LocalMainPage } from 'common/local-path';
import ChannelThumbnail from './view/ChannelThumbnail';
import { fetchChannel } from 'store/modules/action/channel';

const clickChannelHandler = (history) => (boardType, channelId) => () => {
  history.push(LocalMainPage.channel.root + boardType + '?id=' + channelId);
  console.log('enter to Channel : ' + channelId);
};

const ChannelThumbnailContainer = ({
  type,
  id,
  title,
  detail,
  image,
  fetchChannel: fetch,
}) => {
  const history = useHistory();

  fetch();

  const channelImage = require(`resources/images/channel/channel-image-${image}.jpg`);
  return (
    <ChannelThumbnail
      title={title}
      detail={detail}
      image={channelImage}
      onClickHandler={clickChannelHandler(history)(type, id)}
    />
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchChannel }, dispatch);

export default connect(null, mapDispatchToProps)(ChannelThumbnailContainer);
