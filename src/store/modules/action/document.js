import { update_document } from '../creators/unit';
import document from 'api/document';

/**
 *
 * @param {token, channelId, unitId} payload
 * @param {*} callbackHandler
 */
export const create = (payload, callbackHandler) => async (dispatch) => {
  try {
    const docs = await document.create(payload);
    dispatch(update_document(docs));
    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, document object} payload
 * @param {*} callbackHandler
 */
export const update = (payload, callbackHandler) => async (dispatch) => {
  try {
    const docs = await document.update(payload);
    dispatch(update_document(docs));
    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};

export default {
  create,
  update,
};
