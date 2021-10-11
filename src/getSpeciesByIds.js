const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.some((id) => specie.id === id));
}

getSpeciesByIds();

module.exports = getSpeciesByIds;
