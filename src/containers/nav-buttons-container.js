import {connect} from 'react-redux';
import NavButtons from '../components/nav-buttons';

const mapStateToProps = state => ({
  userAnswers: state.survey.userAnswers,
  currentQuestionIndex: state.survey.currentQuestionIndex
});

export default connect(mapStateToProps)(NavButtons);