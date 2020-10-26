import axios from 'axios';
import { gqqa } from 'common/server-path';
// FIXME: 추후 대체될 것
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 *
 * @param {token, document, question} payload
 */
// FIXME: 추후 대체될 것
// export const ask = async (payload) => {
//   console.log(payload);
//   await sleep(250);
//   return new Promise((resolve) => resolve({ answer: 'asdasd' }));
// };

const server = {};
server['qa'] =
  process.env.NODE_ENV === 'development'
    ? gqqa.api + gqqa.qa
    : gqqa.answerQuestion();

export const ask = async (payload) => {
  return await axios.post(server.qa, {
    bkd: payload.document.body,
    q: payload.question,
  });
};
