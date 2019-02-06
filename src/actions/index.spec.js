import * as actions from './index';

const defaultPayloadForApi = {
  url: '/questions/',
  method: 'GET',
  data: null,
  accessToken: null,
  onSuccess:  () => {},
  onFailure: () => {},
  label: 'FETCH_QUESTIONS_LIST',
  headersOverride: null
};

describe('Online Survey actions', () => {
  it('onClickNext should create ON_CLICK_NEXT action', () => {
    expect(actions.onClickNext()).toEqual({
      type: 'ON_CLICK_NEXT'
    })
  })

  it('onClickPrevious should create ON_CLICK_PREVIOUS action', () => {
    expect(actions.onClickPrevious()).toEqual({
      type: 'ON_CLICK_PREVIOUS'
    })
  })

  it('storeQuestions should create STORE_QUESTIONS action', () => {
    expect(actions.storeQuestions(['question1', 'question2'])).toEqual({
      type: 'STORE_QUESTIONS',
      questions: ['question1', 'question2']
    })
  })

  it('storeUserAnswer should create STORE_USER_ANSWER action', () => {
    const payload = {item: {question: 'question1', answer: 'answer1'}, index: 1};
    expect(actions.storeUserAnswer(payload)).toEqual({
      type: 'STORE_USER_ANSWER',
      item: payload.item,
      index: payload.index
    })
  })

  it('fetchQuestions should create API action', () => {
    expect(JSON.stringify(actions.fetchQuestions(defaultPayloadForApi))).toEqual(JSON.stringify({
      type: 'API',
      payload: defaultPayloadForApi
    }))
  })
})