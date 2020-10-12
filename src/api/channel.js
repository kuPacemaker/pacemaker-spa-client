let testData = {
  id: 'fzf(ykBAqA~R:b!$18%F:c(oq9Lme"',
  title: 'Reviews of Student News',
  detail: 'Wed. 15:00~18:00',
  owner: 'Lumy Kelvin',
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
 * @param {token, channelId} payload
 */
// FIXME: 추후 대체될 것
export const fetch = async (payload) => {
  await sleep(250);

  return new Promise((resolve) => resolve(testData));
};

// FIXME: 추후 요걸로 대체
// export const fetch = async () => {
//   return await axios.get(`~~`)
// }
