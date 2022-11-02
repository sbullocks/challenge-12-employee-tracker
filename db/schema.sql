DROP DATABASE IF EXISTS employer_db;
CREATE DATABASE employer_db;

USE employer_db;  

CREATE TABLE department (
  id: INT NOT NULL AUTO_INCREMENT,
  name: VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title: VARCHAR(30) NOT NULL,
  salary: DECIMAL NOT NULL,
  department_id: INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department_id  
);
