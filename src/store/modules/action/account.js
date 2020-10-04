import { signin, signout } from '../creators/account';

export const requestSignIn = (id, pw) => (dispatch) => {
  setTimeout(() => {
    dispatch(signin(id, 'Lumy Kelvin', 'MASTER', '토큰토큰토큰'));
  }, 250);
};

export const modifyAccount = (token, pw, new_pw, name) => (dispatch) => {
  setTimeout(() => {
    dispatch(signout());
  }, 250);
};

export default { requestSignIn, modifyAccount };
