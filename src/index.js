module.exports = function reverse (n) {
    if (n>0)
  return +n.toString().split('').reverse().join('');

  return  (+Math.abs(n).toString().split('').reverse().join(''));

}

