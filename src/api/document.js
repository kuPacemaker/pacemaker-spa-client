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

// FIXME: 추후 대체될 것
// export const create = async () => {
//   return await axios.post(`~~`, info)
// }

/**
 *
 * @param {token, document} payload
 */
// FIXME: 추후 대체될 것
export const update = async (payload) => {
  await sleep(250);

  return new Promise((resolve) => resolve(payload.document));
};

// FIXME: 추후 대체될 것
// export const update = async () => {
//   return await axios.post(`~~`, info)
// }

export default {
  create,
  update,
};
