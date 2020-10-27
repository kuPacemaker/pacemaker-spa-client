import { update, pending, success } from '../creators/channel';
import { fetch } from 'api/channel';
import { create, remove, edit } from 'api/unit';

export const updateChannel = (data) => (dispatch) => {
  dispatch(update(data));
};

export const fetchChannel = (payload, callbackHandler) => async (dispatch) => {
  try {
    dispatch(pending());
    const data = await fetch(payload);
    dispatch(success());
    dispatch(update(data));
    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};
/**
 *
 * @param {token, channelId, title, index} payload
 */
export const createUnit = (payload, callbackHandler) => async (dispatch) => {
  try {
    const data = await create(payload);
    dispatch(update(data));
    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};
// export const createChannel = (payload) => (dispatch) => {
//   console.log('Test');
// };

/**
 *
 * @param {token, channel, unit } payload
 */
export const removeUnit = (payload, callbackHandler) => async (dispatch) => {
  try {
    const data = await remove(payload);
    dispatch(update(data));
    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, channel, unit, title} payload
 */
export const editUnit = (payload, callbackHandler) => async (dispatch) => {
  try {
    const data = await edit(payload);
    dispatch(update(data));
    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};
