import * as actions from './api';

describe('api actions', () => {
  it('apiStart should create API_START action', () => {
    expect(actions.apiStart('api start')).toEqual({
      type: 'API_START',
      payload: 'api start'
    })
  })

  it('apiEnd should create API_END action', () => {
    expect(actions.apiEnd('api end')).toEqual({
      type: 'API_END',
      payload: 'api end'
    })
  })

  it('accessDenied should create ACCESS_DENIED action', () => {
    expect(actions.accessDenied('access Denied')).toEqual({
      type: 'ACCESS_DENIED',
      payload: {'url': 'access Denied'}
    })
  })

  it('apiError should create API_ERROR action', () => {
    expect(actions.apiError('api Error')).toEqual({
      type: 'API_ERROR',
      error: 'api Error'
    })
  })
})