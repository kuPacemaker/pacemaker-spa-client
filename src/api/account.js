// FIXME: 추후 대체될 것
const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms));

// FIXME: 추후 대체될 것
export const sendSignIn = async (loginInfo) => {
  const dummy = {
    id: loginInfo.id,
    name: 'Lumy Kelvin',
    type: 'MASTER',
    token: loginInfo.pw,
  };

  await sleep(250);

  return new Promise((resolve) => resolve(dummy))
}

// FIXME: 추후 대체될 것
// export const sendSignIn = async (logInInfo) => {
//   return await axios.post(`~~`, info)
// }
