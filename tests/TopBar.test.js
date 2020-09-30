import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import 'jest-styled-components';

// Components
import TopBar, { Title, StarIcon } from '../client/src/components/TopBar.jsx';

describe('TopBar test suite', () => {
  it('Should have Title and StarIcon,', () => {
    const wrapper = shallow(<TopBar />);
    expect(wrapper.find(Title)).to.have.lengthOf(1);
    expect(wrapper.find(StarIcon)).to.have.lengthOf(1);
  });
});
