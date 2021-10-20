function isPalindrome(str) {
  str - str.replaceAll(' ','')
// return str == str.split('').reverse().join('')
// for ( let i = 0; i < Math.floor(str.length/2); i++)
for ( let i = 0; i < str.length; i++)
let charStart = str[i]
let charEnd = str[str.length - 1 - i]
if(charStart !== charEnd){
  return false
}
return true
}