// FIXME: 추후 대체될 것
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 *
 * @param {id, pw} payload
 */
// FIXME: 추후 대체될 것
export const apiSignIn = async (payload) => {
  const dummy = {
    id: payload.id,
    name: 'Lumy Kelvin',
    type: 'MASTER',
    token: payload.pw,
  };

  await sleep(250);

  return new Promise((resolve) => resolve(dummy));
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
