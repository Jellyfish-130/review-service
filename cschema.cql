DROP KEYSPACE IF EXISTS "reviews_database";

CREATE KEYSPACE "reviews_database";
  WITH REPLICATION = {
    'class': 'SimpleStrategy',
    'replication_factor' : 1
  }
  AND DURABLE_WRITES =  true;

USE "reviews_database";

CREATE TABLE "reviews_by_listing" (
  review_id int,
  username text,
  image text,
  dateNum date,
  description text,
  totalRating decimal,
  listing_id int,
  PRIMARY KEY (reviewId, listingId)

);

CREATE TABLE "reviews_by_user" (
  user_id int,
  username text,
  image text,
  dateNum date,
  description text,
  totalRating decimal,
  review_id int,
  PRIMARY KEY (user_id, review_id)
);

CREATE TABLE "scores_by_listing" (
  score_id int,
  cleanlinessRating smallint,
  communicationRating smallint,
  checkInRating smallint,
  accuracyRating smallint,
  locationRating smallint,
  valueRating smallint,
  totalRating decimal,
  listing_id,
  user_id int,
  review_id
  PRIMARY KEY (scores_id, listing_id, user_id, review_id)
)

WITH CLUSTERING ORDER BY()