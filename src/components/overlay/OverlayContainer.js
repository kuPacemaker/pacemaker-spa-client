import React from 'react';
import Overlay from './view/Overlay';

const OverlayContainer = ({ show, type, changeHandler }) => {
  return <Overlay show={show} type={type} changeHandler={changeHandler} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default OverlayContainer;
