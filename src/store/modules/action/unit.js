import { update, update_question, pending, success } from '../creators/unit';

import { fetch } from 'api/unit';
import {
  generateQuestion,
  verifyQuestion as verify,
  makeReservation as reservation,
  submitPaper as submit,
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
    if (state !== 'success') return;
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
    if (state !== 'success') return;
    console.log(data);
    dispatch(update_question(data));
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
    console.log(payload);
    const response = await verify(payload);
    const { state, ...data } = response.data;
    if (state !== 'success') return;
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
    const response = await reservation(payload);
    const { state, ...data } = response.data;
    if (state !== 'success') return;
    if (callbackHandler) callbackHandler(data);
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
    console.log(payload);
    // const response = await markPaper(payload);
    // const { state, ...data } = response.data;
    // if (state !== 'success') return;
    // console.log(data);
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
