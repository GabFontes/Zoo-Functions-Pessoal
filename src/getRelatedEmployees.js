const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
// console.log(data.employees[0].managers);

function isManager(id) {
  if (id === stephanieId || id === olaId || id === burlId) {
    return data.employees.some((obj) => obj.id === id);
  }
  return false;
};

function getRelatedEmployees(managerId) {
  const result = isManager(managerId);
  if (result !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
    return data.employees.filter((employee) => employee.managers
    .some((value) => value === managerId))
    .map((name) => `${name.firstName} ${name.lastName}`);
};

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
