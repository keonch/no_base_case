import * as APIUtils from '../utils/answer_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const RECEIVE_ANSWER_ERRORS = 'RECEIVE_ANSWER_ERRORS';

const receiveAnswer = (payload) => {
  return ({
    type: RECEIVE_ANSWER,
    answer: payload.answer,
    user: payload.user
  });
};

const removeAnswer = (answerId) => {
  return ({
    type: REMOVE_ANSWER,
    answerId
  });
};

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ANSWER_ERRORS,
    errors
  });
};

export const fetchAnswer = (questionId, answerId) => (
  (dispatch) => (APIUtils.fetchAnswer(questionId, answerId).then(
    (payload) => (dispatch(receiveAnswer(payload))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  ))
);

export const postAnswer = (questionId, answer) => (
  (dispatch) => (APIUtils.postAnswer(questionId, answer).then(
    (payload) => (dispatch(receiveAnswer(payload))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  ))
);

export const deleteAnswer = (questionId, answerId) => (
  (dispatch) => (APIUtils.deleteAnswer(questionId, answerId).then(
    (answerId) => (dispatch(removeAnswer(answerId))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  ))
);

export const updateAnswer = (questionId, answerId, answer) => (
  (dispatch) => (APIUtils.updateAnswer(
    questionId,
    answerId,
    answer
  ).then(
    (questionId) => (questionId),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  ))
);
