import { update } from '../creators/board';
import { fetch } from '../../../api/board';

export const getBoard = (payload) => async (dispatch) => {
  try {
    const boardData = await fetch();

    dispatch(update(boardData));
  } catch (e) {
    console.log(e);
  }
};

export default { getBoard };
