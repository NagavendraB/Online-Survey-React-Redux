import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RadioButtonsOption from './radio-buttons-option';

Enzyme.configure({ adapter: new Adapter() });

describe('Test RadioButtonsOption Component', () => {
  const listData = ["some high school", "high school graduate", "post graduate degree"];
  it('`RadioButtonsOption` exist and be a component', () => expect(RadioButtonsOption).toBeInstanceOf(Function));

  it('`RadioButtonsOption` should renders the list answer options with all elements in the provided array', () => {
    const component = mount(<RadioButtonsOption answerOptions={listData} />);
    const results = component.find('div').children();
    expect(results.length).toBe(listData.length);
  });
});