//Incorporate Dependencies
// const db = require('./postgres.sql');
const fs = require('fs');
const faker = require('faker');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// const csvWriter = require('csv-write-stream');
// const writer = csvWriter();
let sexes = ['female', 'male'];
let sex = sexes[Math.floor(Math.random() * 2)];
const user = (num) => {
  let users = [];

  for (let i = 0; i < num; i++) {
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
  path: "../postgres/CSV/users.csv",
  header: [
    {id: 'user_id', title: 'user_id'},
    {id: 'firstName', title: 'firstName'},
    {id: 'lastName', title: 'lastName'},
    {id: 'username', title: 'username'},
    {id: 'image', title: 'image'},
  ],
})

let userBuild = user(10);

csvWriter.writeRecords(userBuild)
  .then(() => {
    console.log("Done writing first 10 records for USERS!")
});

