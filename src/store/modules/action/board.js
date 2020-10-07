import { update } from '../creators/board';
import { fetch, create, enter } from 'api/board';

export const getBoard = (payload) => async (dispatch) => {
  try {
    const boardData = await fetch();

    dispatch(update(boardData));
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, title, desc, imageType} payload
 */
export const createChannel = (payload) => async (dispatch) => {
  try {
    const boardData = await create(payload);

    // 최신화된 데이터를 리덕스 스토어에 반영
    dispatch(update(boardData));
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
    const boardData = await enter(payload);

    // 최신화된 데이터를 리덕스 스토어에 반영
    dispatch(update(boardData));
  } catch (e) {
    console.log(e);
  }
};

export default { getBoard, createChannel, enterChannel };
