//Incorporate Dependencies
// const db = require('./postgres.sql');

const faker = require('faker');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

 // Generate Reviews
 const descriptionBody = [faker.lorem.words(), faker.lorem.sentence(), faker.lorem.sentences(), faker.lorem.paragraph(), faker.lorem.paragraphs()];

const review = () => {
  let reviews = [];

  for (let i = 0; i < 10000; i++) {

    //provide useful console log statements for seeding levels completed
    if ( i === 1000 || i === 10000 || i === 50000 || i === 100000 || i === 250000 || i === 500000|| i === 750000 || i === 1000000 || i === 1500000 ) {
      console.log(`Seeded ${i} Records`);
    }

    let entry = {
      review_id: i,
      dateNum: faker.date.past(),
      description: descriptionBody[Math.floor(Math.random() * 5)],
      cleanlinessRating: Math.floor(Math.random() * 2) + 4,
      communicationRating: Math.floor(Math.random() * 2) + 4,
      checkInRating: Math.floor(Math.random() * 2) + 4,
      accuracyRating: Math.floor(Math.random() * 2) + 4,
      locationRating: Math.floor(Math.random() * 2) + 4,
      valueRating: Math.floor(Math.random() * 2) + 4,
      room_id: Math.floor(Math.random() * 1750) + 1,
      user_id: Math.floor(Math.random() * 9000) + 1,
      // totalRating: 0,
    };
    entry.totalRating = ((entry.cleanlinessRating + entry.communicationRating + entry.checkInRating + entry.accuracyRating + entry.locationRating + entry.valueRating) / 6).toFixed(2);

    reviews.push(entry);
  }
  return reviews;
};

const csvWriter = createCsvWriter({
  path: "../postgres/CSV/reviews.csv",
  header: [
    {id: 'review_id', title: 'review_id'},
    {id: 'dateNum', title: 'dateNum'},
    {id: 'description', title: 'description'},
    {id: 'cleanlinessRating', title: 'cleanlinessRating'},
    {id: 'communicationRating', title: 'communicationRating'},
    {id: 'checkInRating', title: 'checkInRating'},
    {id: 'accuracyRating', title: 'accuracyRating'},
    {id: 'locationRating', title: 'locationRating'},
    {id: 'valueRating', title: 'valueRating'},
    {id: 'totalRating', title: 'totalRating'},
    {id: 'room_id', title: 'room_id'},
    {id: 'user_id', title: 'user_id'},
  ],
})

let reviewBuild = review();

csvWriter.writeRecords(reviewBuild)
  .then(() => {console.log("Done writing records for REVIEWS!")}
  // .catch(console.log)
  );


  //SANDBOX
  // node --max-old-space-size=4096 postgresReviewsDataGen.js
  // Tested Limit: 2 Million review records seeded successfully - 625.3 MB
  // Tested Limit: 2 Million review records seeded successfully - 671.6 MB
  // Tested Limit: [BROKEN] 3 Million review records seed failure
