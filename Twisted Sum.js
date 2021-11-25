/*
Find the sum of the digits of all the numbers from 1 to N (both ends included).

Examples
# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
*/
function twistedSum(n) {
  let tempArr = []

  for (let i = 1; i <= n; i++) {
    tempArr.push(String(i).split(''))
  }
  console.log(tempArr)

  tempArr = tempArr.flat()

  tempArr = tempArr.map((v) => {
    return Number(v)
  })

  console.log(tempArr)
  return tempArr.reduce((acc, v) => {
    return acc + v
  }, 0)
}
