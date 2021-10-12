const data = require('../data/zoo_data');

const entrantss = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos sada', age: 50 },
];

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;

  const obj = { adult, child, senior };
  return obj;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (Object.values(entrants).length === 0) return 0;

  let counter = 0;
  const entrantsReturn = Object.entries(countEntrants(entrants));

  if (entrants !== undefined) {
    counter += entrantsReturn[0][1] * 49.99;
    counter += entrantsReturn[1][1] * 20.99;
    counter += entrantsReturn[2][1] * 24.99;

    return counter;
  }
}
console.log(calculateEntry(entrantss));

module.exports = { calculateEntry, countEntrants };
