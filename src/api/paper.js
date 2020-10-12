import axios from 'axios';

// FIXME: 추후 대체될 것
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// export const generateQuestion = async (payload) => {
//   await sleep(250);
//   console.log(payload);
//   return new Promise((resolve) => resolve());
// };

// FIXME: 추후 대체될 것
export const generateQuestion = async (payload) => {
  return await axios.post('/restful/qg', {
    bkd: payload.body,
  });
};

export const markPaper = async (payload) => {
  await sleep(250);
  console.log(payload);
  return new Promise((resolve) => resolve());
};

// FIXME: 추후 대체될 것
// export const markPaper = async (payload) => {
//   return await axios.post(`~~`, payload)
// }
