function isPalindrome(x) {
  let numstr = x.toString();
  //reverse the string
  const reversedStr = numstr.split("").reverse().join("");
  console.log(reversedStr);
  return numstr === reversedStr;
}

console.log(isPalindrome(-121));
  