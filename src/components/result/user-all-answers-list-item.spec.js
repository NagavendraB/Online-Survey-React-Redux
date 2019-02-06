import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import UserAllAnswersListItem from './user-all-answers-list-item';

Enzyme.configure({ adapter: new Adapter() });

describe('Test UserAllAnswersListItem Component', () => {
  it('`UserAllAnswersListItem` exist and be a component', () => expect(UserAllAnswersListItem).toBeInstanceOf(Function));

  it('`UserAllAnswersListItem` should renders list of user answers', () => {
    const component = mount(<UserAllAnswersListItem />);
    expect(component.find('.UserAllAnswersListItem')).toBeDefined();
  }); 
});