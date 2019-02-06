import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {withStyles} from '@material-ui/core/styles';
import UserAllAnswersList from './user-all-answers-list';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    textAlign: 'left',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  resultText: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 1
  }
});

const Result = ({classes, userAnswers}) => (
  <div className='result'>
    <Paper className={classes.root} elevation={1}>
      <Typography className={classes.resultText} color='textSecondary' gutterBottom>
          Thanks for taking our survey, Below are your answers for survey!
      </Typography>
      <Divider component='div' />
      <Typography className={classes.resultText} gutterBottom variant='subtitle1'>User Answers</Typography>
      <UserAllAnswersList userAnswers={userAnswers} />
    </Paper>
  </div>
);

export default withStyles(styles)(Result);

Result.propTypes = {
  classes: PropTypes.object,
  userAnswers: PropTypes.array
};