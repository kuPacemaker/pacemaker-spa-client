import React from 'react';
import { connect } from 'react-redux';
import { decrement } from 'store/modules/creators/counter';
import { incrementAsync } from 'store/modules/action/counter';
import { bindActionCreators } from 'redux'; // 불러오기
import { getPost } from 'store/modules/action/post';

import Header from './view/Header';

const HeaderContainer = (prop) => {
  return <Header />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default HeaderContainer;
