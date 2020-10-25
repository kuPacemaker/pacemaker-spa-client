import { signin, signout } from '../creators/account';
import { apiSignIn } from 'api/account';
import { encode } from 'common/security/common';

export const requestSignIn = (payload, callbackHandler) => async (dispatch) => {
  try {
    const userInfo = await apiSignIn(payload);
    if (!userInfo.token) {
      if (callbackHandler) callbackHandler();
      return;
    }
    dispatch(signin(userInfo));
    localStorage.setItem('account', encode(payload));
    if (callbackHandler) callbackHandler(userInfo.token);
  } catch (e) {
    console.log(e);
  }
};

export const requestSignUp = (payload, callbackHandler) => async (dispatch) => {
  try {
    console.log('Sign Up Test');
    if (callbackHandler) callbackHandler(true);
  } catch (e) {
    console.log(e);
  }
};

export const requestFindAccount = (payload, callbackHandler) => async (
  dispatch
) => {
  try {
    console.log('Sign Up Test');
    if (callbackHandler) callbackHandler(true);
  } catch (e) {
    console.log(e);
  }
};

export const requestModifyAccount = (payload, callbackHandler) => (
  dispatch
) => {
  // {token, pw, new_pw, name}
  dispatch(signout());
  if (callbackHandler) callbackHandler();
};
