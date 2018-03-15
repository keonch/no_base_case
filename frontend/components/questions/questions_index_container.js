import { connect } from 'react-redux';
import {
  fetchAllQuestions,
  fetchAllQuestionsFront
} from '../../actions/question_actions';
import QuestionsIndex from './questions_index';

const msp = (state, {frontPage}) => {
  const questions = Object.values(state.entities.questions);
  const users = Object.assign({}, state.entities.users);
  return ({
    questions,
    users,
    frontPage
  });
};

const mdp = dispatch => {
  return ({
    fetchAllQuestions: () => dispatch(fetchAllQuestions()),
    fetchAllQuestionsFront: () => dispatch(fetchAllQuestionsFront())
  });
};

export default connect(msp, mdp)(QuestionsIndex);
