import React from 'react';
import { useHistory } from 'react-router-dom';

import { LocalMainPage } from 'common/local-path';
import ChannelThumbnail from './view/ChannelThumbnail';

const clickChannelHandler = (boardType, channelId) => (
  callbackHandler
) => () => {
  callbackHandler(boardType, channelId);
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

export default ChannelThumbnailContainer;
