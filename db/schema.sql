DROP DATABASE IF EXISTS employer_db;
CREATE DATABASE employer_db;

USE employer_db;  

CREATE TABLE department (
  id: INT NOT NULL AUTO_INCREMENT,
  name: VARCHAR(30),
  PRIMARY KEY (id)
);
