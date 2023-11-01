const COUNT = 25;
const MIN_COUNT_LIKE = 15;
const MAX_COUNT_LIKE = 200;
const COMMENTS_COUNT = 5;

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
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const commentArray = (count) => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push({
      id: i,
      avatar: `img/avatar-${getRandomPositiveInteger()}.svg`,
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
      likes: getRandomPositiveInteger(MIN_COUNT_LIKE, MAX_COUNT_LIKE),
      comments: commentArray(getRandomPositiveInteger(COMMENTS_COUNT))
    });
  }
};
addPhotos();
