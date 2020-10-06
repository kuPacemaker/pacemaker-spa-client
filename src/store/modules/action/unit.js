import { update } from '../creators/unit';
import { fetch } from 'api/unit';

export const getUnit = (payload, historyHandler) => async (dispatch) => {
  // {token, channel, unit;}

  try {
    const unitData = await fetch();

    dispatch(update(unitData));

    historyHandler();
  } catch (e) {
    console.log(e);
  }
};

export default { getUnit };
