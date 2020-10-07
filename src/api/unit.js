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
      id: 'asd/mosquitoes',
      visible: true,
      title: 'How to reduce harmful mosquitoes.',
      body:
        'A controversial plan is moving ahead to release genetically modified mosquitoes into the Florida Keys. More than 750,000 of the insects are set to be introduced there. Why? The aedes aegypti mosquito can carry dangerous diseases like the Zika virus, Dengue fever and yellow fever. Officials are looking for new ways to kill of these insects without using pesticides and genetically modified mosquitoes might be a way to do this. Only female mosquitoes bite people. The altered insects that are set to be released in Florida are male. They`ve been modified so that the female offspring they produce will die before they hatch from their eggs and grow big enough to bite people. And the company that developed these GMO mosquitoes say they`ve been very successful in controlling mosquito populations in Panama, Brazil and the Cayman Islands.',
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

// FIXME: 추후 대체될 것
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// FIXME: 추후 대체될 것
export const fetch = async () => {
  await sleep(250);

  return new Promise((resolve) => resolve(dummy));
};

// FIXME: 추후 대체될 것
// export const fetch = async () => {
//   return await axios.post(`~~`, info)
// }
