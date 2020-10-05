import { update } from '../creators/newspeed';
import { fetch } from '../../../api/newspeed';

export const updateNewspeed = (data) => (dispatch) => {
  dispatch(update(data));
}

export const fetchNewspeed = () => async (dispatch) => {
  try {
    const data = await fetch();

    dispatch(update(data))
  } catch (e) {
    console.log(e)
  }
}
