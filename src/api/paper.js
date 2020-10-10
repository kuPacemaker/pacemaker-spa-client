import axios from 'axios';

const qg = {
  url: 'http://117.16.136.170',
};
// FIXME: 추후 대체될 것
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// export const generateQuestion = async (payload) => {
//   await sleep(250);
//   console.log(payload);
//   return new Promise((resolve) => resolve());
// };

// FIXME: 추후 대체될 것
export const generateQuestion = async (payload) => {
  console.log(payload.body);
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
