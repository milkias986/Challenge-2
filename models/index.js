const Employee = require('./Employee');
const TimeSheet = require('./TimeSheet');

Employee.hasMany(TimeSheet, {
  foreignKey: 'employee_id',
});

TimeSheet.belongsTo(Employee, {
  foreignKey: 'employee_id',
});

module.exports = { Employee, TimeSheet };
