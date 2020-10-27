import { signin, signout } from '../creators/account';
import { apiSignIn, modifyAccount } from 'api/account';
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
// {token, pw, new_pw, name}
export const requestModifyAccount = (payload, callbackHandler) => async (
  dispatch
) => {
  const userInfo = await modifyAccount(payload);
  if (userInfo.message) dispatch(signout());
  if (callbackHandler) callbackHandler(userInfo.message);
};
