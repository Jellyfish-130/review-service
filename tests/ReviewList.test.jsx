import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import 'jest-styled-components';

// Components
import ReviewList from '../client/src/components/ReviewList.jsx';
import ReviewListEntry from '../client/src/components/ReviewListEntry.jsx';

describe('ReviewList test suite', () => {
  it('Renders one <ReviewListEntry /> component', () => {
    const reviewsDisplayed = [
      {
        username: 'Johnathan',
        image:
          'https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/male-10.jpg',
        dateNum: 1596676431,
        dateStr: 'August 2020',
        review:
          'Ea omnis recusandae voluptates qui at. Quia quas vero ut ut asperiores.',
        roomId: 3,
        cleanlinessRating: 4,
        communicationRating: 4,
        checkInRating: 5,
        accuracyRating: 5,
        locationRating: 5,
        valueRating: 5,
      },
    ];
    const wrapper = shallow(<ReviewList reviewsDisplayed={reviewsDisplayed} />);
    expect(wrapper.find(ReviewListEntry)).to.have.lengthOf(1);
  });
});
