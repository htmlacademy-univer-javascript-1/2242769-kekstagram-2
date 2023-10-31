function getRandomNumber(min, max) {
  if (min <= 0 || min >= max) {
    throw 'Invalid arguments';
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomNumber(2, 11);

function checkStringLength(testToString, maxLength) {
  return testToString.length < maxLength;
}

checkStringLength('qwerty', 45);