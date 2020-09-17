import React from 'react';

import Channel from './view/Channel';

const ChannelContainer = ({ title, detail, imgType }) => {
  const image = require(`resources/images/channel/channel-image-${imgType}.jpg`);
  return <Channel title={title} detail={detail} image={image} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default ChannelContainer;
