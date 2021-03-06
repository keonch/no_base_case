import merge from 'lodash/merge';
import { RECEIVE_QUESTION_VOTE } from '../actions/vote_actions';
import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION
} from '../actions/question_actions';

const questionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, oldState, action.questions);
    case RECEIVE_QUESTION:
      return merge({}, action.question);
    case RECEIVE_QUESTION_VOTE:
      return merge({}, oldState, action.question);
    case REMOVE_QUESTION:
      const newState = merge({}, oldState);
      delete newState[action.questionId];
      return newState;
    default:
      return oldState;
  }
};

export default questionsReducer;
