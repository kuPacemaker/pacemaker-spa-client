import { update } from '../creators/board';
import { create, enter } from 'api/channel';

/**
 *
 * @param {token, title, desc, imageType} payload
 */
export const createChannel = (payload) => async (dispatch) => {
  try {
    const response = await create(payload);

    console.log(response);
    dispatch(update(response.data));
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

export default { createChannel, enterChannel };
