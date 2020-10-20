//Incorporate Dependencies
// const db = require('./postgres.sql');

const faker = require('faker');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

 // Generate Reviews
 const descriptionBody = [faker.lorem.words(), faker.lorem.sentence(), faker.lorem.sentences(), faker.lorem.paragraph(), faker.lorem.paragraphs()];

const review = (num) => {
  let reviews = [];

  for (let i = 0; i < num; i++) {
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
      // room_id: ,
      // user_id: ,
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
  ],
})

let reviewBuild = review(10);

csvWriter.writeRecords(reviewBuild)
  .then(() => {
    console.log("Done writing first 10 records for REVIEWS!")
});