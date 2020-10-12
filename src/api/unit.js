const dummy = {
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
      id: 'asd/mosquitoes',
      visible: true,
      title: 'How to reduce harmful mosquitoes.',
      body:
        'A controversial plan is moving ahead to release genetically modified mosquitoes into the Florida Keys. More than 750,000 of the insects are set to be introduced there. Why? The aedes aegypti mosquito can carry dangerous diseases like the Zika virus, Dengue fever and yellow fever. Officials are looking for new ways to kill of these insects without using pesticides and genetically modified mosquitoes might be a way to do this. Only female mosquitoes bite people. The altered insects that are set to be released in Florida are male. They`ve been modified so that the female offspring they produce will die before they hatch from their eggs and grow big enough to bite people. And the company that developed these GMO mosquitoes say they`ve been very successful in controlling mosquito populations in Panama, Brazil and the Cayman Islands.',
    },
    paper: {
      isStart: false,
      isEnd: false,
      questions: [],
    },
  },
};

let testData = {
  id: 'fzf(ykBAqA~R:b!$18%F:c(oq9Lme"',
  title: 'Reviews of Student News',
  detail: 'Wed. 15:00~18:00',
  leader: 'Lumy Kelvin',
  code: 'XDWQAS221',
  image: 0,
  units: [
    {
      id: 1,
      index: 1,
      title: '2020 Election',
      state: {
        hasDocument: true,
        hasPaper: true,
        startQuiz: true,
        endQuiz: true,
      },
    },
    {
      id: 2,
      index: 2,
      title: 'Mosquitoes',
      state: {
        hasDocument: true,
        hasPaper: false,
        startQuiz: false,
        endQuiz: false,
      },
    },
    {
      id: 3,
      index: 3,
      title: 'Food and Drink',
      state: {
        hasDocument: false,
        hasPaper: false,
        startQuiz: false,
        endQuiz: false,
      },
    },
    {
      id: 4,
      index: 4,
      title: 'Architecture',
      state: {
        hasDocument: false,
        hasPaper: false,
        startQuiz: false,
        endQuiz: false,
      },
    },
    {
      id: 5,
      index: 5,
      title: 'Impact Your World',
      state: {
        hasDocument: false,
        hasPaper: false,
        startQuiz: false,
        endQuiz: false,
      },
    },
  ],
  runners: [
    'AA',
    'BB',
    'CC',
    'DD',
    'AA',
    'BB',
    'CC',
    'DD',
    'AA',
    'BB',
    'CC',
    'DD',
  ],
};

// FIXME: 추후 대체될 것
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 *
 * @param {token, channel, unit} payload
 */
// FIXME: 추후 대체될 것
export const fetch = async (payload) => {
  await sleep(250);

  return new Promise((resolve) => resolve(dummy));
};

let id = 5;
/**
 *
 * @param {token, channel, index, title} payload
 */
export const create = async (payload) => {
  await sleep(250);

  testData = {
    ...testData,
    units: testData.units.concat({
      id: id + 1,
      index: payload.index,
      title: payload.title,
      state: {
        hasDocument: false,
        hasPaper: false,
        startQuiz: false,
        endQuiz: false,
      },
    }),
  };
  return new Promise((resolve) => resolve(testData));
};

// FIXME: 실제 서버와 통신하는 부분

// export const fetch = async (payload) => {
//   return await axios.post(`~~`, payload)
// }

// export const create = async (payload) => {
//   return await axios.post(`~~`, payload);
// };
