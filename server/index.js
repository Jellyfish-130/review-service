const express = require('express');
const path = require('path');
const app = express();
const client = require('../database/postgres/index.js');

const port = 3003;

// app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });


app.get('/', (req, res) => {
  // res.send('Hello World!')

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
