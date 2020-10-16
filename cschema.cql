DROP KEYSPACE IF EXISTS "reviews_database";

CREATE KEYSPACE "reviews_database";
  WITH REPLICATION = {
    'class': 'SimpleStrategy',
    'replication_factor' : 1
  }
  AND DURABLE_WRITES =  true;

USE "reviews_database";

CREATE TABLE users (
  user_id int,
  username text,
  image text,
  PRIMARY KEY (user_id)
);

CREATE TABLE reviews (
  review_id int,
  dateNum int,
  dateStr text,
  description text,
  room_id int,
  user_id int,
  scores_id int,
  PRIMARY KEY (review_id, room_id, user_id, scores_id)
);

CREATE TABLE scores (
  scores_id int,
  cleanlinessRating smallint,
  communicationRating smallint,
  checkInRating smallint,
  accuracyRating smallint,
  locationRating smallint,
  valueRating smallint,
  totalRating decimal,
  room_id int,
  user_id int,
  PRIMARY KEY (scores_id, room_id, user_id)
);

CREATE TABLE rooms (
  room_id int PRIMARY KEY,
  roomNum int,
);

WITH CLUSTERING ORDER BY()
