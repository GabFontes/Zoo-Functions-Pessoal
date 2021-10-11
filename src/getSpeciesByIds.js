const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
    return data.species.filter((specie) => ids.some((id) => specie.id === id));
}

console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46', '0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
