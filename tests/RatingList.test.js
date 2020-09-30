import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import 'jest-styled-components';

// Components
import RatingList, { Row } from '../client/src/components/RatingList.jsx';

describe('RatingList test suite', () => {
  it('Renders six <Row /> components', () => {
    const wrapper = shallow(<RatingList />);
    expect(wrapper.find(Row)).to.have.lengthOf(6);
  });
});
