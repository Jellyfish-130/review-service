const express = require('express');
const app = express();
const Review = require('../database/index')

const port = 3003
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

app.get('/api/reviews', function (req, res) {
  Review.find()
    .sort( { dateNum : -1 } )
    .then((data) => {
      res.json(data)
    })
  }
)



