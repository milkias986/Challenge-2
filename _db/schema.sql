DROP DATABASE IF EXISTS employeeTimeKeeper_db;
CREATE DATABASE employeeTimeKeeper_db;

USE employeeTimeKeeper_db;

CREATE TABLE employeeTimeKeeper (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  employee_name VARCHAR(100) NOT NULL
);

CREATE TABLE timeKeeper (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    timeKeeper TEXT NOT NULL,
    FOREIGN KEY (employee_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);
