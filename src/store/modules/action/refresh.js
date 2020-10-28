import { update as updateNewspeed } from '../creators/newspeed';
import { update as updateBoard } from '../creators/board';

import { refresh as refreshData } from 'api/refresh';

export const refresh = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await refreshData(payload);
    const { state, board } = response.data;
    if (state !== 'success') return;
    dispatch(updateNewspeed(board.newsfeed));
    dispatch(updateBoard(board.leader, board.runner));
    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};
