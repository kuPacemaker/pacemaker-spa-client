import { update_document } from '../creators/unit';
import { update_nouns } from '../creators/document';
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
    console.log(data);
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
    console.log(data);
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
    console.log(payload);
    const response = await search(payload);
    console.log(response.data);
    const { nouns } = response.data;
    console.log(nouns);
    // const data = response.data.passages[0].aqset[0][0];
    // const answer = data.charAt(0).toUpperCase() + data.slice(1);
    // dispatch(update_answer(answer));
    if (callbackHandler) callbackHandler(true, ['god']);
  } catch (e) {
    console.log(e);
  }
};

export default {
  create,
  update,
};
