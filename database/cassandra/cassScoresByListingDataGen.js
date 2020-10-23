//Incorporate Dependencies
// const db = require('./postgres.sql');
const fs = require('fs');
const faker = require('faker');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// const csvWriter = require('csv-write-stream');
// const writer = csvWriter();

const scores_by_listing = () => {
  let scores = [];

  for (let i = 20000000; i < 25000000; i++) {

  //provide useful console log statements for seeding levels completed
  if ( i === 1000 || i === 10000 || i === 50000 || i === 100000 || i === 250000 || i === 500000|| i === 750000 || i === 1000000 || i === 1500000 || i === 2000000 ) {
    console.log(`Seeded ${i} Records`);
  }

    let entry = {
      score_id: i,
      listing_id: Math.floor(Math.random() * 2499999) + 1,
      cleanlinessRating: Math.floor(Math.random() * 2) + 4,
      communicationRating: Math.floor(Math.random() * 2) + 4,
      checkInRating: Math.floor(Math.random() * 2) + 4,
      accuracyRating: Math.floor(Math.random() * 2) + 4,
      locationRating: Math.floor(Math.random() * 2) + 4,
      valueRating: Math.floor(Math.random() * 2) + 4,
      //WORK ON THESE TWO BELOW TOMORROW AM
      user_id: Math.floor(Math.random() * 9999999) + 1,
      review_id: i,
    };

    entry.totalRating = ((entry.cleanlinessRating + entry.communicationRating + entry.checkInRating + entry.accuracyRating + entry.locationRating + entry.valueRating) / 6).toFixed(2);

    scores.push(entry);
  }
  return scores;
};

const csvWriter = createCsvWriter({
  path: "../cassandra/CSV/scoresByListing4.csv",
  header: [
    {id: 'score_id', title: 'score_id'},
    {id: 'listing_id', title: 'listing_id'},
    {id: 'cleanlinessRating', title: 'cleanlinessRating'},
    {id: 'communicationRating', title: 'communicationRating'},
    {id: 'checkInRating', title: 'checkInRating'},
    {id: 'accuracyRating', title: 'accuracyRating'},
    {id: 'locationRating', title: 'locationRating'},
    {id: 'valueRating', title: 'valueRating'},
    {id: 'totalRating', title: 'totalRating'},
    {id: 'user_id', title: 'user_id'},
    {id: 'review_id', title: 'review_id'},
  ],
})

let scoresByListing = scores_by_listing();

csvWriter.writeRecords(scoresByListing)
  .then(() => {console.log("Done writing records for SCORES BY LISTING!")}
  // .catch(err => console.log(err))
);

