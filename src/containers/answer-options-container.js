import {connect} from 'react-redux';
import AnswerOptions from '../components/answer-options/answer-options';

const mapStateToProps = state => ({
  questions: state.survey.questions,
  currentQuestionIndex: state.survey.currentQuestionIndex,
  userAnswers: state.survey.userAnswers,
});

export default connect(mapStateToProps)(AnswerOptions);