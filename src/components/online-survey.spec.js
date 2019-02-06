import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OnlineSurvey from './online-survey';

Enzyme.configure({ adapter: new Adapter() });

describe('Test OnlineSurvey Component', () => {
  it('`OnlineSurvey` exist and be a component', () => expect(OnlineSurvey).toBeInstanceOf(Function));
});