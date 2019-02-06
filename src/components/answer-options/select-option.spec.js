import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SelectOption from './select-option';

Enzyme.configure({ adapter: new Adapter() });

describe('Test SelectOption Component', () => {
  const listData = ["some high school", "high school graduate", "post graduate degree"];
  it('`SelectOption` exist and be a component', () => expect(SelectOption).toBeInstanceOf(Function));

  it('`SelectOption` should renders list of options', () => {
    const component = mount(<SelectOption answerOptions={listData} />);
    expect(component.find('.select-option')).toBeDefined();
  }); 
});