import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Result from './result';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Result Component', () => {
  it('`Result` exist and be a component', () => expect(Result).toBeInstanceOf(Function));

  it('`Result` should renders the list answer options with all elements in the provided array', () => {
    const component = mount(<Result userAnswers={[{question: 'question1', answer: 'answer1'}]} />);
    expect(component.find('.result')).toBeDefined();
  });
});