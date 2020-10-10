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
      isStart: true,
      isEnd: false,
      questions: [
        {
          id: 0,
          quiz:
            'What is being put into place to release genetically modified mosquitoes into the Florida Keys?',
          answer: 'AA',
          user_answer: '',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 1,
          quiz: 'Who can only female mosquitoes bite ?',
          answer: 'AA',
          user_answer: '',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 2,
          quiz:
            'What type of mosquitoes were developed to control the mosquito population in Panama?',
          answer: 'GMO mosquitoes',
          user_answer: '',
          answer_set: 'Zika virus/GMO mosquitoes/Florida/Dengue fever',
          verified: true,
        },
        {
          id: 3,
          quiz: 'What kind of insects are being released in Florida?',
          answer: 'AA',
          user_answer: '',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 4,
          quiz:
            'Where have the company that developed GMO mosquitoes been successful in controlling mosquito populations?',
          answer: 'AA',
          user_answer: '',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 5,
          quiz:
            'What is being put into place to release genetically modified mosquitoes into the Florida Keys?',
          answer: 'AA',
          user_answer: '',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 6,
          quiz: 'Who can only female mosquitoes bite ?',
          answer: 'AA',
          user_answer: '',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 7,
          quiz:
            'What type of mosquitoes were developed to control the mosquito population in Panama?',
          answer: 'GMO mosquitoes',
          user_answer: '',
          answer_set: 'Zika virus/GMO mosquitoes/Florida/Dengue fever',
          verified: true,
        },
        {
          id: 8,
          quiz: 'What kind of insects are being released in Florida?',
          answer: 'AA',
          user_answer: '',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 9,
          quiz:
            'Where have the company that developed GMO mosquitoes been successful in controlling mosquito populations?',
          answer: 'AA',
          user_answer: '',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
      ],
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
