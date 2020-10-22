DROP KEYSPACE IF EXISTS "reviews";

CREATE KEYSPACE reviews
  WITH REPLICATION = {
    'class': 'SimpleStrategy',
    'replication_factor' : 1
  }
  AND DURABLE_WRITES =  true;

USE "reviews";

CREATE TABLE reviews_by_listing(
  listing_id int,
  review_id int,
  username text,
  image text,
  dateNum text,
  description text,
  PRIMARY KEY (listing_id,review_id)
);
-- WITH CLUSTERING ORDER BY(dateNum);

CREATE TABLE reviews_by_user(
  user_id int,
  review_id int,
  firstName text,
  lastName text,
  username text,
  image text,
  dateNum text,
  description text,
  cleanlinessRating smallint,
  communicationRating smallint,
  checkInRating smallint,
  accuracyRating smallint,
  locationRating smallint,
  valueRating smallint,
  totalRating decimal,
  PRIMARY KEY (user_id,review_id)
);
-- WITH CLUSTERING ORDER BY(dateNum);

CREATE TABLE scores_by_listing(
  listing_id int,
  score_id int,
  cleanlinessRating smallint,
  communicationRating smallint,
  checkInRating smallint,
  accuracyRating smallint,
  locationRating smallint,
  valueRating smallint,
  totalRating decimal,
  user_id int,
  review_id int,
  PRIMARY KEY (listing_id,score_id,user_id,review_id)
);

COPY reviews_by_listing (listing_id, review_id, username, image, dateNum, description) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByListing.csv' WITH HEADER = TRUE;

COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser.csv' WITH HEADER = TRUE;

COPY scores_by_listing (listing_id, score_id, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating, user_id, review_id) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/scoresByListing.csv' WITH HEADER = TRUE;