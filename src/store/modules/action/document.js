import { update_document } from '../creators/unit';
import document from 'api/document';

/**
 *
 * @param {token, channelId, unitId} payload
 * @param {*} callbackHandler
 */
export const create = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await document.create(payload);
    const { state, ...data } = response.data;
    console.log(data);
    dispatch(update_document(data));
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
    const response = await document.update(payload);
    const { state, ...data } = response.data;
    console.log(data);
    dispatch(update_document(data));
    if (callbackHandler !== undefined) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};

export default {
  create,
  update,
};
