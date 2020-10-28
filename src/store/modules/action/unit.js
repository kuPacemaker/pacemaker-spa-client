import { update, update_question, pending, success } from '../creators/unit';
import { makePaper } from 'common/paper/make-paper';

import { fetch } from 'api/unit';
import {
  generateQuestion,
  verifyQuestion as verify,
  makeReservation as reservation,
  markPaper,
} from 'api/paper';

// import { generateQuestion, markPaper } from 'api/paper';

/**
 *
 * @param {token, channel, unit} payload
 * @param {*} historyHandler
 */
export const getUnit = (payload, callbackHandler) => async (dispatch) => {
  try {
    dispatch(pending());
    const response = await fetch(payload);
    const { state, ...data } = response.data;
    console.log(data);
    dispatch(success());
    dispatch(update(data));

    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, unit, document} payload
 * @param {*} historyHandler
 */
export const makeQuestion = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await generateQuestion(payload);
    const { state, ...data } = response.data;
    dispatch(update_question(data));
    // console.log(response);
    // const passages = response.data.passages;
    // const nouns = response.data.nouns;
    // const qaSets = [];
    // passages.forEach((passage) => {
    //   qaSets.push(...passage.aqset);
    // });
    // const paper = makePaper(qaSets, nouns);
    // console.log(paper);
    // dispatch(update_question(paper));

    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, unit ,removed} payload
 * @param {*} historyHandler
 */
export const verifyQuestion = (payload, callbackHandler) => async (
  dispatch
) => {
  try {
    console.log('Verify Question!!');
    const response = await verify(payload);
    const { state, ...data } = response.data;
    console.log(payload);
    console.log(data);
    dispatch(update_question(data));
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
export const makeReservation = (payload, callbackHandler) => async (
  dispatch
) => {
  try {
    console.log('Make Reservation!!');
    const response = await reservation(payload);
    const { state, ...data } = response.data;
    console.log(data);
    console.log(payload);

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
    const response = await markPaper(payload);
    const { state, ...data } = response.data;
    console.log(data);
    // dispatch(update());
    // historyHandler();
    if (callbackHandler) callbackHandler();
  } catch (e) {
    console.log(e);
  }
};

// export default {
//   getUnit,
//   makeQuestion,
//   verifyQuestion,
//   makeReservation,
//   submitPaper,
// };
