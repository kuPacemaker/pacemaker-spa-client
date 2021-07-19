import axios from 'axios';
import { gqqa } from 'common/server-path';
/**
 *
 * @param {token, document, question} payload
 */

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
