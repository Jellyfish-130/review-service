//Incorporate Dependencies
// const db = require('./postgres.sql');

const faker = require('faker');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

 // Generate Reviews
 const descriptionBody = [faker.lorem.words(), faker.lorem.sentence(), faker.lorem.sentences(), faker.lorem.paragraph(), faker.lorem.paragraphs()];

const review = () => {
  let reviews = [];

  /*
  CSV FILE INCREMENTS
  rev1 = 0 < 2.5MM
  rev2 = 2.5MM < 5MM
  rev3 = 5MM < 7.5MM
  rev4 = 7.5MM < 10MM
  rev5 = 10MM < 12.5MM
  rev6 = 12.5MM < 15MM
  rev7 = 15MM < 17.5MM
  rev8 = 17.5MM < 20MM
  rev9 = 20MM < 22.5MM
  rev10 = 22.5MM < 25MM
  */

  for (let i = 22500000; i < 25000000; i++) {

    //provide useful console log statements for seeding levels completed
    if ( i === 10000 || i === 50000 || i === 100000 || i === 250000 || i === 500000|| i === 1000000 || i === 2500000 || i === 5000000 || i === 10000000 || i === 15000000 || i === 20000000 || i === 25000000 ) {
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
      room_id: Math.floor(Math.random() * 2499999) + 1,
      user_id: Math.floor(Math.random() * 9999999) + 1,
      // totalRating: 0,
    };
    entry.totalRating = ((entry.cleanlinessRating + entry.communicationRating + entry.checkInRating + entry.accuracyRating + entry.locationRating + entry.valueRating) / 6).toFixed(2);

    reviews.push(entry);
  }
  return reviews;
};

const csvWriter = createCsvWriter({
  path: "../postgres/CSV/reviews10.csv",
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
  // Tested Limit: 2 Million review records seeded successfully - void
  // Tested Limit: 2.5 Million review records seeded successfully - 578.1 MB
  // Tested Limit: [BROKEN] 3 Million review records seed failure
