SELECT employees.employee_name AS employee, timeSheets.timesheet
FROM timeSheets
LEFT JOIN employees
ON reviews.movie_id = employees.id
ORDER BY employees.employee_name;
