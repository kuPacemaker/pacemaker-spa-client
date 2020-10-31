import { signin, signout } from '../creators/account';
import {
  signIn,
  signOut,
  signUp,
  findAccount,
  modifyAccount,
} from 'api/account';
import { encode } from 'common/security/common';

export const requestSignIn = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await signIn(payload);
    const { state, message, ...data } = response.data;
    if (state === 'success') {
      dispatch(signin(data));
      localStorage.setItem('account', encode(payload));
      if (callbackHandler) callbackHandler(state === 'success', data.token);
      return;
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
  } catch (e) {
    console.log(e);
  }
};

export const requestSignOut = (payload, callbackHandler) => async (
  dispatch
) => {
  try {
    const response = await signOut(payload);
    const { state, message } = response.data;
    if (state === 'success') dispatch(signout());
    if (callbackHandler) callbackHandler(state === 'success', message);
  } catch (e) {
    console.log(e);
  }
};

export const requestSignUp = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await signUp(payload);
    const { state, message } = response.data;
    if (callbackHandler) callbackHandler(state === 'success', message);
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
    if (callbackHandler) callbackHandler(state === 'success', message);
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
    if (callbackHandler) callbackHandler(state === 'success', message);
  } catch (e) {
    console.log(e);
  }
};
