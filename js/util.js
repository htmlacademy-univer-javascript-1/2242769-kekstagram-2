import { getRandomPositiveInteger } from './random_number.js';

const DELAY = 500;

const isEscape = (evt) => evt.key === 'Escape';

const getRandomElements = (array, elementsCount) => {
  const elementNumbers = [];
  const randomArray = [];

  for(let i = 0; i < array.length; i++){
    const number = getRandomPositiveInteger(0, array.length - 1);

    if(elementNumbers.indexOf(number) === -1){
      randomArray.push(array[number]);
      elementNumbers.push(number);
    }

    if(randomArray.length === elementsCount){
      break;
    }
  }
  return randomArray;
};

const debounce = (callback) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), DELAY);
  };
};

export {isEscape, getRandomElements, debounce};
