import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavButtons from './nav-buttons';

Enzyme.configure({ adapter: new Adapter() });

describe('Test NavButtons Component', () => {
  it('`NavButtons` exist and be a component', () => expect(NavButtons).toBeInstanceOf(Function));
  
  it('Test onClickNext event on Next button', () => {
    const mockCallBack = jest.fn();
    const button = mount(<NavButtons userAnswers={[{answer:"answer"}]} currentQuestionIndex={0} onClickNext={mockCallBack} />);
    button.find('button').at(1).simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('Test onClickPrevious event on Previous button', () => {
    const mockCallBack = jest.fn();
    const button = mount(<NavButtons userAnswers={[{answer:"answer"}]} currentQuestionIndex={1} onClickPrevious={mockCallBack} />);
    button.find('button').at(0).simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  
});