import { update, update_question } from '../creators/unit';

import { makePaper } from 'common/paper/make-paper';
import { fetch } from 'api/unit';
import { generateQuestion, markPaper } from 'api/paper';

/**
 *
 * @param {token, channel, unit} payload
 * @param {*} historyHandler
 */
export const getUnit = (payload, callbackHandler) => async (dispatch) => {
  try {
    const unitData = await fetch();

    dispatch(update(unitData));

    if (callbackHandler) callbackHandler();
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
    const response = await generateQuestion(payload);
    const passages = response.data.passages[0];
    console.log(response.data.passages[0]);
    const paper = makePaper(passages.aqset, passages.nouns);
    console.log(paper);
    dispatch(update_question(paper));
    // historyHandler();
    if (callbackHandler) callbackHandler(true);
  } catch (e) {
    if (callbackHandler) callbackHandler(false);
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
    if (callbackHandler) callbackHandler(true);
  } catch (e) {
    if (callbackHandler) callbackHandler(false);
    console.log(e);
  }
};

export default { getUnit, makeQuestion, submitPaper };
