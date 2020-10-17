-- Postgres Schema

DROP DATABASE IF EXISTS reviews_database;

CREATE DATABASE reviews_database;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS rooms;

CREATE TABLE IF NOT EXISTS "users" (
  "user_id" SERIAL PRIMARY KEY,
  "username" VARCHAR(50) UNIQUE NOT NULL,
  "image" VARCHAR(255),
);

CREATE TABLE IF NOT EXISTS "reviews" (
  "review_id" SERIAL PRIMARY KEY,
  "dateNum" DATE,
  "description" VARCHAR(750) NOT NULL,
  "cleanlinessRating" SMALLINT,
  "communicationRating" SMALLINT,
  "checkInRating" SMALLINT,
  "accuracyRating" SMALLINT,
  "locationRating" SMALLINT,
  "valueRating" SMALLINT,
  "totalRating" DECIMAL,
  "room_id" INT,
  "user_id" INT,
  FOREIGN KEY (room_id) REEFERENCES rooms (room_id),
  FOREIGN KEY (user_id) REEFERENCES users (user_id),
);

CREATE TABLE IF NOT EXISTS "rooms" (
  "room_id" SERIAL PRIMARY KEY,
  "roomNum": INT,
),