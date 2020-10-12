import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { show } from 'store/modules/creators/modal';

import Channel from './view/Channel';
const ChannelContainer = ({
  type,
  id,
  data,
  onClickAccessCode,
  onClickCreateUnit,
}) => {
  if (data) {
    const image = require(`resources/images/channel/channel-image-${data.image}.jpg`);

    return (
      <Channel
        channelId={id}
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
      />
    );
  } else {
    return <Redirect to="/" />;
  }
};

const mapStateToProps = (state) => ({ data: state.channel.channelData });

const mapDispatchToProps = (dispatch) => ({
  onClickAccessCode: () => dispatch(show('ACCESS CODE')),
  onClickCreateUnit: () => dispatch(show('CREATE UNIT')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelContainer);
