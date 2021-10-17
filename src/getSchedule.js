const data = require('../data/zoo_data');

const { hours, species } = data;

const allSchedules = () => {
  const hoursKeys = Object.keys(hours);
  const schedules = hoursKeys.reduce((acc, currentValue) => {
    acc[currentValue] = {
      officeHour: `Open from ${hours[currentValue].open}am until ${hours[currentValue].close}pm`,
      exhibition: species.filter((specie) => specie.availability
        .includes(currentValue)).map((obj) => obj.name),
    };
    return acc;
  }, {});
  schedules.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return schedules;
};

const keysChecker = () => {
  const allObj = allSchedules();
  const objKeys = Object.keys(allObj);
  return objKeys;
};

const animalsList = () => species.map((specie) => specie.name);

const animalAsvailability = (animal) => species
  .find((specie) => specie.name === animal).availability;

const objKeys = keysChecker();
const allObj = allSchedules();
const allAnimals = animalsList();

function getSchedule(target) {
  if (objKeys.includes(target)) return { [target]: allObj[target] };
  if (target === undefined) return allObj;
  if (allAnimals.includes(target)) return animalAsvailability(target);
  return allObj;
}
console.log(getSchedule());

module.exports = getSchedule;
