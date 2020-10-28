const dummy = {
  id: 'D',
  channel: {
    id: 0,
    title: 'Reviews of Student News',
    detail: 'Wed. 15:00~18:00',
    code: 'XDWQAS1',
  },
  unit: {
    id: 0,
    index: 2,
    title: 'Mosquitoes',
    isOpened: true,
    document: {
      id: '',
      visible: false,
      title: '',
      body: '',
    },
    paper: {
      isStart: false,
      isEnd: false,
      questions: [],
    },
  },
};

const documentForm = {
  id: 'asd/mosquitoes',
  visible: true,
  title: '',
  body: '',
};

// FIXME: 추후 대체될 것
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 *
 * @param {token, channel, unit, ...} payload
 */
// FIXME: 추후 대체될 것
export const fetch = async (payload) => {
  await sleep(250);

  return new Promise((resolve) => resolve(dummy));
};

// FIXME: 추후 대체될 것
// export const fetch = async () => {
//   return await axios.post(`~~`, info)
// }

// FIXME: 추후 대체될 것
/**
 *
 * @param {token, channel, unit} payload
 */
export const create = async (payload) => {
  await sleep(250);

  return new Promise((resolve) => resolve(documentForm));
};

/**
 *
 * @param {token, document} payload
 */
// FIXME: 추후 대체될 것
export const update = async (payload) => {
  await sleep(250);

  return new Promise((resolve) => resolve(payload.document));
};

// import { axios } from 'common/api-wrapper';
// import { app } from 'common/server-path';

// const bocuments = {};
// bocuments['create'] =
//   process.env.NODE_ENV === 'development'
//     ? app.api + app.createBKD
//     : app.documents.create();

// bocuments['update'] =
//   process.env.NODE_ENV === 'development'
//     ? app.api + app.editBKD
//     : app.documents.edit();

// /**
//  *
//  * @param {token, channel, unit} payload
//  */

// export const create = async (payload) => {
//   return await axios.post(bocuments.create, payload);
// };

// /**
//  *
//  * @param {token, document} payload
//  */

// export const update = async (payload) => {
//   return await axios.post(bocuments.update, payload);
// };

export default {
  create,
  update,
};
