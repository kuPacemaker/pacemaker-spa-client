import React from 'react';

import UnitThumbnail from './view/UnitThumbnail';

const UnitThumbnailContainer = ({ channel, id, title }) => {
  return <UnitThumbnail id={id} title={title} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default UnitThumbnailContainer;
