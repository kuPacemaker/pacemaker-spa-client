// const testFeeds = [
//   {
//     type: 'SYSTEM_NOTICE',
//     title: 'NEW FUNCTION IS AVAILABLE',
//     body: 'Your Running Mate, Pacemaker Team',
//     arg: '',
//   },
//   {
//     type: 'PAPER_RECEIVE',
//     title: 'NEW QUIZ IS OPENED',
//     body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
//     arg: '',
//   },
//   {
//     type: 'QUESTION_GENERATION',
//     title: 'NEW QUESTIONS WERE RECEIVED',
//     body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
//     arg: '',
//   },
//   {
//     type: 'PAPER_FINISH',
//     title: 'EVERYONE FINISHED THE QUIZE',
//     body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
//     arg: '',
//   },
//   {
//     type: 'QUESTION_GENERATION',
//     title: 'NEW QUESTIONS WERE RECEIVED',
//     body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
//     arg: '',
//   },
//   {
//     type: 'SYSTEM_NOTICE',
//     title: 'NEW FUNCTION IS AVAILABLE',
//     body: 'Your Running Mate, Pacemaker Team',
//     arg: '',
//   },
//   {
//     type: 'PAPER_RECEIVE',
//     title: 'NEW QUIZ IS OPENED',
//     body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
//     arg: '',
//   },
//   {
//     type: 'PAPER_FINISH',
//     title: 'EVERYONE FINISHED THE QUIZE',
//     body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
//     arg: { channel: 0 },
//   },
//   {
//     type: 'QUESTION_GENERATION',
//     title: 'NEW QUESTIONS WERE RECEIVED',
//     body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
//     arg: { channel: 0, unit: 2 },
//   },
// ];

// // FIXME: 추후 대체될 것
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// /**
//  *
//  * @param { token } payload
//  */
// // FIXME: 추후 대체될 것
// export const fetch = async (payload) => {
//   await sleep(250);

//   return new Promise((resolve) => resolve(testFeeds));
// };
// import { axios } from 'common/api-wrapper';
// import { app } from 'common/server-path';

// const newsfeed = {};

// newsfeed['signin'] =
//   process.env.NODE_ENV === 'development'
//     ? app.api + app.signIn
//     : app.account.signin();

// /**
//  *
//  * @param { token } payload
//  */
// export const fetch = async (payload) => {
//   return await axios.post(`~~`, payload);
// };
