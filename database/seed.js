const Review = require('./index')
const faker = require('faker')
const moment = require('moment')


const createData = function (num) {

  // Generate Dates
  const monthYear = [];
  let now = moment()
  for (let i = 0; i < num; i++) {
    now = now.subtract(3, 'days');
    const dateStr = now.format("MMMM YYYY")
    const dateNum = now.unix()

    monthYear.push({
      dateNum,
      dateStr
    })
  }

  // Generate Sex
  const sexes = ['female', 'male']

  // Generate Reviews
  const reviews = [faker.lorem.words(), faker.lorem.sentence(), faker.lorem.sentences(), faker.lorem.paragraph(), faker.lorem.paragraphs()];

  // Count variable
  let count = 0;

  for (let i = 0; i < num; i++) {
    let sex = sexes[Math.floor(Math.random() * 2)]
    count +=1

    const username = faker.name.firstName(sex)
    const image = `https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/${sex}-${count.toString()}.jpg`
    const data = {
      username: username,
      image: image,
      dateNum: monthYear[i].dateNum,
      dateStr: monthYear[i].dateStr,
      review: reviews[Math.floor(Math.random() * 5)]
    }
    const review = new Review(data)
    review.save((err,result) => {
      if (err) {
        throw err
      } else {
        console.log(result)
      }
    })
  }
}

createData(50)

// db.reviews.find({ }).sort( { dateNum : -1 } )



