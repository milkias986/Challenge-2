const sequelize = require('../config/connection');
const seedEmployee = require('./employees');
const seedTimeSheet = require('./timeSheets');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedEmployee();

  await seedTimeSheet();

  process.exit(0);
};

seedAll();
