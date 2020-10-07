// FIXME: 추후 대체될 것
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const generateQuestion = async (payload) => {
  await sleep(250);
  console.log(payload);
  return new Promise((resolve) => resolve());
};

// FIXME: 추후 대체될 것
// export const fetch = async () => {
//   return await axios.post(`~~`, info)
// }
