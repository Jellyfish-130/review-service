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

  for (let i = 0; i < 2000; i++) {
    //provide useful console log statements for seeding levels completed
    if ( i === 50 || i === 1000 || i === 10000 || i === 15000 || i === 100000 || i === 150000|| i === 200000 ) {
     console.log(`Seeded ${i} Records`);
   }


    let entry = {
      room_id: i,
      roomNum: Math.floor(Math.random() * 20000) + 1,
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

