import React from 'react';

import Footer from './view/Footer';
import { Logger } from '../../utils/logger/debugger';
const icons = ['Facebook', 'Instargram', 'Youtube'];

const clickEvent = (icon) => {
  Logger('Redirect to ' + icon);
};

const FooterContainer = () => {
  return <Footer onClickHandler={clickEvent} icons={icons} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default FooterContainer;
