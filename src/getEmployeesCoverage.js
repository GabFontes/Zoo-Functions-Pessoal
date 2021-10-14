const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const coverageOfAllWorkingPeople = () => {
  const employeesObj = data.employees.filter((employee) => employee)
  const obj = employeesObj.map((value) => (
    {
      id: value.id,
      fullName: `${value.firstName} ${value.lastName}`,
      species: value.responsibleFor.map((id) => data.species.find((specie) => specie.id === id).name),
      locations: value.responsibleFor.map((id) => data.species.find((specie) => specie.id === id).location),
    }
  ))
  return obj;
};

const covarageOfOneWorkingPeople = (obj) => {
  const all = coverageOfAllWorkingPeople()
  const employeesObj = all.find((employee) => employee.fullName.includes(obj.name) || employee.id === obj.id)
  return employeesObj
};

const verifyPeople = (obj) => {
  const all = coverageOfAllWorkingPeople()
  const employeesObj = all
  .some((employee) => employee.fullName.includes(obj.name) || employee.id === obj.id)
  return employeesObj;
};

function getEmployeesCoverage(obj) {
  if (obj === undefined) return coverageOfAllWorkingPeople();
  const verify = verifyPeople(obj);
  if (Object.keys(obj).length === 1 && verify === true) return covarageOfOneWorkingPeople(obj);
  else {
    throw new Error('Informações inválidas');
  };
}
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
