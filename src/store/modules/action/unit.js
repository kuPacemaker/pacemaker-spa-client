import { update, update_question, pending, success } from '../creators/unit';

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
    dispatch(pending());
    const unitData = await fetch(payload);
    dispatch(success());
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
