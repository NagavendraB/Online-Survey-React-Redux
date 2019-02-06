import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const UserAllAnswersListItem = ({question, answer}) => (
  <div className='answer-list-item'>
    <Grid container spacing={16}>
      <Grid item xs container direction='column' spacing={16}>
        <Grid item xs>
          <Typography gutterBottom>Question:- {question}</Typography>
          <Typography gutterBottom>Answer:- {answer}</Typography>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default UserAllAnswersListItem;

UserAllAnswersListItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string
};