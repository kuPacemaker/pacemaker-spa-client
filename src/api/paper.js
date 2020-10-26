import axios from 'axios';
import { gqqa } from 'common/server-path';
// FIXME: 추후 대체될 것
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// export const generateQuestion = async (payload) => {
//   await sleep(250);
//   console.log(payload);
//   return new Promise((resolve) => resolve());
// };

const server = {};
server['qg'] =
  process.env.NODE_ENV === 'development'
    ? gqqa.api + gqqa.qg
    : gqqa.generateQuestion();

// FIXME: 추후 대체될 것
export const generateQuestion = async (payload) => {
  return await axios.post(server.qg, {
    bkd: payload.body,
  });
};

export const markPaper = async (payload) => {
  await sleep(250);
  return new Promise((resolve) => resolve());
};

// FIXME: 추후 대체될 것
// export const markPaper = async (payload) => {
//   return await axios.post(`~~`, payload)
// }
