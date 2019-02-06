import {connect} from 'react-redux';
import Result from '../components/result/result';

const mapStateToProps = state => ({
  userAnswers: state.survey.userAnswers
});

export default connect(mapStateToProps)(Result);