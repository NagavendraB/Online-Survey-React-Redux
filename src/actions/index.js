import {
  STORE_QUESTIONS, 
  FETCH_QUESTIONS_LIST,
  ON_CLICK_NEXT,
  ON_CLICK_PREVIOUS,
  STORE_USER_ANSWER
} from '../utils/constants';
import {apiAction} from '../utils';

export const onClickNext = () => ({
  type: ON_CLICK_NEXT
});

export const onClickPrevious = () => ({
  type: ON_CLICK_PREVIOUS
});

export const storeQuestions = questions => ({
  type: STORE_QUESTIONS,
  questions
});

export const storeUserAnswer = payload => ({
  type: STORE_USER_ANSWER,
  item: payload.item,
  index: payload.index
});

export const fetchQuestions = () => (
   apiAction({
    url: '/questions/',
    onSuccess: storeQuestions,
    onFailure: console.log('Error occured loading articles'),
    label: FETCH_QUESTIONS_LIST
  })
);
