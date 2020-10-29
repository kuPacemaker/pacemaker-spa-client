import { axios } from 'common/api-wrapper';
import { app } from 'common/server-path';

const board = {};
board['request'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.requestBoard
    : app.board.request();

/**
 *
 * @param {token} payload
 */
export const fetch = async (payload) => {
  return await axios.post(board.request, payload);
};
