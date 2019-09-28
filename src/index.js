/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

module.exports = function getTimeForEducation(focus, knowsProgramming, config) {
  let days = 0;
  knowsProgramming ? (days = 800) : (days = 1300);
  return Math.ceil(days / config[focus]);
};
