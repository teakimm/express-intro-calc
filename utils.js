const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  let intNums = [];
  for(str of strNums) {
    const num = Number(str);
    if(isNaN(num)) {
      throw new BadRequestError(`'${str}' is not a number`);
    }
    intNums.push(num);
  }
  return intNums;
}


module.exports = { convertStrNums };