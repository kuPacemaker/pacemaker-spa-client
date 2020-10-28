import { axios } from 'common/api-wrapper';

// FIXME: 추후 대체될 것
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// export const generateQuestion = async (payload) => {
//   await sleep(250);
//   console.log(payload);
//   return new Promise((resolve) => resolve());
// };

// import { gqqa } from 'common/server-path';
// const server = {};
// server['qg'] =
//   process.env.NODE_ENV === 'development'
//     ? gqqa.api + gqqa.qg
//     : gqqa.generateQuestion();

// // FIXME: 추후 대체될 것
// export const generateQuestion = async (payload) => {
//   return await axios.post(server.qg, {
//     bkd: payload.body,
//   });
// };

// export const markPaper = async (payload) => {
//   return new Promise((resolve) => resolve());
// };

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

export const generateQuestion = async (payload) => {
  return await axios.post(paper.generate, payload);
};

export const verifyQuestion = async (payload) => {
  return await axios.post(paper.verify, payload);
};

export const makeReservation = async (payload) => {
  return await axios.post(paper.reservation, payload);
};

export const markPaper = async (payload) => {
  return await axios.post(paper.submit, payload);
};
