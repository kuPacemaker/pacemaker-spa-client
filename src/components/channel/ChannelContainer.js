import React from 'react';
import Channel from './view/Channel';

const ChannelContainer = ({ type, id }) => {
  const image = require(`resources/images/channel/channel-image-${0}.jpg`);
  return <Channel title={id} detail={type} image={image} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default ChannelContainer;
