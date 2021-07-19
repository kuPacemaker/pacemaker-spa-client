import { update as updateNewspeed } from '../creators/newspeed';
import { update as updateBoard } from '../creators/board';

import { refresh as refreshData } from 'api/refresh';
import { Logger } from '../../../utils/logger/debugger';

export const refresh = (payload, callbackHandler) => async (dispatch) => {
  try {
    const data = await refreshData(payload);
    dispatch(updateNewspeed(data.newspeed));
    dispatch(updateBoard(data.board));
    if (callbackHandler) callbackHandler();
  } catch (e) {
    Logger(e);
  }
};
