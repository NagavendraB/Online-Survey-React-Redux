import React from 'react';
import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const RadioButtonsOption = ({value, answerOptions, onChangeAnswer}) => (
  <FormControl component='fieldset'>
    <RadioGroup
      aria-label='Gender'
      name='gender1'
      value={value}
      onChange={onChangeAnswer}>
      {answerOptions && answerOptions.map((option, index) => <FormControlLabel key={index} value={option} control={<Radio />} label={option} />)}
    </RadioGroup>
  </FormControl>
);

export default RadioButtonsOption;

RadioButtonsOption.propTypes = {
  value: PropTypes.string,
  answerOptions: PropTypes.array,
  onChangeAnswer: PropTypes.func
};