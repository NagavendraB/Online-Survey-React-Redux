import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import {Question} from '.';
import NavButtons from '../containers/nav-buttons-container';
import ResultContainer from '../containers/result-container';
import AnswerOptions from '../containers/answer-options-container';
import {getPercentageValue} from '../utils/index';

const styles = theme => ({
  onlineSurvey: {
    width: '100%',
    maxWidth: 720,
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    ...theme.mixins.gutters(),
    textAlign: 'left',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  answer: {
    paddingTop: theme.spacing.unit * 2,
  }
});

const OnlineSurvey = ({
  questions, 
  classes, 
  currentQuestionIndex,
  onClickPrevious, 
  onClickNext, 
  onChangeAnswer
}) => {
  const isTestRunning = questions.length && questions.length > currentQuestionIndex;

  return (
    <Grid container direction='column' alignItems='center' justify='center'>
      <Grid className={classes.onlineSurvey} item xs={3}>
        {isTestRunning ? 
          <Paper className={classes.root} elevation={1}>
            <LinearProgress variant='buffer' value={getPercentageValue(currentQuestionIndex, questions)} />
            <Question questions={questions} currentQuestionIndex={currentQuestionIndex} />
            <Typography className={classes.answer} gutterTop>Answer: </Typography>
            <AnswerOptions onChangeAnswer={onChangeAnswer} />
            <NavButtons onClickNext={onClickNext} onClickPrevious={onClickPrevious} />
          </Paper> : 
          <ResultContainer />
        } 
      </Grid>
    </Grid> 
  );
};

export default withStyles(styles)(OnlineSurvey);

OnlineSurvey.propTypes = {
  questions: PropTypes.array,
  classes: PropTypes.object,
  currentQuestionIndex: PropTypes.number,
  onClickNext: PropTypes.func,
  onClickPrevious: PropTypes.func
};