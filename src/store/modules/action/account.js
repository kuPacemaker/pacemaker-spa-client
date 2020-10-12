import { signin, signout } from '../creators/account';
import { apiSignIn } from 'api/account';
import { encode } from 'common/security/common';

export const requestSignIn = (payload, callbackHandler) => async (dispatch) => {
  try {
    const userInfo = await apiSignIn(payload);
    dispatch(signin(userInfo));
    localStorage.setItem('account', encode(payload));
    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};

export const modifyAccount = (payload, callbackHandler) => (dispatch) => {
  // {token, pw, new_pw, name}
  dispatch(signout());
  if (callbackHandler) callbackHandler();
};

export default { requestSignIn, modifyAccount };
