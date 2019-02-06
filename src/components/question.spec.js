import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Question from './question';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Question Component', () => {
  it('`Question` exist and be a component', () => expect(Question).toBeInstanceOf(Function));

  it('`Question` should renders provided question', () => {
    const component = mount(<Question questions={[]} />);
    expect(component.find('.question')).toBeDefined();
  }); 
});