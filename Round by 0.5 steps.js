/*
Round any given number to the closest 0.5 step

I.E.

solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5
Round up if number is as close to previous and next 0.5 steps.

solution(4.75) == 5
*/

function solution(n) {
  let indexOfDot = n.toString().split('').indexOf('.')
  let numAfterDot = n
    .toString()
    .split('')
    .slice(indexOfDot + 1)
  if (+numAfterDot[1] >= 5) {
    numAfterDot[0] = +numAfterDot[0] + 1
  }
  return numAfterDot[0] <= 2
    ? parseInt(n)
    : numAfterDot[0] <= 7
    ? parseInt(n) + 0.5
    : parseInt(n) + 1
}

//---------------------------------------------------------------//
function solution(n) {
  return Math.round(n * 2) / 2 // ok.
}
