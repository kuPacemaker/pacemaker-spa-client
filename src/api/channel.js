const dummy = {
  leader: [
    {
      id: 0,
      title: 'Basic Programming',
      detail: 'Tue. 15:00~18:00',
      image: 0,
    },
    {
      id: 1,
      title: 'Data Structure',
      detail: 'Wed. 15:00~18:00',
      image: 2,
    },
    {
      id: 2,
      title: 'Basic Programming',
      detail: 'Wed. 15:00~18:00',
      image: 1,
    },
    {
      id: 3,
      title: 'Data Structure',
      detail: 'When ever You Want!',
      image: 4,
    },
  ],
  runner: [
    {
      id: 4,
      title: 'Basic Programming',
      detail: 'When ever You Want!',
      image: 2,
    },
    { id: 5, title: 'Algorithm', detail: 'When ever You Want!', image: 6 },
    {
      id: 6,
      title: 'Data Structure',
      detail: 'When ever You Want!',
      image: 7,
    },
    {
      id: 7,
      title: 'Basic Programming',
      detail: 'When ever You Want!',
      image: 4,
    },
  ],
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
 * @param {token, type, channel} payload
 */
// FIXME: 추후 대체될 것
export const fetch = async (payload) => {
  console.log(payload);
  await sleep(250);

  return new Promise((resolve) => resolve(testData));
};

// FIXME: 추후 요걸로 대체
// export const fetch = async () => {
//   return await axios.get(`~~`)
// }

// FIXME: for test
let id = 1000;

/**
 *
 * @param {token, title, detail, image} payload
 */
// FIXME: 추후 대체될 것
export const create = async (payload) => {
  dummy.leader = dummy.leader.concat({ id: id++, ...payload });
  await sleep(250);

  return new Promise((resolve) => resolve(dummy));
};

// FIXME: 추후 대체될 것
// export const create = async (payload) => {
//   return await axios.post(`~~`, data)
// }
/**
 *
 * @param {token, accessCode} payload
 */
export const enter = async (payload) => {
  console.log(payload);
  await sleep(250);

  return new Promise((resolve) => resolve(dummy));
};

// FIXME: 추후 대체될 것
// export const enter = async (payload) => {
//   return await axios.post(`~~`, payload)
// }
