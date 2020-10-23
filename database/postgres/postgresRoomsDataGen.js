//Incorporate Dependencies
// const db = require('./postgres.sql');
const faker = require('faker');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const room = () => {
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

  for (let i = 0; i < 2500000; i++) {
    //provide useful console log statements for seeding levels completed
    if ( i === 1000 || i === 10000 || i === 50000 || i === 1000000 || i === 1500000 || i === 2000000) {
     console.log(`Seeded ${i} Records`);
   }


    let entry = {
      room_id: i,
      roomNum: Math.floor(Math.random() * 50000) + 1,
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

let roomBuild = room();

csvWriter.writeRecords(roomBuild)
  .then(() => {console.log("Done writing records for ROOMS!")}
  // .catch(err => console.log(err))
  );

