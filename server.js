const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'employeeTimeKeeper_db'
  },
  console.log(`Connected to the employeeTimeKeeper_db database.`)
);

// Create a new employee
app.post('/api/new-employee', ({ body }, res) => {
    const sql = `INSERT INTO employeeTimeKeeper (employee_name)
      VALUES (?)`;
    const params = [body.employee_name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });
  
  // check all employees
app.get('/api/employeeTimeTracker', (req, res) => {
    const sql = `SELECT id, employee_name AS title FROM employeeTimeTracker`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });