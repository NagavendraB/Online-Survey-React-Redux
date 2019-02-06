import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import {
  RadioButtonsOption, 
  SelectOption
} from '..';

const AnswerOptions = ({questions, currentQuestionIndex, userAnswers, onChangeAnswer}) => {
  const optionType = questions[currentQuestionIndex].type;
  const answerOptions = questions[currentQuestionIndex].options;
  const userAnswer =  userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].answer;

  switch (optionType) {
    case 'TextInput': 
      return (
        <TextField
          value={userAnswer}
          margin='normal'
          onChange={onChangeAnswer} />)
    case 'Radio Button': 
      return (
        <RadioButtonsOption 
          value={userAnswer} 
          answerOptions={answerOptions} 
          onChangeAnswer={onChangeAnswer} />)
    case 'Select': 
      return (
        <SelectOption 
          value={userAnswer} 
          answerOptions={answerOptions}
          onChangeAnswer={onChangeAnswer} />)
    }
};

export default AnswerOptions;

AnswerOptions.propTypes = {
  questions: PropTypes.array,
  currentQuestionIndex: PropTypes.number,
  userAnswers: PropTypes.array,
  onChangeAnswer: PropTypes.func
};