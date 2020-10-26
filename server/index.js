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

    const review_id = req.body.review_id;
    const dateNum = req.body.dateNum;
    const description = req.body.description;
    const cleanlinessRating = req.body.cleanlinessRating;
    const communicationRating = req.body.communicationRating;
    const checkInRating = req.body.checkInRating;
    const accuracyRating = req.body.accuracyRating;
    const locationRating = req.body.locationRating;
    const valueRating = req.body.valueRating;
    const totalRating = req.body.totalRating;
    const room_id = req.body.room_id;
    const user_id = req.body.user_id;


  const postQuery = `INSERT INTO public."reviews" ("review_id", "dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") VALUES ('${review_id}', '${dateNum}', '${description}', '${cleanlinessRating}', '${communicationRating}', '${checkInRating}', '${accuracyRating}', '${locationRating}', '${valueRating}', '${totalRating}', '${room_id}', '${user_id}')`

   client.query(postQuery, (err, results) => {
     if (err) {
       console.log('Bad POST Request');
       res.status(400).send();
     } else {
       console.log('Successful POST request from Server');
       res.status(200).send()
     }
   })
 })

// =========== UPDATE A SPECIFIC REVIEW FOR A SPECIFIC LISTING ============
// --> /api/rooms/:roomId/reviews/:reviewId
app.patch('/', (req, res) => {

  const getAll = 'SELECT * FROM reviews limit 2';
  console.log('GET REQUEST TEST: ');
  client.query(getAll, (err, results) => {
    if (err) {
      res.status(400).send();
    } else {
      console.log('successful GetAll request from Server');
      res.status(200).send(results)
    }
  })
})


// ============== DELETE api/rooms/:roomId/reviews/:reviewId ==============
app.delete('api/rooms/:roomId/reviews/:reviewId', (req, res) => {

  const deleteCheck = req.params.roomId;
  const deletePut = req.params.reviewId;

  console.log('Delete check: ', deleteCheck, deletePut);

  // const getAll = 'SELECT * FROM reviews limit 2';
  // console.log('GET REQUEST TEST: ');
  // client.query(getAll, (err, results) => {
  //   if (err) {
  //     res.status(400).send();
  //   } else {
  //     console.log('successful GetAll request from Server');
  //     res.status(200).send(results)
  //   }
  // })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})








// =======================================

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
