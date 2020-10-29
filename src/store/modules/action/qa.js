import { ask } from 'api/qa';

export const askQuestion = (payload, callbackHandler) => async (dispatch) => {
  try {
    // dispatch(update_question(payload.question));
    const response = await ask(payload);
    const data = response.data.passages[0].aqset[0][0];
    const answer = data.charAt(0).toUpperCase() + data.slice(1);
    // dispatch(update_answer(answer));
    if (callbackHandler) callbackHandler(answer);
  } catch (e) {
    console.log(e);
  }
};
