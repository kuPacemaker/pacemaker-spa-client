import { signin } from '../creators/account';

export const requestSignIn = (id, pw) => (dispatch) => {
  setTimeout(() => {
    dispatch(signin(id, 'Lumy Kelvin', 'MASTER', '토큰토큰토큰'));
  }, 250);
};

export default { requestSignIn };
