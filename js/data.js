import { getRandomPositiveInteger } from './util.js';

const COUNT = 25;
const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 33
};

const LIKE_COUNT = {
  MIN: 15,
  MAX: 200
};

const AVATAR_COUNT = {
  MIN: 1,
  MAX: 6
};

const NAMES = [
  'Лука',
  'Эдвард',
  'Алексей',
  'Трей',
  'Андрей'
];

const DESCRIPTION = [
  'Насыщенный день',
  'Красота заката',
  'Ах, аж пиццы захотелось',
  'Вечно вместе, весно врозь',
  'Последние солнечные дни'
];

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const arrayObject = [];

const commentArray = (count) => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push({
      id: i,
      avatar: `img/avatar-${getRandomPositiveInteger(AVATAR_COUNT.MIN, AVATAR_COUNT.MAX)}.svg`,
      message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
      name: NAMES[getRandomPositiveInteger(0, NAMES.lenght - 1)]
    });
  }
  return array;
};


const addPhotos = () => {
  for (let i = 0; i < COUNT; i++) {
    arrayObject.push({
      id: i,
      url: `photos/${i + 1}.jpg`,
      description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
      likes: getRandomPositiveInteger(LIKE_COUNT.MIN, LIKE_COUNT.MAX),
      comments: commentArray(getRandomPositiveInteger(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX))
    });
  }
};

addPhotos();

export { arrayObject };
