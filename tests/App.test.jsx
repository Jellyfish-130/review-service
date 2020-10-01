import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import 'jest-styled-components';

// Components
import App, { ButtonContainer } from '../client/src/components/App.jsx';
import TopBar from '../client/src/components/TopBar.jsx';
import RatingList from '../client/src/components/RatingList.jsx';
import ReviewList from '../client/src/components/ReviewList.jsx';

const SERVER_RESPONSE =
  '[{"_id":"5f6ff2b60021882da7d92779","username":"Terri","image":"https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/female-19.jpg","dateNum":1598320950,"dateStr":"August 2020","review":"Sunt hic non necessitatibus quis aut qui ullam et. Ad consequatur dolorem voluptates qui libero. Voluptas consectetur et.","roomId":1,"cleanlinessRating":5,"communicationRating":5,"checkInRating":5,"accuracyRating":4,"locationRating":4,"valueRating":4,"totalRating":4.5,"__v":0},{"_id":"5f6ff2b60021882da7d9277a","username":"Willard","image":"https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/male-31.jpg","dateNum":1598061750,"dateStr":"August 2020","review":"Sunt hic non necessitatibus quis aut qui ullam et. Ad consequatur dolorem voluptates qui libero. Voluptas consectetur et.","roomId":1,"cleanlinessRating":4,"communicationRating":5,"checkInRating":5,"accuracyRating":4,"locationRating":4,"valueRating":5,"totalRating":4.5,"__v":0},{"_id":"5f6ff2b60021882da7d9277c","username":"Pedro","image":"https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/male-4.jpg","dateNum":1597543350,"dateStr":"August 2020","review":"dolore rerum architecto","roomId":1,"cleanlinessRating":5,"communicationRating":4,"checkInRating":4,"accuracyRating":4,"locationRating":5,"valueRating":4,"totalRating":4.333333333333333,"__v":0},{"_id":"5f6ff2b60021882da7d9277d","username":"Andrew","image":"https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/male-38.jpg","dateNum":1597284150,"dateStr":"August 2020","review":"Sunt hic non necessitatibus quis aut qui ullam et. Ad consequatur dolorem voluptates qui libero. Voluptas consectetur et.","roomId":1,"cleanlinessRating":5,"communicationRating":4,"checkInRating":5,"accuracyRating":5,"locationRating":4,"valueRating":4,"totalRating":4.5,"__v":0},{"_id":"5f6ff2b60021882da7d92785","username":"Tamara","image":"https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/female-2.jpg","dateNum":1595210550,"dateStr":"July 2020","review":"Repudiandae esse voluptatem aut explicabo aut illo aperiam rem quasi. Placeat aut et ut reprehenderit. Dicta rerum consequatur suscipit nihil exercitationem non odio est.\n \rDoloribus dolorem quia molestias et laudantium rem voluptas sint. Minima voluptatem hic tempora dolorum atque eos eum. Commodi ut ullam explicabo aperiam non aperiam et aspernatur laboriosam. Ab nobis quia quia sequi ad ullam commodi aspernatur asperiores. Eaque veritatis qui dolorem pariatur.\n \rOdio id blanditiis nostrum sapiente aut tempore ut et esse. Quia odio nisi blanditiis corporis vitae at et dignissimos. Earum non eum voluptatem possimus recusandae.","roomId":1,"cleanlinessRating":4,"communicationRating":5,"checkInRating":4,"accuracyRating":5,"locationRating":4,"valueRating":5,"totalRating":4.5,"__v":0},{"_id":"5f6ff2b60021882da7d92791","username":"Alice","image":"https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/female-46.jpg","dateNum":1592100150,"dateStr":"June 2020","review":"Neque quaerat eos soluta reprehenderit itaque quam est accusamus. Cum sint consectetur. Consequatur aliquam odit dolorum.","roomId":1,"cleanlinessRating":4,"communicationRating":4,"checkInRating":5,"accuracyRating":4,"locationRating":5,"valueRating":4,"totalRating":4.333333333333333,"__v":0}]';

describe('App test suite', () => {
  it('Should have TopBar, RatingList and ReviewList,', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(TopBar)).to.have.lengthOf(1);
    expect(wrapper.find(RatingList)).to.have.lengthOf(1);
    expect(wrapper.find(ReviewList)).to.have.lengthOf(1);
  });

  it('Should have TopBar, RatingList and ReviewList,', () => {
    const server = sinon.createFakeServer();
    server.respondWith('GET', new RegExp('.*/api/rooms.*'), [
      200,
      { 'Content-Type': 'application/json' },
      SERVER_RESPONSE,
    ]);
    const wrapper = shallow(<App />);
    server.respond();

    expect(wrapper.contains(<ButtonContainer />)).to.equal(false);
    server.restore();
  });
});

// App should contain TopBar, RatingList and ReviewList
// if review length is greater than 6, expect "read more" button to exist
// if modalVisible is true, expect App to contain Modal and vice versa?
