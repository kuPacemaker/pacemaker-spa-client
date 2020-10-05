const testData = {
  id: '',
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
        isQuiz: false,
        active: true,
      },
    },
    {
      id: 2,
      index: 2,
      title: 'Mosquitoes',
      state: {
        isQuiz: true,
        active: true,
      },
    },
    {
      id: 3,
      index: 3,
      title: 'Food and Drink',
      state: {
        isQuiz: true,
        active: false,
      },
    },
    {
      id: 4,
      index: 4,
      title: 'Architecture',
      state: {
        isQuiz: true,
        active: false,
      },
    },
    {
      id: 5,
      index: 5,
      title: 'Impact Your World',
      state: {
        isQuiz: true,
        active: false,
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
const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))

// FIXME: 추후 대체될 것
export const fetch = async (data = testData) => {
  await sleep(250);

  return new Promise((resolve) => resolve(data))
}

// FIXME: 추후 요걸로 대체
// export const fetch = async () => {
//   return await axios.get(`~~`)
// }
