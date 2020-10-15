# Jelly-Fish: SDC

> Project description

This is the back-end system architecture design of an inherited "item detail page" for a housing-rental web application

## Related Front-End Projects:

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

To get the review component, run http://localhost:3003/rooms/:roomId with the corresponding roomId.

## Server API

### GET all reviews for specific room
 * GET `/api/rooms/:roomId`

** Path Parameters: **
  * `roomId` Room ID

** Success Status Code:** `200`

** Returns:** JSON
```json
  {
  "\_id": "id Number",
  "username": "String",
  "image": "image URL",
  "dateNum": "Number",
  "dateStr": "String",
  "review": "String",
  "roomId": "Number",
  "cleanlinessRating": "Number",
  "communicationRating": "Number",
  "checkInRating": "Number",
  "accuracyRating": "Number",
  "locationRating": "Number",
  "valueRating": "Number",
  "totalRating": "Number",
  "\_\_v": "Number",
  }
```

### POST new reviews to a specific room
 * POST `/api/rooms/:roomId`

** Path Parameters: **
  * `roomId` Room ID

** Success Status Code:** `201`

** Request Body:** Expects JSON with the following keys.

```json
  {
  "\_id": "id Number",
  "username": "String",
  "image": "image URL",
  "dateNum": "Number",
  "dateStr": "String",
  "review": "String",
  "roomId": "Number",
  "cleanlinessRating": "Number",
  "communicationRating": "Number",
  "checkInRating": "Number",
  "accuracyRating": "Number",
  "locationRating": "Number",
  "valueRating": "Number",
  "totalRating": "Number",
  "\_\_v": "Number",
  }
```

### UPDATE reviews list from a specific room
 * PATCH `/api/rooms/:roomId`

** Path Parameters: **
  * `roomId` Room ID

** Success Status Code:** `204`

** Request Body:** Expects JSON with any of the following keys (include only keys to be updated)

```json
  {
  "\_id": "id Number",
  "dateNum": "Number",
  "dateStr": "String",
  "review": "String",
  "cleanlinessRating": "Number",
  "communicationRating": "Number",
  "checkInRating": "Number",
  "accuracyRating": "Number",
  "locationRating": "Number",
  "valueRating": "Number",
  "totalRating": "Number",
  "\_\_v": "Number",
  }
```

### DELETE all reviews from a specific room
* DELETE `/api/rooms/:roomId`

** Path Parameters: **
  * `roomId` Room ID

** Success Status Code:** `204`

### Requirements

- Node 6.13.0 or `10.15.3`
- NPM 6.14.8 or `6.4.1`
- MongoDB `4.2.8`

## Development

### Installing Dependencies

From within the root directory:

- npm install

### Running the application

- Run MongoDB: mongod --dbpath data
- Run Webpack: npm run build:dev
- Run Express server: npm run start:dev


<!-- { \_id: 5f77756fe4123b1d8db62729,
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
  \_\_v: 0 } -->