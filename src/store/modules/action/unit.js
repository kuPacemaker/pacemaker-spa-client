import { update } from '../creators/unit';
import { fetch } from 'api/unit';
import { generateQuestion, markPaper } from 'api/paper';

/**
 *
 * @param {token, channel, unit} payload
 * @param {*} historyHandler
 */
export const getUnit = (payload, historyHandler) => async (dispatch) => {
  try {
    const unitData = await fetch();

    dispatch(update(unitData));

    historyHandler();
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, document} payload
 * @param {*} historyHandler
 */
export const makeQuestion = (payload, callbackHandler) => async (dispatch) => {
  try {
    await generateQuestion(payload);
    // dispatch(update());
    // historyHandler();
    callbackHandler(true);
  } catch (e) {
    callbackHandler(false);
    console.log(e);
  }
};

/**
 *
 * @param {token, document} payload
 * @param {*} historyHandler
 */
export const submitPaper = (payload, callbackHandler) => async (dispatch) => {
  try {
    await markPaper(payload);
    // dispatch(update());
    // historyHandler();
    callbackHandler(true);
  } catch (e) {
    callbackHandler(false);
    console.log(e);
  }
};

export default { getUnit, makeQuestion };
