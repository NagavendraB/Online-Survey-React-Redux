import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {OnlineSurvey} from '../components';
import {fetchQuestions, storeUserAnswer, onClickNext, onClickPrevious} from '../actions';

class OnlineSurveyContainer extends PureComponent {
  static defaultProps  = {
    questions: []
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  onClickNext = () => {
    this.props.onClickNext();
  }

  onClickPrevious = () => {
    this.props.onClickPrevious();
  }

  onChangeAnswer = (event) => {
    const {questions, currentQuestionIndex, storeUserAnswer} = this.props;

    storeUserAnswer({
      item: {
        question: questions[currentQuestionIndex].question,
        answer: event.target.value
      },
      index: currentQuestionIndex
    });
  } 

  render() {
    const {questions, isFetchingData, userAnswers, currentQuestionIndex} = this.props;

    return (
      <React.Fragment>
        {isFetchingData ? 'Loading . . .' : 
          <OnlineSurvey 
            questions={questions} 
            userAnswers={userAnswers}
            currentQuestionIndex={currentQuestionIndex}
            onChangeAnswer={this.onChangeAnswer}
            onClickNext={this.onClickNext}
            onClickPrevious={this.onClickPrevious} />}
      </React.Fragment>
    );
  }  
};

const mapStateToProps = state => ({
  questions: state.survey.questions,
  currentQuestionIndex: state.survey.currentQuestionIndex,
  isFetchingData: state.survey.isFetchingData
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    fetchQuestions,
    storeUserAnswer,
    onClickNext,
    onClickPrevious
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(OnlineSurveyContainer);

OnlineSurveyContainer.propTypes = {
  questions: PropTypes.array,
  userAnswers: PropTypes.array,
  currentQuestionIndex: PropTypes.number,
  isFetchingData: PropTypes.boolean
};
