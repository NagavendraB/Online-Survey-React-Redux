import {API} from './constants';

const insertItem = (array, action) => {
  let newArray = array.slice();
  newArray.splice(action.index, 0, action.item)
  return newArray;
};

const updateItem = (array, action) => array && array.map((item, index) => index !== action.index ? item : {...item, ...action.item});

export const updateArray = (array, action) => array.length - 1 < action.index ? insertItem(array, action) : updateItem(array, action);

export const getPercentageValue = (questionIndex, questions) => (questionIndex / questions.length) * 100;

export const apiAction = ({
  url = '',
  method = 'GET',
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = '',
  headersOverride = null
}) => ({
  type: API,
  payload: {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headersOverride
  }
});