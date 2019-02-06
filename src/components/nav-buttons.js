import React from 'react';
import PropTypes from 'prop-types';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
  nextButton: {
    marginLeft: 'auto'
  }
});

const NavButtons = ({
  classes,
  userAnswers, 
  currentQuestionIndex, 
  onClickNext, 
  onClickPrevious
}) => {
  const isQuestionAnswered = userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].answer !== '';

  return (
    <CardActions>
      <Button 
        variant='contained' 
        color='primary' 
        disabled={currentQuestionIndex === 0}
        onClick={onClickPrevious} >
        Previous
      </Button>
      <Button 
        variant='contained' 
        color='primary' 
        className={classes.nextButton}
        disabled={!isQuestionAnswered}
        onClick={onClickNext}>
        Next
      </Button>
    </CardActions>
  );
};

export default withStyles(styles)(NavButtons);

NavButtons.propTypes = {
  classes: PropTypes.object,
  userAnswers: PropTypes.array,
  currentQuestionIndex: PropTypes.number,
  onClickNext: PropTypes.func,
  onClickPrevious: PropTypes.func
};