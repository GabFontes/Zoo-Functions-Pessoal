const data = require('../data/zoo_data');

function getAnimalsOlderThan(animals, age) {
  // seu código aqui
  return data.species.find((specie) => specie.name === animals)
  .residents.every((resident) => resident.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
