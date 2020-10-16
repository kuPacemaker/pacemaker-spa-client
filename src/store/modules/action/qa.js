import { update_question, update_answer } from '../creators/qa';
import { ask } from 'api/qa';

export const askQuestion = (payload) => async (dispatch) => {
  try {
    dispatch(update_question(payload.question));
    const response = await ask(payload);
    console.log(response);
    const answer = response.data.passages[0].aqset[0][0];
    console.log(answer);
    dispatch(update_answer(answer));
  } catch (e) {
    console.log(e);
  }
};
