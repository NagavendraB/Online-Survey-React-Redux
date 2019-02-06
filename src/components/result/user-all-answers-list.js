import React from 'react';
import PropTypes from 'prop-types';

import UserAllAnswersListItem from './user-all-answers-list-item';

const UserAllAnswersList = ({userAnswers}) => userAnswers && userAnswers.map((item, index) => <UserAllAnswersListItem key={index} question={item.question} answer={item.answer} />);

export default UserAllAnswersList;

UserAllAnswersList.propTypes = {
  userAnswers: PropTypes.array
};