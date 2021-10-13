const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  const obj = {};
  if (scheduleTarget === undefined) {
    const entriesss = Object.entries(data.hours);
    
    return entriesss
    // const dia = entriesss.reduce((acc, currentValue) => (currentValue[0] === 'Tuesday') ? currentValue : acc, 0)[0]
  }
}
console.log(getSchedule());

module.exports = getSchedule;
