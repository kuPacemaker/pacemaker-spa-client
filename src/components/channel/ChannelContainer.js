import React from 'react';
import { Redirect } from 'react-router-dom';
import Channel from './view/Channel';
import { connect } from 'react-redux';

const ChannelContainer = ({ type, id, data }) => {
  if (data) {
    const image = require(`resources/images/channel/channel-image-${data.image}.jpg`);

    return (
      <Channel
        channelId={id}
        type={type}
        title={data.title}
        detail={data.detail}
        owner={data.owner}
        image={image}
        channelCode={data.code}
        units={data.units}
        runners={data.runners}
      />
    );
  } else {
    return <Redirect to="/" />;
  }
};

const mapStateToProps = (state) => ({ data: state.channel.channelData });

export default connect(mapStateToProps, null)(ChannelContainer);
