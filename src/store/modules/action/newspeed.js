import { update } from '../creators/newspeed';
import { fetch } from 'api/newspeed';
import { Logger } from '../../../utils/logger/debugger';

export const updateNewspeed = (data) => (dispatch) => {
  dispatch(update(data));
};

export const fetchNewspeed = () => async (dispatch) => {
  try {
    const data = await fetch();

    dispatch(update(data));
  } catch (e) {
    Logger(e);
  }
};
