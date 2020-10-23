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
  score_id int,
  listing_id int,
  cleanlinessRating smallint,
  communicationRating smallint,
  checkInRating smallint,
  accuracyRating smallint,
  locationRating smallint,
  valueRating smallint,
  totalRating decimal,
  user_id int,
  review_id int,
  PRIMARY KEY (score_id, listing_id, user_id, review_id)
);

-- REVIEWS BY LISTING
COPY reviews_by_listing (listing_id, review_id, username, image, dateNum, description) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByListing.csv' WITH HEADER = TRUE;

-- REVIEWS BY USER
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser.csv' WITH HEADER = TRUE;
-- 2
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser2.csv' WITH HEADER = TRUE;
-- 3
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser3.csv' WITH HEADER = TRUE;
-- 4
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser4.csv' WITH HEADER = TRUE;
-- 5
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser5.csv' WITH HEADER = TRUE;
-- 6
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser6.csv' WITH HEADER = TRUE;
-- 7
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser7.csv' WITH HEADER = TRUE;
-- 8
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser8.csv' WITH HEADER = TRUE;
-- 9
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser9.csv' WITH HEADER = TRUE;
-- 10
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser10.csv' WITH HEADER = TRUE;
-- 11
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser11.csv' WITH HEADER = TRUE;
-- 12
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser12.csv' WITH HEADER = TRUE;
-- 13
COPY reviews_by_user (user_id, review_id, firstName, lastName, username, image, dateNum, description, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByUser13.csv' WITH HEADER = TRUE;

--SCORES BY LISTING
COPY scores_by_listing (listing_id, score_id, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating, user_id, review_id) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/scoresByListing.csv' WITH HEADER = TRUE;
-- 2
COPY scores_by_listing (listing_id, score_id, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating, user_id, review_id) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/scoresByListing2.csv' WITH HEADER = TRUE;
 -- 3
COPY scores_by_listing (listing_id, score_id, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating, user_id, review_id) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/scoresByListing3.csv' WITH HEADER = TRUE;
-- 4
COPY scores_by_listing (listing_id, score_id, cleanlinessRating, communicationRating, checkInRating, accuracyRating, locationRating, valueRating, totalRating, user_id, review_id) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/scoresByListing4.csv' WITH HEADER = TRUE;