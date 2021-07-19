export const app = {
  base: '',
};

export const gqqa = {
  base: 'https://117.16.137.22/',
  api: '/restful/',
  qg: 'qg/',
  qa: 'qa/',
  generateQuestion: () => gqqa.base + gqqa.api + gqqa.qg,
  answerQuestion: () => gqqa.base + gqqa.api + gqqa.qa,
};
