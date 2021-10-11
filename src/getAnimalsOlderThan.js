const data = require('../data/zoo_data');

function getAnimalsOlderThan(animals, age) {
  return data.species.find((spc) => spc.name === animals)
    .residents.every((resident) => resident.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
