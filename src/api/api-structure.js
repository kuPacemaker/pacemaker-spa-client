import axios from 'axios';

// Account Api
/**
 * @param   {id, pw} payload
 * @return  { 
              id:    user_email,
              name:  user_name,
              type:  user_type,
              token: token,
            } 
 */
export const apiSignIn = async (payload) => {
  return await axios.post(`~~`, payload);
};

/**
 * @param   { token } payload
 * @return  { 
              message: response
            } 
 */
export const apiSignOut = async (payload) => {
  return await axios.post(`~~`, payload);
};

/**
 * @param   {id, name, pw } payload
 * @return  { 
              message: response
            } 
 */

export const apiSignUp = async (payload) => {
  return await axios.post(`~~`, payload);
};

/**
 * @param   {id, name, pw, pw_new} payload
 * @return  { 
              message: response
            } 
 */
export const apiModifiyAccount = async (payload) => {
  return await axios.post(`~~`, payload);
};

//Board Api
/**
 * 현재 계정의 채널 보드 정보를 가져옴
 * @param {token} payload
 * @return {
            leader: [
                { 
                    id: channel_id,
                    title: channel_title,
                    detail: channel_detail,
                    imgType: channel_image_type,
                },
                ...
            ],
            runner: [
                {
                    id: channel_id,
                    title: channel_title,
                    detail: channel_detail,
                    imgType: channel_image_type,
                },
                ...
            ],
        }
 */
export const fetch = async (payload) => {
  return await axios.post(`~~`, payload);
};

/**
 * 새로운 채널을 생성
 * @param {token, title, detail, imgType} payload
 * @return {
            leader: [
                { 
                    id: channel_id,
                    title: channel_title,
                    detail: channel_detail,
                    imgType: channel_image_type,
                },
                <New Channel>,
                ...
            ],
            runner: [
                {
                    id: channel_id,
                    title: channel_title,
                    detail: channel_detail,
                    imgType: channel_image_type,
                },
                ...
            ],
        }
 */
export const create = async (payload) => {
  return await axios.post(`~~`, payload);
};

/**
 * 존재하는 채널에 참여함.
 * @param {token, accessCode} payload
 * @return {
            leader: [
                { 
                    id: channel_id,
                    title: channel_title,
                    detail: channel_detail,
                    imgType: channel_image_type,
                },
                ...
            ],
            runner: [
                {
                    id: channel_id,
                    title: channel_title,
                    detail: channel_detail,
                    imgType: channel_image_type,
                },
                <New Channel>,
                ...
            ],
        }
 */
export const enter = async (payload) => {
  return await axios.post(`~~`, payload);
};
