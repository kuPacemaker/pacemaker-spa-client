import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { show } from 'store/modules/creators/modal';
import { fetchChannel } from 'store/modules/action/channel';

import Channel from './view/Channel';
const ChannelContainer = ({
  type,
  id: channelId,
  data,
  token,
  isReady,
  fetch: getChannelHandler,
  onClickAccessCode,
  onClickCreateUnit,
  onClickNotReadyFunction,
}) => {
  useEffect(() => {
    getChannelHandler(token, type, channelId);
  }, []);

  if (isReady && data) {
    const image = require(`resources/images/channel/channel-image-${data.image}.jpg`);
    return (
      <Channel
        channelId={channelId}
        type={type}
        title={data.title}
        detail={data.detail}
        leader={data.leader}
        image={image}
        channelCode={data.code}
        units={data.units}
        runners={data.runners}
        onClickAccessCode={onClickAccessCode}
        onClickCreateUnit={onClickCreateUnit}
        onClickNotReadyFunction={onClickNotReadyFunction}
      />
    );
  } else {
    return <div />;
  }
};

const mapStateToProps = (state) => ({
  token: state.account.token,
  data: state.channel.data,
  isReady: state.channel.state.ready,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: (token, type, id) =>
    dispatch(fetchChannel({ token, type, channel: id })),
  onClickAccessCode: () => dispatch(show('ACCESS CODE')),
  onClickCreateUnit: () => dispatch(show('CREATE UNIT')),
  onClickNotReadyFunction: (arg) => dispatch(show('ALERT MODAL', arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelContainer);
