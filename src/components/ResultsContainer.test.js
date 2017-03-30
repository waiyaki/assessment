import React from 'react';
import { shallow } from 'enzyme';

import ResultsContainer from './ResultsContainer';

describe('ResultsContainer', () => {
  it('should render a `h1` title', () => {
    const wrapper = shallow(<ResultsContainer />);
    expect(
      wrapper.containsMatchingElement(<h1>Issues</h1>)
    )
  })
})
