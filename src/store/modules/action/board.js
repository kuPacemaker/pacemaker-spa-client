import { update } from '../creators/board';
import { fetch } from 'api/board';
import { create, enter } from 'api/channel';

export const getBoard = (payload) => async (dispatch) => {
  try {
    const data = await fetch();

    dispatch(update(data));
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
    const data = await create(payload);

    // 최신화된 데이터를 리덕스 스토어에 반영
    dispatch(update(data));
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
    const data = await enter(payload);

    // 최신화된 데이터를 리덕스 스토어에 반영
    dispatch(update(data));
  } catch (e) {
    console.log(e);
  }
};

export default { getBoard, createChannel, enterChannel };
