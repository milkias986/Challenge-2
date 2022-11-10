DROP DATABASE IF EXISTS employeeTimeTracker_db;
CREATE DATABASE employeeTimeTracker_db;

USE employeeTimeTracker_db;

CREATE TABLE employeeTimeTracker (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  employee_name VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (employee_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);
