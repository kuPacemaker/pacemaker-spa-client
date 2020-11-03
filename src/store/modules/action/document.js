import { update_document } from '../creators/unit';
import document, { search } from 'api/document';

/**
 *
 * @param {token, channelId, unitId} payload
 * @param {*} callbackHandler
 */
export const create = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await document.create(payload);
    const { state, message, ...data } = response.data;
    if (state === 'success') {
      dispatch(update_document(data));
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
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
    const { state, message, ...data } = response.data;
    if (state === 'success') {
      dispatch(update_document(data));
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
  } catch (e) {
    console.log(e);
  }
};

export const searchSpans = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await search(payload);
    const { nouns } = response.data;
    console.log(nouns);
    if (callbackHandler) callbackHandler(true, nouns);
  } catch (e) {
    console.log(e);
  }
};

export default {
  create,
  update,
};
