function isCircularPalindrome(word) {
  var strSplit = word.toLowerCase().split('');
  var strMid = Math.floor(strSplit.length / 2);

  let res = true;
  for (let s = 0; s < strSplit.length; s++) {
    if (strSplit.length % 2 == 0) {
      if (strSplit[s] !== strSplit[strSplit.length - 1 - s]) {
        res = false;
      }
    } else {
      if (s !== strMid && strSplit[s] !== strSplit[strSplit.length - 1 - s]) {
        res = false;
      }
    }
  }
  return res;
}

const arg = process.argv.slice(2);
if (arg[0] && arg[0] !== '') {
  var res = isCircularPalindrome(arg[0]);
  console.log(res);
} else {
  console.log('===> Insert the value after the script name');
}
