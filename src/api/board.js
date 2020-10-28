// const dummy = {
//   leader: [
//     {
//       id: 0,
//       title: 'Data Structure',
//       detail: 'Wed. 15:00~18:00',
//       image: 2,
//     },
//     {
//       id: 0,
//       title: 'Basic Programming',
//       detail: 'Wed. 15:00~18:00',
//       image: 1,
//     },
//     {
//       id: 0,
//       title: 'Reviews of Student News',
//       detail: 'When ever You Want!',
//       image: 7,
//     },
//     {
//       id: '3SgNy6]r{L',
//       title: 'Study of Genesis',
//       detail: 'When ever You Want!',
//       image: 0,
//     },
//   ],
//   runner: [
//     {
//       id: 0,
//       title: 'Basic Programming',
//       detail: 'When ever You Want!',
//       image: 2,
//     },
//     {
//       id: 0,
//       title: 'Algorithm',
//       detail: 'When ever You Want!',
//       image: 6,
//     },
//     {
//       id: 0,
//       title: 'Reviews of Student News',
//       detail: 'When ever You Want!',
//       image: 7,
//     },
//     {
//       id: '3SgNy6]r{L',
//       title: 'Study of Genesis',
//       detail: 'When ever You Want!',
//       image: 0,
//     },
//   ],
// };

// // FIXME: 추후 대체될 것
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// /**
//  *
//  * @param {token} payload
//  */
// // FIXME: 추후 대체될 것
// export const fetch = async (payload) => {
//   await sleep(250);

//   return new Promise((resolve) => resolve(dummy));
// };

import { axios } from 'common/api-wrapper';
import { app } from 'common/server-path';

const board = {};
board['request'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.requestBoard
    : app.board.request();

/**
 *
 * @param {token} payload
 */
export const fetch = async (payload) => {
  return await axios.post(board.request, payload);
};
