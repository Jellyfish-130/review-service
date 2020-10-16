-- Postgres Schema

DROP DATABASE IF EXISTS reviews_database;

CREATE DATABASE reviews_database;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS scores;
DROP TABLE IF EXISTS rooms;

CREATE TABLE IF NOT EXISTS "users" (
  "user_id" SERIAL PRIMARY KEY,
  "username" VARCHAR(50) UNIQUE NOT NULL,
  "image" VARCHAR(200),
);

CREATE TABLE IF NOT EXISTS "reviews" (
  "review_id" SERIAL PRIMARY KEY,
  "dateNum" INT,
  "dateStr" VARCHAR(25) NOT NULL,
  "description" VARCHAR(750) NOT NULL,
  "room_id" INT,
  "user_id" INT,
  FOREIGN KEY (room_id) REEFERENCES rooms (room_id),
  FOREIGN KEY (user_id) REEFERENCES users (user_id),
);

CREATE TABLE IF NOT EXISTS "scores" (
  "scores_id" SERIAL PRIMARY KEY,
  "cleanlinessRating" INT,
  "communicationRating" INT,
  "checkInRating" INT,
  "accuracyRating" INT,
  "locationRating" INT,
  "valueRating" INT,
  "totalRating" DECIMAL,
);

CREATE TABLE IF NOT EXISTS "rooms" (
  "room_id" SERIAL PRIMARY KEY,
  "roomNum": INT,
),