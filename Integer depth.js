/*
The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.

example:

let see n=42

Multiple         value         digits     comment
42*1              42            2,4 
42*2              84             8         4 existed
42*3              126           1,6        2 existed
42*4              168            -         all existed
42*5              210            0         2,1 existed
42*6              252            5         2 existed
42*7              294            9         2,4 existed
42*8              336            3         6 existed 
42*9              378            7         3,8 existed
Looking at the above table under digits column you can find all the digits from 0 to 9, Hence it required 9 multiples of 42 to get all the digits. So the depth of 42 is 9. Write a function named computeDepth which computes the depth of its integer argument.Only positive numbers greater than zero will be passed as an input.
*/
function computeDepth(x) {
  let decision = true
  let count = 0
  let arr = []
  let trueArr = []
  while (decision) {
    arr.push((x * ++count).toString().split(''))
    arr = arr.reduce((acc, curr) => [...acc, ...curr], [])
    arr = [...new Set(arr)]
    arr = arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i]) === i) {
        trueArr.push(true)
      }
      if (trueArr.length === 10) {
        return count
      }
    }
    trueArr = []
  }
  return count
}
//==================================================================//
function computeDepth(x) {
  let arr = []
  let i = 0
  while (arr.length !== 10) {
    i++
    arr.push(('' + i * x).split(''))
    arr = arr.reduce((acc, curr) => [...acc, ...curr], [])
    arr = [...new Set(arr)]
    console.log(arr)
  }
  return i
}
console.log(computeDepth(428))
function booleanToString(b) {
  return b ? 'true' : 'false'
}
