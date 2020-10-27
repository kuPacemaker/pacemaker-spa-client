// // FIXME: 추후 대체될 것
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const DUMMY_ACCOUNT = {
//   admin: {
//     name: 'Lumy Kelvin',
//     type: 'ADMIN',
//     token: 'admin',
//   },
// };
// /**
//  *
//  * @param {id, pw} payload
//  */
// // FIXME: 추후 대체될 것
// export const apiSignIn = async (payload) => {
//   await sleep(250);
//   if (DUMMY_ACCOUNT.hasOwnProperty(payload.id)) {
//     return new Promise((resolve) =>
//       resolve({
//         id: payload.id,
//         ...DUMMY_ACCOUNT[payload.id],
//       })
//     );
//   }
//   return new Promise((resolve) => resolve({ token: undefined }));
// };

// /**
//  *
//  * @param  {token, id, pw, new_pw, name} payload
//  */
// // FIXME: 추후 대체될 것
// export const modifyAccount = async (payload) => {
//   await sleep(250);
//   console.log(DUMMY_ACCOUNT);
//   console.log(payload.id);

//   if (DUMMY_ACCOUNT.hasOwnProperty(payload.id)) {
//     return new Promise((resolve) =>
//       resolve({
//         message: true,
//       })
//     );
//   }
//   return new Promise((resolve) => resolve({ message: false }));
// };

import { axios } from 'common/api-wrapper';
import { app } from 'common/server-path';

const server = {};
server['signIn'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.signIn
    : app.account.signIn();

server['signUp'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.signUp
    : app.account.signUp();

server['findAccount'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.findAccount
    : app.account.findAccount();

server['modifyAccount'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.modifyAccount
    : app.account.modifyAccount();

export const signIn = async (payload) => {
  return await axios.post(server.signIn, payload);
};

export const signUp = async (payload) => {
  return await axios.post(server.signUp, payload);
};
export const findAccount = async (payload) => {
  return await axios.post(server.findAccount, payload);
};

export const modifyAccount = async (payload) => {
  return await axios.post(server.modifyAccount, payload);
};
