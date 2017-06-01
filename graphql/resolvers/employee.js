const db = require('../database/database/sequelize');

function getEmployee(args) {
  return db.employees.findById(args.id);
}

function getEmployees(args) {
  return db.employees.findAll({
    where: args.filter,
    offset: args.offset,
    limit: args.limit,
  });
}

module.exports = { getEmployee, getEmployees };

