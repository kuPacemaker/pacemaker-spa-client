import { axios } from 'common/api-wrapper';
import { app } from 'common/server-path';

const bocuments = {};

bocuments.create =
  process.env.NODE_ENV === 'development'
    ? app.api + app.createBKD
    : app.documents.create();

bocuments.update =
  process.env.NODE_ENV === 'development'
    ? app.api + app.editBKD
    : app.documents.edit();

/**
 *
 * @param {token, channel, unit} payload
 */

export const create = async (payload) => {
  return await axios.post(bocuments.create, {
    token: payload.token,
    unit_id: payload.unit,
  });
};

/**
 *
 * @param {token, document} payload
 */

export const update = async (payload) => {
  return await axios.post(bocuments.update, {
    token: payload.token,
    bkd_id: payload.document.id,
    visible: true,
    title: payload.document.title,
    body: payload.document.body,
  });
};

export default {
  create,
  update,
};
