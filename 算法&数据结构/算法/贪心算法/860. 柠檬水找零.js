/**第一遍 */

var lemonadeChange = function (bills) {
  let fiveNum = 0
  let tenNum = 0
  for (let index = 0; index < bills.length; index++) {
    const element = array[index];
    if (element === 5) {
      fiveNum++
    } else if (element === 10) {
      if (fiveNum > 0) {
        fiveNum--
        tenNum++
      } else {
        return false
      }
    } else {
      if (tenNum > 0 && fiveNum > 0) {
        tenNum--
        fiveNum--
      } else if (fiveNum > 2) {
        fiveNum -= 3
      } else {
        return false
      }
    }
  }
  return true
};