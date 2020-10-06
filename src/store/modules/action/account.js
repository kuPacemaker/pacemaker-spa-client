import { signin, signout } from '../creators/account';
import { sendSignIn } from '../../../api/account';

export const requestSignIn = (payload, historyHandler) => async (dispatch) => {
  try {
    const userInfo = await sendSignIn(payload);

    dispatch(signin(userInfo));

    historyHandler();
  } catch (e) {
    console.log(e)
  }
};

export const modifyAccount = (payload, historyHandler) => (dispatch) => {
  // {token, pw, new_pw, name}
  dispatch(signout());
  historyHandler();
};

export default { requestSignIn, modifyAccount };
