import { axios } from 'common/api-wrapper';
import { app } from 'common/server-path';

const paper = {};
paper['generate'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.generateQuestion
    : app.paper.generateQuestion();
paper['verify'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.verifyQuestion
    : app.paper.verifyQuestion();
paper['reservation'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.makeReservation
    : app.paper.makeReservation();

paper['submit'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.submitPaper
    : app.paper.submitPaper();

/**
 *
 * @param {token, unit} payload
 */
export const generateQuestion = async (payload) => {
  return await axios.post(paper.generate, {
    token: payload.token,
    unit_id: payload.unit,
  });
};
/**
 *
 * @param {token, unit, removed} payload
 */
export const verifyQuestion = async (payload) => {
  return await axios.post(paper.verify, {
    token: payload.token,
    unit_id: payload.unit,
    pair_ids: payload.removed,
  });
};
/**
 *
 * @param {token, unit} payload
 */
export const makeReservation = async (payload) => {
  return await axios.post(paper.reservation, {
    token: payload.token,
    unit_id: payload.unit,
  });
};

/**
 *
 * @param {token, unit, answers} payload
 */
export const submitPaper = async (payload) => {
  return await axios.post(paper.submit, {
    token: payload.token,
    unit_id: payload.unit,
    pairs: payload.answers,
  });
};
