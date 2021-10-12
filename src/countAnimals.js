const data = require('../data/zoo_data');

const undefinedCase = () => {
  const obj = data.species.reduce((accumulator, specie) => {
    accumulator[specie.name] = specie.residents.length;
    return accumulator;
  }, {});
  return obj;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return undefinedCase();
  }
  if (animal.specie !== undefined) {
    return 'a';
  }
  if (animal.specie !== undefined && animal.sex !== undefined) {
    return 'b';
  }
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
