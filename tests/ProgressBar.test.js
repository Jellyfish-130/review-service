import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import 'jest-styled-components';

// Components
import ProgressBar, {
  BarContainer,
} from '../client/src/components/ProgressBar.jsx';

describe('ProgressBar test suite', () => {
  it('Should have BarContainer,', () => {
    const wrapper = shallow(<ProgressBar />);
    expect(wrapper.find(BarContainer)).to.have.lengthOf(1);
  });
});
