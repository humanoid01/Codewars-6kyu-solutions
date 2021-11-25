/*
Variation of this nice kata, the war has expanded and become dirtier and meaner; both even and odd numbers will fight with their pointy 1s. And negative integers are coming into play as well, with, ça va sans dire, a negative contribution (think of them as spies or saboteurs).

A number's strength is determined by the number of set bits (1s) in its binary representation. Negative integers work against their own side so their strength is negative. For example -5 = -101 has strength -2 and +5 = +101 has strength +2.

The side with the largest cumulated strength wins.

Again, three possible outcomes: odds win, evens win and tie.

Examples:

bitsWar([1,5,12]) => "odds win" //1+101 vs 1100, 3 vs 2
bitsWar([7,-3,20]) => "evens win" //111-11 vs 10100, 3-2 vs 2
bitsWar([7,-3,-2,6]) => "tie" //111-11 vs -1+110, 3-2 vs -1+2
*/

function bitsWar(numbers) {
  let evenArr = []
  let oddArr = []
  let even = 0
  let odd = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenArr.push(numbers[i])
    } else {
      oddArr.push(numbers[i])
    }
  }

  for (const currEl of evenArr) {
    if (currEl < 0) {
      even -= currEl.toString(2).split('0').join('').length - 1
    } else {
      even += currEl.toString(2).split('0').join('').length
    }
  }

  for (const currEl of oddArr) {
    if (currEl < 0) {
      odd -= currEl.toString(2).split('0').join('').length - 1
    } else {
      odd += currEl.toString(2).split('0').join('').length
    }
  }

  return odd > even ? 'odds win' : odd < even ? 'evens win' : 'tie'
}
//-------------------------------------------------------------------------//
function bitsWar(numbers) {
  let evenVsOdd = [0, 0]
  const points = (n) => n.toString(2).split('0').join('').length

  for (const currEl of numbers) {
    if (currEl < 0) {
      evenVsOdd[-currEl % 2] -= points(currEl) - 1
    } else {
      evenVsOdd[currEl % 2] += points(currEl)
    }
  }

  return evenVsOdd[0] > evenVsOdd[1]
    ? 'evens win'
    : evenVsOdd[0] < evenVsOdd[1]
    ? 'odds win'
    : 'tie'
}
