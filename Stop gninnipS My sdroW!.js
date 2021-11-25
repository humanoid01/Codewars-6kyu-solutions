/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/
const spinWords = (str) => {
  const arr = str.split(' ')
  const newArr = []
  for (const currEl of arr) {
    if (currEl.length >= 5) {
      newArr.push(currEl.split('').reverse().join(''))
    } else {
      newArr.push(currEl)
    }
  }

  return newArr.reduce((acc, curr) => {
    acc += ' ' + curr
    return acc
  })
}

//---------------------------------------------------------------------------//
function spinWords(string) {
  const arr = string.split(' ')
  return arr
    .map((word) => {
      return word.length >= 5 ? word.split('').reverse().join('') : word
    })
    .join(' ')
}
