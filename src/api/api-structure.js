import axios from 'axios';

/**
 * WARN: 특별히 객체를 설명하지 않는 경우에는 해당 이름의 id를 의미한다.a1
 *      ex) channel -> channel_id, unit -> unit_id
 */

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

//Refresh Api
/**
 * 60초~300초마다 계속 호출되면서 화면을 새로고침하는 함수.
 * @param {token} payload
 * @return {
              newspeed: [
                      newspeed_obj,...
                    ] << 새로운 문제의 생성이나 시험지 도착이 Newpeed로 들어와야 함.
              board: {
                      leader: [
                              channel_obj,
                              ...
                            ]
                      runner: [
                              channel_obj,
                              ...
                      ]
                    }
          }
 */
export const refresh = async (payload) => {
  return await axios.post(`~~`, payload);
};

//Newspeed Api
/**
 *
 * @param {token} payload
 * @return [
            {
                type: newspeed_type,
                title: newspeed_title,
                body: newspeed_body,
                to: newspeed_direction,
                arg: direction_argument,
            },
            ...
        ]
 */
export const fetch = async (payload) => {
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
                    image: channel_image_type,
                },
                ...
            ],
            runner: [
                {
                    id: channel_id,
                    title: channel_title,
                    detail: channel_detail,
                    image: channel_image_type,
                },
                ...
            ],
        }
 */
export const fetchBoard = async (payload) => {
  return await axios.post(`~~`, payload);
};

//Channel Api

/**
 *
 * @param {token, channelId} payload
 * @return {
                id: channel_id,
                title: channel_title,
                detail: channel_detail,
                leader: channel_leader,
                code:  channel_access_code,
                image: channel_image,
                units: [
                    {
                        id: unit_id,
                        index: unit_index,
                        title: unit_title,
                        state: {
                                hasDocument: this unit has document?,
                                hasPaper: this unit make paper?,
                                startQuiz: this unit deploy quiz?,
                                endQuiz: the paper is end?,
                        },
                    },
                    ...
                ],
                runners: [
                    runner_name,
                    ...
                ],
            }
 */
export const fetchChannel = async () => {
  return await axios.get(`~~`);
};

/**
 * 새로운 채널을 생성
 * 채널 생성은 보드에서 이루어지기 때문에 보드 데이터를 새로 받아옴
 * @param {token, title, detail, image} payload
 * @return {
            leader: [
                { 
                    id: channel_id,
                    title: channel_title,
                    detail: channel_detail,
                    image: channel_image_type,
                },
                <New Channel>,
                ...
            ],
            runner: [
                {
                    id: channel_id,
                    title: channel_title,
                    detail: channel_detail,
                    image: channel_image_type,
                },
                ...
            ],
        }
 */
export const createChannel = async (payload) => {
  return await axios.post(`~~`, payload);
};

/**
 * 존재하는 채널에 참여함.
 * 채널 생성은 보드에서 이루어지기 때문에 보드 데이터를 새로 받아옴
 * @param {token, accessCode} payload
 * @return {
            leader: [
                { 
                    id: channel_id,
                    title: channel_title,
                    detail: channel_detail,
                    image: channel_image_type,
                },
                ...
            ],
            runner: [
                {
                    id: channel_id,
                    title: channel_title,
                    detail: channel_detail,
                    image: channel_image_type,
                },
                <New Channel>,
                ...
            ],
        }
 */
export const enterChannel = async (payload) => {
  return await axios.post(`~~`, payload);
};

//Unit Api
/**
 * 유닛의 데이터를 요청
 * @param {token, channel, unit} payload
 * @return {
            channel: {
                id: channel_id,
                title: channel_title,
                detail: channel_detail,
                code: channel_access_code,
            },
            unit: {
                id: unit_id,
                index: unit_index,
                title: unit_title,
                isOpened: Is unit opened?,
                document: {
                    id: document_id,
                    visible: Is document visible?,
                    title: document_title,
                    body: document_body,
                },
                paper: {
                    isStart: Is paper started?,
                    isEnd: Is paper ended?,
                    questions: [
                        {
                            id: quiz_id,
                            quiz: quiz_body,
                            answer: answer,
                            user_answer: blank,
                            answer_set: answer_set_join_with_'/',
                            verified: true ,
                        },
                        ...
                    ],
                },
            },
        }
 */
export const fetchUnit = async (payload) => {
  return await axios.post(`~~`, payload);
};

/**
 * 새 유닛을 생성
 * 채널 데이터에 추가되므로 채널 데이터를 요청함.
 * @param {token, channel, index, title} payload
 * @return {
                id: channel_id,
                title: channel_title,
                detail: channel_detail,
                leader: channel_leader,
                code:  channel_access_code,
                image: channel_image,
                units: [
                    {
                        id: unit_id,
                        index: unit_index,
                        title: unit_title,
                        state: {
                                hasDocument: this unit has document?,
                                hasPaper: this unit make paper?,
                                startQuiz: this unit deploy quiz?,
                                endQuiz: the paper is end?,
                        },
                    },
                    <New Unit>,
                    ...
                ],
                runners: [
                    runner_name,
                    ...
                ],
            }
 */
export const createUnit = async (payload) => {
  return await axios.post(`~~`, payload);
};

//Document Api
/**
 * 이 API는 현재 사용되지 않음. Unit과 연관되지 않은 단독 문서가 존재할때 사용됨.
 * @param {token, channel, unit, ...} payload
 */
export const fetchDocument = async (payload) => {
  return await axios.post(`~~`, payload);
};

/**
 * 새로운 문서 객체를 생성함. document_id를 생성하고 document 객체를 반환
 * @param {token, channel, unit} payload
 * @return {
                id: document_id,
                visible: true,
                title: blank,
                body: blank,
            } << document object
 */
export const createDocument = async (payload) => {
  return await axios.post(`~~`, payload);
};

/**
 * 존재하는 문서 객체를 수정함. document_id는 document객체 내부에 존재.
 * @param {token, document} payload
 * @document_form {
                    id: document_id,
                    visible: Is document visible?,
                    title: document_title,
                    body: document_body,
                } << document object
 */
export const updateDocument = async (payload) => {
  return await axios.post(`~~`, payload);
};

//QG Api Call
/**
 * QG서버를 통한 QG를 요청함. 아래 channel, unit, document는 전부 id
 * @param {token, channel, unit, document} payload
 * @return {
            isStart: Is paper started?,
            isEnd: Is paper ended?,
            questions: [
                {
                    id: quiz_id,
                    quiz: quiz_body,
                    answer: answer,
                    user_answer: blank,
                    answer_set: answer_set_join_with_'/',
                    verified: true ,
                },
                ...
            ],
        }
 */
export const generateQuestion = async (payload) => {
  return await axios.post('/restful/qg', payload);
};

/**
 * 삭제가 될 문제들의 id를 전송.
 * 삭제할 문제가 삭제된 새로운 Paper 객체를 반환.
 * @param {token, channel, unit, removeQuestions} payload
 * @removeQuestions [question_id, ...] 삭제할 퀴즈 id
 * @return {
            isStart: Is paper started?,
            isEnd: Is paper ended?,
            questions: [
                {
                    id: quiz_id,
                    quiz: quiz_body,
                    answer: answer,
                    user_answer: blank,
                    answer_set: answer_set_join_with_'/',
                    verified: true ,
                },
                ...
            ],
        } << Paper Object
 */
export const markPaper = async (payload) => {
  return await axios.post(`~~`, payload);
};
