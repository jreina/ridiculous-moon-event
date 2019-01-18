const chance = require('chance').Chance();
const nouns = require('./nouns');
const quantifiers = require('./quantifiers');

/**
 * Generate a ridiculous name for a moon event.
 * @returns {string}
 */
module.exports = () => {
  const quantifierCount = chance.natural({ min: 0, max: 2 });
  const quantifierPicks = chance.pickset(quantifiers, quantifierCount);

  const nounCount = chance.natural({ min: 1, max: 4 });
  const nounPicks = chance.pickset(nouns, nounCount);

  const moonArr = [...quantifierPicks, ...nounPicks, 'moon'];
  return moonArr.join(' ');
};
