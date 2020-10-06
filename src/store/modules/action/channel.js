import { update } from '../creators/channel';
import { fetch } from 'api/channel';

export const updateChannel = (data) => (dispatch) => {
  dispatch(update(data));
};

export const fetchChannel = () => async (dispatch) => {
  try {
    const data = await fetch();

    dispatch(update(data));
  } catch (e) {
    console.log(e);
  }
};

// export const createChannel = (payload) => (dispatch) => {
//   console.log('Test');
// };
