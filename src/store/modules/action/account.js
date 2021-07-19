import { signin, signout } from '../creators/account';
import { apiSignIn, modifyAccount } from 'api/account';
import { encode } from 'common/security/common';
import { Logger } from '../../../utils/logger/debugger';
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
    Logger(e);
  }
};

export const requestSignUp = (payload, callbackHandler) => async (dispatch) => {
  try {
    Logger('Sign Up Test');
    if (callbackHandler) callbackHandler(true);
  } catch (e) {
    Logger(e);
  }
};

export const requestFindAccount =
  (payload, callbackHandler) => async (dispatch) => {
    try {
      Logger('Sign Up Test');
      if (callbackHandler) callbackHandler(true);
    } catch (e) {
      Logger(e);
    }
  };
// {token, pw, new_pw, name}
export const requestModifyAccount =
  (payload, callbackHandler) => async (dispatch) => {
    const response = await modifyAccount(payload);
    Logger(response.message);
    if (response.message) dispatch(signout());
    if (callbackHandler) callbackHandler(response.message);
  };
