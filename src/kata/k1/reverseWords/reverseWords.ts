
export const reverseWords = (s: string): string => {
  // get the words, reverse the words, return
  return s.split(' ').map((word) => {
    return word.split('').reverse().join('');
  }).join(' ');
}
