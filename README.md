# Bookable

> Project description

We built a replica of an Airbnb listing by splitting up the 4 main components: photo-gallery, calender, reviews, and more places to stay. We not only replicated the functionalities of the components, but also styled everything to be nearly identical to Airbnb's stylings.

## Related Projects

- https://github.com/Bookable-130/photo-gallery-service
- https://github.com/Bookable-130/calendar-service
- https://github.com/Bookable-130/review-service
- https://github.com/Bookable-130/more-places-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

To get the review component, run http://localhost:3003/rooms/:roomId with the corresponding roomId.

API endpoints:

- Endpoint: /api/rooms/:roomId
- HTTP method: GET

Shape of data:

- Example response:
  { \_id: 5f77756fe4123b1d8db62729,
  username: 'Damon',
  image:
  'https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/male-8.jpg',
  dateNum: 1588704367,
  dateStr: 'May 2020',
  review:
  'Minima provident aut maxime fugiat non nihil incidunt. Laboriosam tempore veritatis asperiores nostrum provident. Tempora eius eligendi temporibus tempora porro qui quas.\n \rModi enim consequatur illo enim. Repellat in numquam quidem exercitationem ipsam magnam ea. Enim ratione odit eligendi mollitia natus ut perferendis. At placeat incidunt repellendus temporibus similique et. Cupiditate sapiente quos quia.\n \rConsequatur et ut provident at et eos eveniet. Enim sunt dolorum quo officiis eos velit voluptate harum quisquam. Voluptas ut ea. Aliquid et quam consequatur error ad. Ut dolorem magni.',
  roomId: 2,
  cleanlinessRating: 4,
  communicationRating: 5,
  checkInRating: 4,
  accuracyRating: 5,
  locationRating: 5,
  valueRating: 4,
  totalRating: 4.5,
  \_\_v: 0 }

## Requirements

- Node 6.13.0
- NPM 6.14.8
- MongoDB 4.2.8

## Development

### Installing Dependencies

From within the root directory:

- npm install

### Running the application

- Run MongoDB: mongod --dbpath data
- Run Webpack: npm run build:dev
- Run Express server: npm run start:dev
