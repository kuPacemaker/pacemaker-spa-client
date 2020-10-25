import axios from 'axios';
import { GQQA } from 'common/server-path';
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

export const ask = async (payload) => {
  const path =
    process.env.NODE_ENV === 'development'
      ? '/restful/qa/'
      : GQQA.answerQuestion();
  return await axios.post(path, {
    bkd: payload.document.body,
    q: payload.question,
  });
};
