DROP DATABASE IF EXISTS events;

CREATE DATABASE events;

USE events;

CREATE TABLE events (
	id INT AUTO_INCREMENT,
	artist VARCHAR(100), 
	url VARCHAR(500),
	image VARCHAR(100), 
	date VARCHAR(50),
	genre VARCHAR(100), 
	venueName VARCHAR(255),
	address VARCHAR(255), 
	city VARCHAR(255),
	zipcode VARCHAR(255),
	PRIMARY KEY(id)
);


-- CREATE TABLE customers (
-- 	id INT AUTO_INCREMENT,
-- 	username VARCHAR(255), 
-- 	password VARCHAR(255)
-- 	PRIMARY KEY (id)
-- );



