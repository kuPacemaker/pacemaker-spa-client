import { update as updateNewspeed } from '../creators/newspeed';
import { update as updateBoard } from '../creators/board';

import { refresh as refreshData } from 'api/refresh';

export const refresh = (payload, callbackHandler) => async (dispatch) => {
  try {
    const data = await refreshData(payload);
    dispatch(updateNewspeed(data.newspeed));
    dispatch(updateBoard(data.board));
    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};
