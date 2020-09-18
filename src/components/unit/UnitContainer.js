import React from 'react';

import Unit from './view/Unit';

const UnitContainer = ({ type, channel, id }) => {
  return <Unit type={type} channel={channel} id={id} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default UnitContainer;
