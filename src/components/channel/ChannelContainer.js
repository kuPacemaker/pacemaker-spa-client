import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { show } from 'store/modules/creators/modal';
import { fetchChannel } from 'store/modules/action/channel';
import { LocalMainPage } from 'common/local-path';

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
  onClickRemoveChannel,
  onClickExitChannel,
  onClickNotReadyFunction,
  onShowWarningModal,
}) => {
  const history = useHistory();
  useEffect(() => {
    if (token === null) return;
    getChannelHandler(token, type, channelId, (state, message) => {
      if (state);
      else onShowWarningModal(message, () => history.push(LocalMainPage.root));
    });
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
        onClickRemoveChannel={onClickRemoveChannel}
        onClickExitChannel={onClickExitChannel}
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
  fetch: (token, type, id, callback) =>
    dispatch(fetchChannel({ token, type, channel: id }, callback)),
  onClickAccessCode: () => dispatch(show('ACCESS CODE')),
  onClickCreateUnit: () => dispatch(show('CREATE UNIT')),
  onClickRemoveChannel: () => dispatch(show('REMOVE CHANNEL')),
  onClickExitChannel: () => dispatch(show('EXIT UNIT')),
  onClickNotReadyFunction: (arg) => dispatch(show('ALERT MODAL', arg)),
  onShowWarningModal: (message, callbackHandler) =>
    dispatch(show('ERROR MODAL', { message, callbackHandler })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelContainer);
