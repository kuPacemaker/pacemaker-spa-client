const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

const shuffleArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const makeMultipleChoiceQuestions = (answer, question, nouns) => {
  const answers = [];
  answers.push(answer);
  while (answers.length < 4) {
    let i = getRandomInt(0, nouns.length);
    if (nouns[i] === answer) continue;
    answers.push(nouns[i]);
  }
  return {
    id: 0,
    quiz: question,
    answer: answer,
    user_answer: '',
    answer_set: shuffleArray(answers).join('/'),
    verified: false,
  };
};

export const makePaper = (aqset, nouns) => {
  aqset.forEach((aq) => {
    let temp = makeMultipleChoiceQuestions(aq[0], aq[1], nouns);
    console.log(temp);
  });
};

/*
   {
     id: 0,
     quiz:
       'What is being put into place to release genetically modified mosquitoes into the Florida Keys?',
     answer: 'AA',
     user_answer: '',
     answer_set: 'AA/BB/CC/DD',
     verified: true,
   },
*/
