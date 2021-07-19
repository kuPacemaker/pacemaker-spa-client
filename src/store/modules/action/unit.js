import { update, update_question, pending, success } from '../creators/unit';

import { makePaper } from 'common/paper/make-paper';
import { fetch } from 'api/unit';
import { generateQuestion, markPaper } from 'api/paper';
import { Logger } from '../../utils/logger/debugger';
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
    Logger(e);
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
    Logger(response);
    const passages = response.data.passages;
    const nouns = response.data.nouns;
    const qaSets = [];
    passages.forEach((passage) => {
      qaSets.push(...passage.aqset);
    });
    const paper = makePaper(qaSets, nouns);
    Logger(paper);
    dispatch(update_question(paper));

    if (callbackHandler) callbackHandler();
  } catch (e) {
    Logger(e);
  }
};

/**
 *
 * @param {token, document} payload
 * @param {*} historyHandler
 */
export const makeReservation =
  (payload, callbackHandler) => async (dispatch) => {
    try {
      Logger(payload);
      Logger('Make Reservation!!');
      if (callbackHandler) callbackHandler();
    } catch (e) {
      Logger(e);
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
    if (callbackHandler) callbackHandler();
  } catch (e) {
    Logger(e);
  }
};

export default { getUnit, makeQuestion, submitPaper };
