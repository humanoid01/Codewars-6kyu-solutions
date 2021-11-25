/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
var countBits = function (n) {
  let sum = 0
  let binary = n.toString(2).split('')
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      sum++
    }
  }
  return sum
}
//----------------------------------------------//
var countBits = function (n) {
  if (n === 0) {
    return 0
  }
  let arr = n
    .toString(2)
    .split('')
    .reduce((acc, curr) => (curr === '1' ? +acc + +curr++ : +acc))
  return arr
}

//------------------------------------------------------------//
var countBits = function (n) {
  return n.toString(2).split('0').join('').length
}
