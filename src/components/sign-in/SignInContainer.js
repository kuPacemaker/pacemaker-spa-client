import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { getBoard } from 'store/modules/action/board';
import { requestSignIn } from 'store/modules/action/account';
import { LocalMainPage } from 'common/local-path';
import LeftImageForm from 'components/left-image-form';
import image from 'resources/images/concept/signin-image.jpg';

const title = 'SIGN-IN';
const imageText = 'START A PERFECT MARATHON WITH PACEMAKER';
const goSignUp = 'I’M NOT A MEMBER YET';
const goFindAccount = 'I FORGOT MY ACCOUNT';

const inputForms = [
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
];

const SignInContainer = (props) => {
  const [state, setState] = useState({
    id: '',
    pw: '',
  });
  const history = useHistory();
  const onChangeHandler = (type) => (data) => {
    switch (type) {
      case 'E-MAIL':
        setState({ ...state, id: data });
        return;
      case 'PASSWORD':
        setState({ ...state, pw: data });
        return;
      default:
        return;
    }
  };

  // history.push('/main-page');
  const signInHandler = (historyHandler) => () => {
    props.requestSignIn({ id: state.id, pw: state.pw }, () => {
      props.getBoard(props.token);
      historyHandler(LocalMainPage.newspeed);
    });
  };

  return (
    <LeftImageForm
      title={title}
      imageText={imageText}
      goSignUp={goSignUp}
      goFindAccount={goFindAccount}
      inputForms={inputForms}
      onChangeHandler={onChangeHandler}
      signInHandler={signInHandler(history.push)}
      image={image}
    />
  );
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestSignIn, getBoard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
