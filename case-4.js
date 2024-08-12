function d(n) {
  var strNumber = n.toString().split('');
  for (var numb in strNumber) {
    n += Number(strNumber[numb]);
  }
  return n;
}

function sumOfSelfNumbers(limit) {
  let isSelfNumber = Array(limit).fill(true);

  for (let i = 1; i < limit; i++) {
    let generatedNumber = d(i);
    if (generatedNumber < limit) {
      isSelfNumber[generatedNumber] = false;
    }
  }

  let sum = 0;
  for (let i = 1; i < limit; i++) {
    if (isSelfNumber[i]) {
      sum += i;
    }
  }

  return sum;
}

const arg = process.argv.slice(2);
if (arg[0] !== '') {
  const numb = Number(arg[0]);

  if (!numb) {
    console.log('===> Insert the value after the script name');
  } else {
    var res = sumOfSelfNumbers(numb);
    console.log(res);
  }
} else {
  console.log('===> Insert the value after the script name');
}
