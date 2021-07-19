import { update_document } from '../creators/unit';
import document from 'api/document';
import { Logger } from '../../../utils/logger/debugger';
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
    Logger(e);
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
    if (callbackHandler !== undefined) callbackHandler();
  } catch (e) {
    Logger(e);
  }
};

export default {
  create,
  update,
};
