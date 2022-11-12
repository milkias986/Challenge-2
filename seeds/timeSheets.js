const {TimeSheet}= require('../models');

const timeSheet=[
    {
        employee_id: 1,
        workDay: new Date('Oct 21, 2022'),
        hours: 6
    },
    {
        employee_id: 2,
        workDay: Date.now(),
        hours: 7
    },
    {
        employee_id: 3,
        workDay: new Date('nov 23, 2022'),
        hours: 8
    },
    {
        employee_id: 4,
        workDay: new Date('dec 01, 2022'),
        hours: 9
    },
    
];


const seedTimeSheet = () => TimeSheet.bulkCreate(timeSheet);

module.exports = seedTimeSheet;

