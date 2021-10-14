const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const undefinedCase = () => {
  const obj = species.reduce((accumulator, specie) => {
    accumulator[specie.name] = specie.residents.length;
    return accumulator;
  }, {});
  return obj;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return undefinedCase();
  }
  if (Object.values(animal).length === 1) {
    return data.species.find((specie) => specie.name === animal.specie).residents.length;
  }
  return data.species.find((specie) => specie.name === animal.specie).residents
    .filter((key) => key.sex === animal.sex).length;
}
console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
