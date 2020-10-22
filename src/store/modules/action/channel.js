import { update } from '../creators/channel';
import { fetch } from 'api/channel';
import { create } from 'api/unit';

export const updateChannel = (data) => (dispatch) => {
  dispatch(update(data));
};

export const fetchChannel = (payload, callbackHandler) => async (dispatch) => {
  try {
    const data = await fetch(payload);
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
