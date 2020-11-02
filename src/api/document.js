import { axios } from 'common/api-wrapper';
import { app, unilm } from 'common/server-path';
import { removeTag } from 'common/security/common';

const bocuments = {};

bocuments.create =
  process.env.NODE_ENV === 'development'
    ? app.api + app.createBKD
    : app.documents.create();

bocuments.update =
  process.env.NODE_ENV === 'development'
    ? app.api + app.editBKD
    : app.documents.edit();

const uni = {};

uni.tfidf =
  process.env.NODE_ENV === 'development'
    ? unilm.api + unilm.tfidf
    : unilm.makeTFIDF();

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
    title: removeTag(payload.document.title),
    body: removeTag(payload.document.body),
  });
};

/**
 *
 * @param {document} payload
 */
export const tfidf = async (payload) => {
  return await axios.post(uni.tfidf, {
    bkd: payload.document.body,
  });
};

export default {
  create,
  update,
};
