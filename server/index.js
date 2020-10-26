require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const client = require('../database/postgres/index.js');
const bodyParser = require('body-parser')

const port = 3003;

// app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// ==========  GET ALL REVIEWS FOR SPECIFIC ROOM ==========
// --> /api/rooms/:roomId/reviews
app.get('/api/rooms/:roomId/reviews', (req, res) => {
  const { roomId } = req.params;
  console.log('Get All Rooms input: ', roomId);

   const getAllReviews = `SELECT * FROM reviews WHERE room_id = '${roomId}'`;
   console.log('GET REQUEST TEST: ');
   client.query(getAllReviews, (err, results) => {
     if (err) {
       res.status(400).send();
     } else {
       console.log('successful Get-All-Room-Reviews request from Server');
       res.status(200).send(results)
     }
   })
 })

// ========= GET ALL REVIEWS FOR A SPECIFIC USER ============
// --> /api/users/:userId/reviews
app.get('/api/users/:userId/reviews', (req, res) => {
 const { userId } = req.params;
 console.log('Get All User Reviews input: ', userId);

  const getAllReviews = `SELECT * FROM reviews WHERE user_id = '${userId}'`;
  console.log('GET REQUEST TEST: ');
  client.query(getAllReviews, (err, results) => {
    if (err) {
      res.status(400).send();
    } else {
      console.log('successful Get-All-User_Reviews request from Server');
      res.status(200).send(results)
    }
  })
})

// ========== POST A REVIEW TO A SPECIFIC LISTING ==============
// --> /api/rooms/:roomId/reviews
app.post('/api/rooms/:roomId/reviews', (req, res) => {

  console.log ('PARAM CHECK: ', req.params);
  console.log('BODY CHECK: ', req.body);

// POST request configuration for K6 Testing
    const dateNum = 'Sat Oct 31 2020 12:12:12 GMT-0700 (Pacific Daylight Time)';
    const description = 'POST DESCRIPTION DURING K6 LOCAL STESS TESTING';
    const cleanlinessRating = Math.floor(Math.random() * 2) + 4;
    const communicationRating = Math.floor(Math.random() * 2) + 4;
    const checkInRating = Math.floor(Math.random() * 2) + 4;
    const accuracyRating = Math.floor(Math.random() * 2) + 4;
    const locationRating = Math.floor(Math.random() * 2) + 4;
    const valueRating = Math.floor(Math.random() * 2) + 4;
    const totalRating = ((cleanlinessRating + communicationRating + checkInRating + accuracyRating + locationRating + valueRating) / 6).toFixed(2);
    const room_id = Number(req.params.roomId); //req.body.room_id
    const user_id = Math.floor(Math.random() * 99999) + 1;


  const postQuery = `INSERT INTO public."reviews" ("dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") VALUES ('${dateNum}', '${description}', ${cleanlinessRating}, ${communicationRating}, ${checkInRating}, ${accuracyRating}, ${locationRating}, ${valueRating}, ${totalRating}, ${room_id}, ${user_id})`

   client.query(postQuery, (err, results) => {
     if (err) {
       console.log(err);
       res.status(400).send();
     } else {
       console.log('Successful POST Request!');
       res.status(200).send()
     }
   })
 })

// =========== UPDATE A SPECIFIC REVIEW FOR A SPECIFIC LISTING ============
// --> /api/rooms/:roomId/reviews/:reviewId
app.patch('/api/rooms/:roomId/reviews/:reviewId', (req, res) => {
  // To be completed at later date
})


// ============== DELETE A SPECIFIC REVIEW FOR A SPECIFIC ROOM ==============
// api/rooms/:roomId/reviews/:reviewId
app.delete('api/rooms/:roomId/reviews/:reviewId', (req, res) => {
  // To be completed at later date
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

// ================= LEGACY CODE ======================

// const express = require('express');
// const path = require('path');
// const app = express();
// const Review = require('../database/index.js');

// app.use(express.static(__dirname + '/../client/dist'));

// const port = 3003;
// app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}`);
// });

// app.get('/rooms/*', function (req, res) {
//   res.setHeader('content-type', 'text/html');
//   res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
// });

// app.get('/api/rooms/:roomId', function (req, res) {
//   Review.find({
//     roomId: req.params.roomId,
//   })
//     .sort({ dateNum: -1 })
//     .then((data) => {
//       res.json(data);
//     });
// });
