const {Employee}= require('../models');

const employeeData=[
    {
        employee_name: 'abdul Farag',
        user_name: 'abdulFarag90',
        password: 'abdulFarag90'
    },
    {
        employee_name: "Milkias Sirak",
        user_name: "MilkiasSirak89",
        password: "MilkiasSirak89"
    },
    {
        employee_name: "Brandon Hodges",
        user_name: "BrandonHodges22",
        password: "BrandonHodges22"
    },
    {
        employee_name: "Suzie Stephens",
        user_name: "SuzieStephens22",
        password: "SuzieStephens22"
    },
    
];

const seedEmployee = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployee;

