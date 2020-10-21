//Incorporate Dependencies
// const db = require('./postgres.sql');
const fs = require('fs');
const faker = require('faker');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// const csvWriter = require('csv-write-stream');
// const writer = csvWriter();

let sexes = ['female', 'male'];
let sex = sexes[Math.floor(Math.random() * 2)];

const user = () => {
  let users = [];

  for (let i = 5000000; i < 10000000; i++) {

  //provide useful console log statements for seeding levels completed
  if ( i === 1000 || i === 10000 || i === 50000 || i === 100000 || i === 250000 || i === 500000|| i === 750000 || i === 1000000 || i === 1500000 || i === 2000000 ) {
    console.log(`Seeded ${i} Records`);
  }

    let entry = {
      user_id: i,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      image: `https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/${sex}-${Math.floor(Math.random() * 50) + 1}.jpg`,
    };
    users.push(entry);
  }
  return users;
};

const csvWriter = createCsvWriter({
  path: "../postgres/CSV/users2.csv",
  header: [
    {id: 'user_id', title: 'user_id'},
    {id: 'firstName', title: 'firstName'},
    {id: 'lastName', title: 'lastName'},
    {id: 'username', title: 'username'},
    {id: 'image', title: 'image'},
  ],
})

let userBuild = user();

csvWriter.writeRecords(userBuild)
  .then(() => {console.log("Done writing records for USERS!")}
  // .catch(err => console.log(err))
);

