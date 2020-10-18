DROP KEYSPACE IF EXISTS "reviews_database";

CREATE KEYSPACE "reviews_database";
  WITH REPLICATION = {
    'class': 'SimpleStrategy',
    'replication_factor' : 1
  }
  AND DURABLE_WRITES =  true;

USE "reviews_database";

CREATE TABLE "reviews_by_listing" (
  listing_id int,
  review_id int,
  username text,
  image text,
  dateNum date,
  description text,
  totalRating decimal,
  PRIMARY KEY (listing_id, review_id)
)
WITH CLUSTERING ORDER BY(dateNum);

CREATE TABLE "reviews_by_user" (
  user_id int,
  review_id int,
  username text,
  image text,
  dateNum date,
  description text,
  cleanlinessRating smallint,
  communicationRating smallint,
  checkInRating smallint,
  accuracyRating smallint,
  locationRating smallint,
  valueRating smallint,
  totalRating decimal,
  PRIMARY KEY (user_id, review_id)
)
WITH CLUSTERING ORDER BY(dateNum);

CREATE TABLE "scores_by_listing" (
  listing_id,
  score_id int,
  cleanlinessRating smallint,
  communicationRating smallint,
  checkInRating smallint,
  accuracyRating smallint,
  locationRating smallint,
  valueRating smallint,
  totalRating decimal,
  user_id int,
  review_id
  PRIMARY KEY (listing_id, scores_id, user_id, review_id)
)
