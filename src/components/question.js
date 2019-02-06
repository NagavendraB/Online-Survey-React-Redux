import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  title: {
    marginTop: theme.spacing.unit * 2,
    fontSize: 14,
  }
});

const Question = ({questions, currentQuestionIndex, classes}) => (
  <div className='question'>
    <Typography className={classes.title} color='textSecondary' gutterBottom>
      Question {currentQuestionIndex + 1} of {questions.length}
    </Typography>
    <Typography variant='h6' component='h5' gutterBottom>
      Question: {questions.length > 0 && questions[currentQuestionIndex].question}
    </Typography>
  </div>
);

export default withStyles(styles)(Question);

Question.propTypes = {
  questions: PropTypes.array,
  currentQuestionIndex: PropTypes.number,
  classes: PropTypes.object
};