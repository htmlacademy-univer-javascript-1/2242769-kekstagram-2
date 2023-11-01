import { arrayObject } from './data.js';
import { bigPhotoClickHandler } from './big_picture.js';

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

const getPhotoElement = (photo) => {
  const clonedPicture = newPictureTemplate.cloneNode(true);
  clonedPicture.querySelector('img').src = photo.url;
  clonedPicture.querySelector('.picture__likes').textContent = photo.likes;
  clonedPicture.querySelector('.picture__comments').textContent = photo.comments.length;
  bigPhotoClickHandler(clonedPicture, photo);

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
