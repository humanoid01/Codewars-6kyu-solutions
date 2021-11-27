/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

const high = (s) => {
  let arr = s.split(' ')
  let valArr = []
  const alphabet = {}
  for (let i = 'a'.charCodeAt(), j = 1; i <= 'z'.charCodeAt(); i++, j++) {
    alphabet[i] = j
  }

  const getVal = (s) =>
    s.split('').reduce((acc, s) => acc + alphabet[s.charCodeAt()], 0)

  for (const currEl of arr) {
    valArr.push(getVal(currEl))
  }

  let max = [...valArr].sort((a, b) => b - a)

  return arr[valArr.indexOf(max[0])]
}
