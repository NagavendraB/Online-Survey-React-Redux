import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import UserAllAnswersList from './user-all-answers-list';

Enzyme.configure({ adapter: new Adapter() });

describe('Test UserAllAnswersList Component', () => {
  it('`UserAllAnswersList` exist and be a component', () => expect(UserAllAnswersList).toBeInstanceOf(Function));
});