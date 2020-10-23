//Incorporate Dependencies
// const db = require('./postgres.sql');
const fs = require('fs');
const faker = require('faker');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// const csvWriter = require('csv-write-stream');
// const writer = csvWriter();

let sexes = ['female', 'male'];
let sex = sexes[Math.floor(Math.random() * 2)];

const reviews_by_listing = () => {
  let reviews = [];

  for (let i = 0; i < 2500000; i++) {

  //provide useful console log statements for seeding levels completed
  if ( i === 1000 || i === 10000 || i === 50000 || i === 100000 || i === 250000 || i === 500000|| i === 750000 || i === 1000000 || i === 1500000 || i === 2000000 ) {
    console.log(`Seeded ${i} Records`);
  }

  // Generate Reviews
  // const descriptionBody = [faker.lorem.words(), faker.lorem.sentence(), faker.lorem.sentences(), faker.lorem.paragraph(), faker.lorem.paragraphs()];

    let entry = {
      listing_id: i,
      review_id: Math.floor(Math.random() * 24999999) + 1,
      username: faker.internet.userName(),
      image: `https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/${sex}-${Math.floor(Math.random() * 50) + 1}.jpg`,
      dateNum: faker.date.past(),
      description: faker.lorem.sentence(),
    };

    reviews.push(entry);
  }
  return reviews;
};

const csvWriter = createCsvWriter({
  path: "../cassandra/CSV/reviewsByListing.csv",
  header: [
    {id: 'listing_id', title: 'listing_id'},
    {id: 'review_id', title: 'review_id'},
    {id: 'username', title: 'username'},
    {id: 'image', title: 'image'},
    {id: 'dateNum', title: 'dateNum'},
    {id: 'description', title: 'description'},
  ],
})

let reviewsByListingDump = reviews_by_listing();

csvWriter.writeRecords(reviewsByListingDump)
  .then(() => {console.log("Done writing records for REVIEWS BY LISTING!")}
  // .catch(err => console.log(err))
);

