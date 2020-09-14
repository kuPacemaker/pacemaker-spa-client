import React, { useState } from 'react';

import RightImageForm from 'components/right-image-form';
import image from 'resources/images/signup-image.png';

const title = 'SIGN-UP';
const subTitle = 'START A PERFECT MARATHON WITH PACEMAKER';
const pwRule = RegExp(/^[A-Za-z\d]{4,5}$/);

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
  {
    title: 'PASSWORD',
    type: 'password',
    fontSize: '1.35em',
  },
  {
    title: 'CONFIRM PASSWORD',
    type: 'password',
    fontSize: '1.35em',
  },
];

const SignUpContainer = (prop) => {
  const [state, setState] = useState({
    name: '',
    id: '',
    pw: '',
    repw: '',
  });
  const onChangeHandler = (type) => (data) => {
    switch (type) {
      case 'NAME':
        setState({ ...state, name: data });
        return;
      case 'E-MAIL':
        setState({ ...state, id: data });
        return;
      case 'PASSWORD':
        setState({ ...state, pw: data });
        return;
      case 'CONFIRM PASSWORD':
        setState({ ...state, repw: data });
        return;
      default:
        return;
    }
  };

  const signUpHandler = () => {
    console.log(state);
    console.log(checkPwHandler(pwRule));
  };
  const checkPwHandler = (regex) => {
    if (!regex.test(state.pw))
      return ['INVALID_PASSWORD', 'INVALID PASSWORD MESSAGE'];
    if (state.pw !== state.repw)
      return ['PASSWORD_MISMATCH', 'PASSWORD MISMATCH MESSAGE'];
    return ['CORRECT_PASSWORD', ''];
  };

  return (
    <RightImageForm
      title={title}
      subTitle={subTitle}
      inputForms={inputForms}
      onChangeHandler={onChangeHandler}
      signUpHandler={signUpHandler}
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

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default SignUpContainer;
