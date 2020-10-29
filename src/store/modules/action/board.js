import { update } from '../creators/board';
import { create, remove, enter, exit } from 'api/channel';

/**
 *
 * @param {token, title, desc, imageType} payload
 */
export const createChannel = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await create(payload);
    const { state, message, ...board } = response.data;
    if (state === 'success') {
      dispatch(update(board.leader, board.runner));
    }
    if (callbackHandler) callbackHandler(state === 'success');
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, channel } payload
 */
export const removeChannel = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await remove(payload);
    const { state, message, ...board } = response.data;
    if (state === 'success') {
      dispatch(update(board.leader, board.runner));
    }
    if (callbackHandler) callbackHandler(state === 'success');
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, channel } payload
 */
export const exitChannel = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await exit(payload);
    const { state, message, ...board } = response.data;
    if (state === 'success') {
      dispatch(update(board.leader, board.runner));
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, code} payload
 */
export const enterChannel = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await enter(payload);
    const { state, message, ...data } = response.data;
    if (state === 'success') {
      dispatch(update(data.leader, data.runner));
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
  } catch (e) {
    console.log(e);
  }
};

export default { createChannel, enterChannel };
