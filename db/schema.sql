/*creates 'burger' database in MySQL*/

CREATE DATABASE burger_db;

//selects the 'burger' database for use
USE burger_db;

/*creates table within db and code within parentheses creates 
column names, assigns data types to those columms, and indicates 
how many characters or number places should be availabe for use*/
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean,
date TIMESTAMP,
PRIMARY KEY (id));

