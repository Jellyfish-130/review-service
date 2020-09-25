const express = require('express');
const app = express();
const Review = require('../database/index');

app.use(express.static(__dirname + '/../client/dist'));

const port = 3003;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});


app.get('/api/rooms/:roomId/reviews', function (req, res) {
  Review.find({
    roomId: req.params.roomId
  })
    .sort( { dateNum: -1 } )
    .then((data) => {
      res.json(data);
    });
});



