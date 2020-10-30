import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { requestSignUp } from 'store/modules/action/account';
import { show } from 'store/modules/creators/modal';
import { LocalAdmission } from 'common/local-path';
import { checkPassword } from 'common/security/check-password';

import RightImageForm from 'components/right-image-form';
import image from 'resources/images/concept/signup-image.jpg';

const title = 'SIGN-UP';
const subTitle = 'START A PERFECT MARATHON WITH PACEMAKER';

const inputForms = [
  {
    title: 'NAME',
    type: 'text',
    fontSize: '1.35em',
    max: 28,
  },
  {
    title: 'E-MAIL',
    type: 'email',
    fontSize: '1.35em',
    max: 28,
  },
  {
    title: 'PASSWORD',
    type: 'password',
    fontSize: '1.35em',
    max: 26,
  },
  {
    title: 'CONFIRM PASSWORD',
    type: 'password',
    fontSize: '1.35em',
    max: 22,
  },
];

const SignUpContainer = (props) => {
  const history = useHistory();
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

  const signUpHandler = (historyHandler) => () => {
    if (
      state.id.length === 0 ||
      state.name.length === 0 ||
      state.pw.length === 0 ||
      state.repw.length === 0
    )
      return;
    const invalid = checkPassword(state.pw, state.repw);
    if (invalid) {
      props.show('ALERT MODAL', {
        title: `${invalid}\nCHECK YOUR PASSWORD`,
        body:
          'Please check your password again!\nMake your password 6 or more\nwith a combination of letters, numbers and marks',
      });
    } else {
      props.requestSignUp(
        { id: state.id, pw: state.pw, name: state.name },
        (success) => {
          console.log(success);
          if (success) {
            props.show('ALERT MODAL', {
              title: 'SIGN-UP SUCCESS\nSIGN-IN TO PACEMAKER!',
              body:
                'Now You are one of the PACEMAKER members!\nWe Cheer the way you go.',
              callback: () => historyHandler(LocalAdmission.signin),
            });
          } else {
            props.show('ALERT MODAL', {
              title: 'SIGN-UP DENIED\nYOU ALREADY SIGN-UP!',
              body:
                'This e-mail is already signed up!\nYou can try to find your account.',
            });
          }
        }
      );
    }
  };

  return (
    <RightImageForm
      title={title}
      subTitle={subTitle}
      inputForms={inputForms}
      onChangeHandler={onChangeHandler}
      signUpHandler={signUpHandler(history.push)}
      image={image}
    />
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestSignUp, show }, dispatch);

export default connect(null, mapDispatchToProps)(SignUpContainer);
