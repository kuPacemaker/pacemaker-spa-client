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
    if (state !== 'success') return;
    dispatch(update(board.leader, board.runner));
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, code} payload
 */
export const enterChannel = (payload) => async (dispatch) => {
  try {
    const response = await enter(payload);
    const { state, ...data } = response.data;
    if (state !== 'success') return;
    dispatch(update(data.leader, data.runner));
  } catch (e) {
    console.log(e);
  }
};

export default { createChannel, enterChannel };
