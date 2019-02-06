import {combineReducers} from 'redux';
import { 
  API_START, 
  API_END, 
  FETCH_QUESTIONS_LIST,
  STORE_QUESTIONS,
  ON_CLICK_NEXT,
  ON_CLICK_PREVIOUS,
  STORE_USER_ANSWER,
} from '../utils/constants';
import { updateArray } from '../utils/index';

export const INITIAL_STATE = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: [],
  isFetchingData: false
};

export const survey = (state =  INITIAL_STATE, action) => {
  switch (action.type) {
    case API_START:
      if (action.payload === FETCH_QUESTIONS_LIST) {
        return {
          ...state,
          isFetchingData: true
        };
      }
    break;
    case API_END:
      if (action.payload === FETCH_QUESTIONS_LIST) {
        return {
          ...state,
          isFetchingData: false
        };
      }
    break;
    case STORE_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      }
    case ON_CLICK_NEXT:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1
      }
    case ON_CLICK_PREVIOUS:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1
      }
    case STORE_USER_ANSWER:
      return { 
        ...state,
        userAnswers: updateArray(state.userAnswers, action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  survey
});

export default rootReducer;