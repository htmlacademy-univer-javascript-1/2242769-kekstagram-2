import { arrayObject } from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

const getPhotoElement = ({ url, likes, comments }) => {
  const clonedPicture = newPictureTemplate.cloneNode(true);
  clonedPicture.querySelector('img').src = url;
  clonedPicture.querySelector('.picture__likes').textContent = likes;
  clonedPicture.querySelector('.picture__comments').textContent = comments.length;

  return clonedPicture;
};

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < photos.length; i++) {
    fragment.append(getPhotoElement(photos[i]));
  }
  pictureContainer.append(fragment);
};

renderPhotos(arrayObject);
export { pictureContainer };
