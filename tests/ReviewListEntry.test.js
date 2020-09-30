import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import 'jest-styled-components';

// Components
import ReviewListEntry, {
  AvatarNameDateAndReview,
} from '../client/src/components/ReviewListEntry.jsx';

describe('ReviewListEntry test suite', () => {
  it('Should have Name, Date, AverageRating, Review', () => {
    const wrapper = shallow(<ReviewListEntry />);
    expect(wrapper.find(AvatarNameDateAndReview)).to.have.lengthOf(1);
  });
});
