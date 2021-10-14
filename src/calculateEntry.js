const data = require('../data/zoo_data');

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

module.exports = { calculateEntry, countEntrants };
