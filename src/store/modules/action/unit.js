import { update, update_question, pending, success } from '../creators/unit';

import { fetch } from 'api/unit';
import {
  generateQuestion,
  verifyQuestion as verify,
  makeReservation as reservation,
  submitPaper as submit,
} from 'api/paper';

/**
 *
 * @param {token, channel, unit} payload
 * @param {*} historyHandler
 */
export const getUnit = (payload, callbackHandler) => async (dispatch) => {
  try {
    dispatch(pending());
    const response = await fetch(payload);
    const { state, message, ...data } = response.data;
    if (state === 'success') {
      dispatch(success());
      dispatch(update(data));
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
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
    const { state, message, ...data } = response.data;
    if (state === 'success') {
      dispatch(update_question(data));
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
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
    const response = await verify(payload);
    const { state, message, ...data } = response.data;
    if (state === 'success') {
      dispatch(update_question(data));
    }
    if (callbackHandler) callbackHandler(state === 'success', message);
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
    const { state, message, ...data } = response.data;
    if (state === 'success') dispatch(update(data));
    if (callbackHandler) callbackHandler(state === 'success', message);
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {token, unit, answers} payload
 * @param {*} historyHandler
 */
export const submitPaper = (payload, callbackHandler) => async (dispatch) => {
  try {
    const response = await submit(payload);
    const { state, message } = response.data;
    if (state === 'success');
    if (callbackHandler) callbackHandler(state === 'success', message);
  } catch (e) {
    console.log(e);
  }
};
