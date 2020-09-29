import React from 'react';
import { shallow } from 'enzyme';

// Components
import ReviewList from './ReviewList.jsx';

describe('ReviewList test suite', () => {
  it('Should have an empty children array', () => {
    const wrapper = shallow(<ReviewList reviewsDisplayed={[]} />);
    expect(wrapper.props().children.length).toBe(0);
  });

  it('Should have an empty children array', () => {
    const wrapper = shallow(
      <ReviewList
        reviewsDisplayed={[
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
        ]}
      />
    );
    expect(wrapper.props().children.length).toBe(1);
  });
});
