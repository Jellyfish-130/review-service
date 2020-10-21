-- Postgres Schema

DROP DATABASE IF EXISTS reviews_database;

CREATE DATABASE reviews_database;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS rooms;

CREATE TABLE users (
  "user_id" SERIAL PRIMARY KEY,
  "firstName" VARCHAR(50),
  "lastName" VARCHAR(50),
  "username" VARCHAR(50) NOT NULL,
  "image" VARCHAR(255)
);

CREATE TABLE rooms (
  "room_id" SERIAL PRIMARY KEY,
  "roomNum" INT,
  "roomType" VARCHAR(25)
);

CREATE TABLE reviews (
  "review_id" SERIAL PRIMARY KEY,
  "dateNum" VARCHAR(70),
  "description" VARCHAR NOT NULL,
  "cleanlinessRating" SMALLINT,
  "communicationRating" SMALLINT,
  "checkInRating" SMALLINT,
  "accuracyRating" SMALLINT,
  "locationRating" SMALLINT,
  "valueRating" SMALLINT,
  "totalRating" DECIMAL,
  "room_id" INT,
  "user_id" INT,
  FOREIGN KEY (room_id) REFERENCES rooms (room_id),
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);


COPY users ("user_id", "firstName", "lastName", "username", "image") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/users.csv' WITH CSV HEADER DELIMITER ',';

COPY rooms ("room_id", "roomNum", "roomType") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/rooms.csv' WITH CSV HEADER DELIMITER ',';

COPY reviews ("review_id", "dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/reviews.csv' WITH CSV HEADER DELIMITER ',';


--seeding command
-- psql -U jacobjohnsonrr reviews_database -f postgres.sql