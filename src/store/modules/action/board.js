import { update } from '../creators/board';
import { create, enter } from 'api/channel';

/**
 *
 * @param {token, title, desc, imageType} payload
 */
export const createChannel = (payload) => async (dispatch) => {
  try {
    const response = await create(payload);
    const { state, ...board } = response.data;
    dispatch(update(board.leader, board.runner));
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, accessCode} payload
 */
export const enterChannel = (payload) => async (dispatch) => {
  try {
    const response = await enter(payload);
    const { state, ...data } = response.data;
    console.log(data);
    dispatch(update(data));
  } catch (e) {
    console.log(e);
  }
};

export default { createChannel, enterChannel };
