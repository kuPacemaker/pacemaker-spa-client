import React from 'react';

import Newspeed from './view/Newspeed';
import image from 'resources/images/signin-image.png';
import { account } from 'shared/test-data.js';

const NewspeedContainer = (prop) => {
  return <Newspeed />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default NewspeedContainer;
