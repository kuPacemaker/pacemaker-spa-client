import { axios } from 'common/api-wrapper';
import { app } from 'common/server-path';

const server = {};

server.refresh =
  process.env.NODE_ENV === 'development'
    ? app.api + app.refresh
    : app.common.refresh();

/**
 *
 * @param { token } payload
 */
export const refresh = async (payload) => {
  return await axios.post(server.refresh, payload);
};
