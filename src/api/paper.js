import axios from 'axios';
import { gqqa } from 'common/server-path';

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

export const generateQuestion = async (payload) => {
  return await axios.post(server.qg, {
    bkd: payload.body,
  });
};

export const markPaper = async (payload) => {
  return new Promise((resolve) => resolve());
};
