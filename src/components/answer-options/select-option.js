import React from 'react';
import PropTypes from 'prop-types';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SelectOption = ({value, answerOptions, onChangeAnswer}) => (
  <Select
    className='select-option'
    value={value}
    onChange={onChangeAnswer}>
    {answerOptions && answerOptions.map((option, index) => <MenuItem key={index} value={option}>{option}</MenuItem>)}
  </Select>
);

export default SelectOption;

SelectOption.propTypes = {
  value: PropTypes.string,
  answerOptions: PropTypes.array,
  onChangeAnswer: PropTypes.func
};

SelectOption.defaultProps = {
  value: ''
};