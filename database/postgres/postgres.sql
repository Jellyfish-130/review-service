-- Postgres Schema

DROP DATABASE IF EXISTS reviews_database CASCADE;

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

-- USERS CSV
COPY users ("user_id", "firstName", "lastName", "username", "image") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/users.csv' WITH CSV HEADER DELIMITER ',';

COPY users ("user_id", "firstName", "lastName", "username", "image") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/users2.csv' WITH CSV HEADER DELIMITER ',';

-- ROOMS CSV
COPY rooms ("room_id", "roomNum", "roomType") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/rooms.csv' WITH CSV HEADER DELIMITER ',';

--REVIEWS CSV
COPY reviews ("review_id", "dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/reviews.csv' WITH CSV HEADER DELIMITER ',';
-- 2
COPY reviews ("review_id", "dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/reviews2.csv' WITH CSV HEADER DELIMITER ',';
-- -- 3
-- COPY reviews ("review_id", "dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/reviews3.csv' WITH CSV HEADER DELIMITER ',';
-- -- 4
-- COPY reviews ("review_id", "dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/reviews4.csv' WITH CSV HEADER DELIMITER ',';
-- -- 5
-- COPY reviews ("review_id", "dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/reviews5.csv' WITH CSV HEADER DELIMITER ',';
-- -- 6
-- COPY reviews ("review_id", "dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/reviews6.csv' WITH CSV HEADER DELIMITER ',';
-- -- 7
-- COPY reviews ("review_id", "dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/reviews7.csv' WITH CSV HEADER DELIMITER ',';
-- -- 8
-- COPY reviews ("review_id", "dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/reviews8.csv' WITH CSV HEADER DELIMITER ',';
-- -- 9
-- COPY reviews ("review_id", "dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/reviews9.csv' WITH CSV HEADER DELIMITER ',';
-- -- 10
-- COPY reviews ("review_id", "dateNum", "description", "cleanlinessRating", "communicationRating", "checkInRating", "accuracyRating", "locationRating", "valueRating", "totalRating", "room_id", "user_id") FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/postgres/CSV/reviews10.csv' WITH CSV HEADER DELIMITER ',';



--seeding command
-- psql -U jacobjohnsonrr reviews_database -f postgres.sql