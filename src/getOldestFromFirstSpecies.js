const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const specie = data.species.find((spc) => spc.id === firstSpecieId).residents;
  const olderAnimal = Object.values(specie.sort((a, b) => a.age - b.age)[specie.length - 1]);
  return olderAnimal;
}

module.exports = getOldestFromFirstSpecies;
