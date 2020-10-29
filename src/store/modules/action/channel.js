import { update, pending, success } from '../creators/channel';
import { fetch } from 'api/channel';
import { create, remove, edit } from 'api/unit';

export const updateChannel = (data) => (dispatch) => {
  dispatch(update(data));
};

export const fetchChannel = (payload, callbackHandler) => async (dispatch) => {
  try {
    dispatch(pending());
    const response = await fetch(payload);
    const { state, message, ...data } = response.data;
    if (state === 'success') {
      dispatch(success());
      dispatch(update(data));
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
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
    const response = await create(payload);
    const { state, message, ...data } = response.data;
    if (state === 'success') {
      dispatch(update(data));
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, channel, unit } payload
 */
export const removeUnit = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await remove(payload);
    const { state, message, ...data } = response.data;
    if (state === 'success') {
      dispatch(update(data));
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
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
    const response = await edit(payload);
    const { state, message, ...data } = response.data;
    if (state === 'success') {
      dispatch(update(data));
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
  } catch (e) {
    console.log(e);
  }
};
