import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { requestFindAccount } from 'store/modules/action/account';
import { show } from 'store/modules/creators/modal';
import { LocalAdmission } from 'common/local-path';

import RightImageForm from 'components/right-image-form';
import image from 'resources/images/concept/find-account-image.jpg';

const title = 'FIND-ACCOUNT';
const subTitle = 'FIND YOUR PACEMAKER ACCOUNT';

const inputForms = [
  {
    title: 'NAME',
    type: 'text',
    fontSize: '1.35em',
    max: 30,
  },
  {
    title: 'E-MAIL',
    type: 'email',
    fontSize: '1.35em',
    max: 30,
  },
];

const SignUpContainer = (props) => {
  const history = useHistory();
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

  const FindAccountHandler = (historyHandler) => () => {
    if (state.id.length === 0 || state.name.length === 0) return;
    props.requestFindAccount({ id: state.id, name: state.name }, (success) => {
      if (success) {
        props.show('ALERT MODAL', {
          title: 'RESET PASSWORD\nCHECK YOUR E-MAIL!',
          body:
            'Now we reset your password!\nPlease check your e-mail and sign-in.\nYou should change the temporary password later.',
          callback: () => historyHandler(LocalAdmission.signin),
        });
      } else {
        props.show('ALERT MODAL', {
          title: 'E-MAIL NOT FOUND\nNOT SIGN-UP YET!',
          body: `We can't find this e-mail!\nYou always can create a new account for pacemaker.`,
        });
      }
    });
  };

  return (
    <RightImageForm
      title={title}
      subTitle={subTitle}
      inputForms={inputForms}
      onChangeHandler={onChangeHandler}
      signUpHandler={FindAccountHandler(history.push)}
      image={image}
    />
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestFindAccount, show }, dispatch);

export default connect(null, mapDispatchToProps)(SignUpContainer);
