import axios from 'axios';
// import { createAction } from 'redux-actions';
import { pending, success, failure } from '../creators/post';
// import { GET_POST } from '../type/post';

const getPostAPI = (postId) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

export const getPost = (postId) => (dispatch) => {
  dispatch(pending());
  return getPostAPI(postId)
    .then((response) => {
      dispatch(success(response));
    })
    .catch((error) => {
      dispatch(failure(error));
    });
};
