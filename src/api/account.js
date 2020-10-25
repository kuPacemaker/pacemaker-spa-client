// FIXME: 추후 대체될 것
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const DUMMY_ACCOUNT = {
  admin: {
    name: 'Lumy Kelvin',
    type: 'ADMIN',
    token: 'admin',
  },
};
/**
 *
 * @param {id, pw} payload
 */
// FIXME: 추후 대체될 것
export const apiSignIn = async (payload) => {
  await sleep(250);
  if (DUMMY_ACCOUNT.hasOwnProperty(payload.id)) {
    return new Promise((resolve) =>
      resolve({
        id: payload.id,
        ...DUMMY_ACCOUNT[payload.id],
      })
    );
  }
  return new Promise((resolve) => resolve({ token: undefined }));
};

// FIXME: 추후 대체될 것
// export const sendSignIn = async (payload) => {
//   return await axios.post(`~~`, info)
// }

// export const apiSignUp = async (payload) => {
//   return await axios.post(`~~`, payload);
// }

// export const apiModifiyAccount = async (payload) => {
//   return await axios.post(`~~`, payload);
// }
