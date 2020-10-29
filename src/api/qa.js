import { axios } from 'common/api-wrapper';
import { unilm } from 'common/server-path';

const server = {};
server['qa'] =
  process.env.NODE_ENV === 'development'
    ? unilm.api + unilm.qa
    : unilm.answerQuestion();

/**
 *
 * @param {token, document, question} payload
 */
export const ask = async (payload) => {
  return await axios.post(server.qa, {
    bkd: payload.document.body,
    q: payload.question,
  });
};
