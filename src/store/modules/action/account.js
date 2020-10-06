import { signin, signout } from '../creators/account';
import { sendSignIn } from 'api/account';
import { encode } from 'common/security/common';

export const requestSignIn = (payload, historyHandler) => async (dispatch) => {
  try {
    const userInfo = await sendSignIn(payload);
    dispatch(signin(userInfo));
    localStorage.setItem('account', encode(payload));
    historyHandler();
  } catch (e) {
    console.log(e);
  }
};

export const modifyAccount = (payload, historyHandler) => (dispatch) => {
  // {token, pw, new_pw, name}
  dispatch(signout());
  historyHandler();
};

export default { requestSignIn, modifyAccount };
