import React, { useState } from 'react';

import RightImageForm from 'components/right-image-form';
import image from 'resources/images/concept/find-account-image.jpg';

const title = 'FIND-ACCOUNT';
const subTitle = 'FIND YOUR PACEMAKER ACCOUNT';

const inputForms = [
  {
    title: 'NAME',
    type: 'text',
    fontSize: '1.35em',
  },
  {
    title: 'E-MAIL',
    type: 'email',
    fontSize: '1.35em',
  },
];

const SignUpContainer = (prop) => {
  const [state, setState] = useState({
    name: '',
    id: '',
  });
  const onChangeHandler = (type) => (data) => {
    switch (type) {
      case 'NAME':
        setState({ ...state, name: data });
        return;
      case 'E-MAIL':
        setState({ ...state, id: data });
        return;
      default:
        return;
    }
  };

  const FindAccountHandler = () => {
    console.log(state);
  };

  return (
    <RightImageForm
      title={title}
      subTitle={subTitle}
      inputForms={inputForms}
      onChangeHandler={onChangeHandler}
      signUpHandler={FindAccountHandler}
      image={image}
    />
  );
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);\

export default SignUpContainer;
