const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  const hundredths = num % 100;
  if (hundredths <= 4 || hundredths > 20) {
    const tenths = num % 10;
    if (tenths === 1) {
      return nominative;
    }
    if (tenths >= 2 && tenths <= 4) {
      return genitiveSingular;
    }
  }
  return genitivePlural;
};

export { numDecline };
