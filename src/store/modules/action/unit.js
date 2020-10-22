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
    console.log('Fetch Unit!!', payload);
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
    console.log(response);
    const passages = response.data.passages;
    const nouns = [];
    const qaSets = [];
    passages.forEach((passage) => {
      nouns.push(...passage.nouns);
      qaSets.push(...passage.aqset);
    });
    const paper = makePaper(qaSets, nouns);
    dispatch(update_question(paper));

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
