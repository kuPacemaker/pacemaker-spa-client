import React from 'react';

import './Overlay.scss';
const show = false;
const Overlay = (prop) => (
  <div className="Overlay">{show && <div className="ShowOverlay"></div>}</div>
);

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default Overlay;
