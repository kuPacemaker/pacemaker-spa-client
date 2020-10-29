import { update as updateNewsfeed } from '../creators/newsfeed';
import { update as updateBoard } from '../creators/board';

import { refresh as refreshData } from 'api/refresh';

export const refresh = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await refreshData(payload);
    const { state, message, board } = response.data;
    if (state === 'success') {
      dispatch(updateNewsfeed(board.newsfeed));
      dispatch(updateBoard(board.leader, board.runner));
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
  } catch (e) {
    console.log(e);
  }
};
