//Incorporate Dependencies
// const db = require('./postgres.sql');
const faker = require('faker');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const room = (num) => {
  let rooms = [];

  const descType = [
    'Hotel Room',
    'Entire Apartment',
    'Entire Loft',
    'Entire House',
    'Entire Condominium',
    'Entire Villa',
    'Entire Townhouse',
    'Private Room',
    'Shared Room',
    'Entire Cottage',
    'Entire Houseboat',
    'Entire RV',
    'Entire Cabin',
  ];

  for (let i = 0; i < num; i++) {
    let entry = {
      room_id: i,
      roomNum: Math.floor(Math.random() * 1000000) + 1,
      roomType: descType[Math.floor(Math.random() * descType.length)]
    };
    rooms.push(entry);
  }
  return rooms;
};

const csvWriter = createCsvWriter({
  path: "../postgres/CSV/rooms.csv",
  header: [
    {id: 'room_id', title: 'room_id'},
    {id: 'roomNum', title: 'roomNum'},
    {id: 'roomType', title: 'roomType'},
  ],
})

let roomBuild = room(10);

csvWriter.writeRecords(roomBuild)
  .then(() => {
    console.log("Done writing first 10 records for ROOMS!")
});

