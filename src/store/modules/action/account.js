import { signin, signout } from '../creators/account';
import { signIn, signUp, findAccount, modifyAccount } from 'api/account';
import { encode } from 'common/security/common';

export const requestSignIn = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await signIn(payload);
    const { state, ...data } = response.data;
    console.log(state, data);
    if (state === 'success') {
      dispatch(signin(data));
      localStorage.setItem('account', encode(payload));
      if (callbackHandler) callbackHandler(data.token);
      return;
    }
    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};

export const requestSignUp = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await signUp(payload);
    const { state, message } = response.data;
    if (callbackHandler) callbackHandler(state === 'success');
  } catch (e) {
    console.log(e);
  }
};

export const requestFindAccount = (payload, callbackHandler) => async (
  dispatch
) => {
  try {
    const response = await findAccount(payload);
    const { state, message } = response.data;
    if (callbackHandler) callbackHandler(state === 'success');
  } catch (e) {
    console.log(e);
  }
};
// {token, pw, new_pw, name}
export const requestModifyAccount = (payload, callbackHandler) => async (
  dispatch
) => {
  try {
    const response = await modifyAccount(payload);
    const { state, message } = response.data;
    if (state === 'success') dispatch(signout());
    if (callbackHandler) callbackHandler(state === 'success');
  } catch (e) {
    console.log(e);
  }
};
