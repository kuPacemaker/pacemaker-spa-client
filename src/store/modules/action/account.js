import { signin, signout } from '../creators/account';

export const requestSignIn = (payload, historyHandler) => (dispatch) => {
  const dummy = {
    id: payload.id,
    name: 'Lumy Kelvin',
    type: 'MASTER',
    token: payload.pw,
  };

  setTimeout(() => {
    dispatch(signin(dummy));
    historyHandler();
  }, 250);
};

export const modifyAccount = (payload, historyHandler) => (dispatch) => {
  // {token, pw, new_pw, name}
  setTimeout(() => {
    dispatch(signout());
    historyHandler();
  }, 250);
};

export default { requestSignIn, modifyAccount };
