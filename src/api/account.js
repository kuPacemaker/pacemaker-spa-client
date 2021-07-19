import { Logger } from '../utils/logger/debugger';

// FIXME: 추후 대체될 것
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const DUMMY_ACCOUNT = {
  test: {
    name: 'Dummy Tester',
    type: 'DUMMY',
    token: 'dummy',
  },
};
/**
 *
 * @param {id, pw} payload
 */
// FIXME: 추후 대체될 것
export const apiSignIn = async (payload) => {
  await sleep(250);
  if (DUMMY_ACCOUNT.hasOwnProperty(payload.id) && payload.id === payload.pw) {
    return new Promise((resolve) =>
      resolve({
        id: payload.id,
        ...DUMMY_ACCOUNT[payload.id],
      })
    );
  }
  return new Promise((resolve) => resolve({ token: undefined }));
};

/**
 *
 * @param  {token, id, pw, new_pw, name} payload
 */
// FIXME: 추후 대체될 것
export const modifyAccount = async (payload) => {
  await sleep(250);
  Logger(DUMMY_ACCOUNT);
  Logger(payload.id);

  if (DUMMY_ACCOUNT.hasOwnProperty(payload.id)) {
    return new Promise((resolve) =>
      resolve({
        message: true,
      })
    );
  }
  return new Promise((resolve) => resolve({ message: false }));
};

// FIXME: 추후 대체될 것
// export const sendSignIn = async (payload) => {
//   return await axios.post(`~~`, info)
// }

// export const apiSignUp = async (payload) => {
//   return await axios.post(`~~`, payload);
// }

// export const apiModifyAccount = async (payload) => {
//   return await axios.post(`~~`, payload);
// }
