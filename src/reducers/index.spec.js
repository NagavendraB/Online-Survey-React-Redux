import reducer from './index';
import * as types from '../utils/constants';

describe('Survey reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      'survey': {
        questions: [],
        currentQuestionIndex: 0,
        userAnswers: [],
        isFetchingData: false
      }
    })
  })

  it('should handle API_START', () => {
    const action = { type: types.API_START, payload: 'FETCH_QUESTIONS_LIST' };
    expect(reducer([], action)).toEqual(
      {
        'survey': {
          questions: [],
          currentQuestionIndex: 0,
          userAnswers: [],
          isFetchingData: true
        }
      }
    )
  })

  it('should handle API_END', () => {
    const action = { type: types.API_END, payload: 'FETCH_QUESTIONS_LIST' };
    expect(reducer([], action)).toEqual(
      {
        'survey': {
          questions: [],
          currentQuestionIndex: 0,
          userAnswers: [],
          isFetchingData: false
        }
      }
    )
  })

  it('should handle STORE_QUESTIONS', () => {
    expect(
      reducer([], {
        type: types.STORE_QUESTIONS,
        questions: ['List of questions will goes here..']
      })
    ).toEqual(
      {
        'survey': {
          questions: ['List of questions will goes here..'],
          currentQuestionIndex: 0,
          userAnswers: [],
          isFetchingData: false
        }
      }
    )

    expect(
      reducer(
        [
          {
            'survey': {
              questions: ['Some Questions..'],
              currentQuestionIndex: 0,
              userAnswers: [],
              isFetchingData: false
            }
          }
        ],
        {
          type: types.STORE_QUESTIONS,
          questions: ['New Questions']
        }
      )
    ).toEqual({
      'survey': {
        questions: ['New Questions'],
        currentQuestionIndex: 0,
        userAnswers: [],
        isFetchingData: false
      }
    })
  })

  it('should handle ON_CLICK_NEXT', () => {
    expect(
      reducer([], {
        type: types.ON_CLICK_NEXT
      })
    ).toEqual(
      {
        'survey': {
          questions: [],
          currentQuestionIndex: 1,
          userAnswers: [],
          isFetchingData: false
        }
      }
    )
  })

  it('should handle ON_CLICK_PREVIOUS', () => {
    expect(
      reducer([], {
        type: types.ON_CLICK_PREVIOUS
      })
    ).toEqual(
      {
        'survey': {
          questions: [],
          currentQuestionIndex: -1,
          userAnswers: [],
          isFetchingData: false
        }
      }
    )
  })

  it('should handle STORE_USER_ANSWER', () => {
    expect(
      reducer([], {
        type: types.STORE_USER_ANSWER,
        item: {question: 'question1', answer: 'user answer'},
        index: 0
      })
    ).toEqual(
      {
        'survey': {
          questions: [],
          currentQuestionIndex: 0,
          userAnswers: [{question: 'question1', answer: 'user answer'}],
          isFetchingData: false
        }
      }
    )
  })
})