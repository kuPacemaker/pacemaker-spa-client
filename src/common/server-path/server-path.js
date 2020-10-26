export const app = {
  base: '',
};

export const gqqa = {
  base: 'http://117.16.136.170/',
  api: '/restful/',
  qg: '/restful/qg/',
  qa: '/restful/qa/',
  generateQuestion: () => gqqa.base + gqqa.qg,
  answerQuestion: () => gqqa.base + gqqa.qa,
};
