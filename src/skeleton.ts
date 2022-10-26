/**
 * Adds together two numbers
 * @param a - the first number to add
 * @param b - the second number to add
 * @returns the total
 */
function mostConsecutiveZeroes(number: number): number {
  let maxSoFar = 1;
  let numArr = removeNonZeroes(number);
  let filteredArr = numArr.join('').split('1');
  for(let string of filteredArr){
    if(string.length > maxSoFar){
      maxSoFar = string.length
    }
  }
  return maxSoFar
}

function removeNonZeroes(number: number): string[] {
  let numArr = number.toString().split('');
  for(let i = 0; i<numArr.length; i++){
    if(numArr[i] !== '0'){
      numArr[i] = '1'
    }
  }
  return numArr
}

export default mostConsecutiveZeroes;
