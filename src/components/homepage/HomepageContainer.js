import React from 'react';

import Homepage from './view/Homepage';

const HomePageContainer = ({ preface }) => {
  return <Homepage preface={preface} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default HomePageContainer;
