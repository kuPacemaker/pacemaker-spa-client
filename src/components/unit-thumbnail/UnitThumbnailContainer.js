import React from 'react';

import UnitThumbnail from './view/UnitThumbnail';

const UnitThumbnailContainer = ({ id }) => {
  const image = require(`resources/images/channel/channel-image-${0}.jpg`);
  return <UnitThumbnail title={id} detail={'detail'} image={image} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default UnitThumbnailContainer;
