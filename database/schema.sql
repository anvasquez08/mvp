DROP DATABASE IF EXISTS events;

CREATE DATABASE events;

USE events;

CREATE TABLE events (
	id INT AUTO_INCREMENT,
	artist VARCHAR(500), 
	url VARCHAR(500),
	image VARCHAR(500), 
	date VARCHAR(500),
	genre VARCHAR(500), 
	venueName VARCHAR(500),
	address VARCHAR(500), 
	city VARCHAR(500),
	zipcode VARCHAR(500),
	PRIMARY KEY(id)
);

-- CREATE TABLE customers (
-- 	id INT AUTO_INCREMENT,
-- 	username VARCHAR(255), 
-- 	password VARCHAR(255)
-- 	PRIMARY KEY (id)
-- );



