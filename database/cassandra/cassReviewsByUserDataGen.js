//Incorporate Dependencies
// const db = require('./postgres.sql');
const fs = require('fs');
const faker = require('faker');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// const csvWriter = require('csv-write-stream');
// const writer = csvWriter();

let sexes = ['female', 'male'];
let sex = sexes[Math.floor(Math.random() * 2)];

const reviews_by_user = () => {
  let users = [];

  for (let i = 24000000; i < 26000000; i++) {

  //provide useful console log statements for seeding levels completed
  if ( i === 1000 || i === 10000 || i === 50000 || i === 100000 || i === 250000 || i === 500000|| i === 750000 || i === 1000000 || i === 1500000 || i === 2000000 ) {
    console.log(`Seeded ${i} Records`);
  }

  // Generate Reviews
  // const descriptionBody = [faker.lorem.words(), faker.lorem.sentence(), faker.lorem.sentences(), faker.lorem.paragraph(), faker.lorem.paragraphs()];

    let entry = {
      user_id: i,
      review_id: Math.floor(Math.random() * 24999999) + 1,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      image: `https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/${sex}-${Math.floor(Math.random() * 50) + 1}.jpg`,
      dateNum: faker.date.past(),
      description: faker.lorem.sentence(),
      cleanlinessRating: Math.floor(Math.random() * 2) + 4,
      communicationRating: Math.floor(Math.random() * 2) + 4,
      checkInRating: Math.floor(Math.random() * 2) + 4,
      accuracyRating: Math.floor(Math.random() * 2) + 4,
      locationRating: Math.floor(Math.random() * 2) + 4,
      valueRating: Math.floor(Math.random() * 2) + 4,
    };

    entry.totalRating = ((entry.cleanlinessRating + entry.communicationRating + entry.checkInRating + entry.accuracyRating + entry.locationRating + entry.valueRating) / 6).toFixed(2);

    users.push(entry);
  }
  return users;
};

const csvWriter = createCsvWriter({
  path: "../cassandra/CSV/reviewsByUser13.csv",
  header: [
    {id: 'user_id', title: 'user_id'},
    {id: 'review_id', title: 'review_id'},
    {id: 'firstName', title: 'firstName'},
    {id: 'lastName', title: 'lastName'},
    {id: 'username', title: 'username'},
    {id: 'image', title: 'image'},
    {id: 'dateNum', title: 'dateNum'},
    {id: 'description', title: 'description'},
    {id: 'cleanlinessRating', title: 'cleanlinessRating'},
    {id: 'communicationRating', title: 'communicationRating'},
    {id: 'checkInRating', title: 'checkInRating'},
    {id: 'accuracyRating', title: 'accuracyRating'},
    {id: 'locationRating', title: 'locationRating'},
    {id: 'valueRating', title: 'valueRating'},
    {id: 'totalRating', title: 'totalRating'},
  ],
})

let reviewsByUserDump = reviews_by_user();

csvWriter.writeRecords(reviewsByUserDump)
  .then(() => {console.log("Done writing records for REVIEWS BY USER!")}
  // .catch(err => console.log(err))
);

