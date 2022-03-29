// Add imports above this line
import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const $div = document.querySelector('.gallery');
const HTMLToWebsite = [];

for (const item of galleryItems) {
  const htmlWithNewVariables = `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"</a>`;
  HTMLToWebsite.push(htmlWithNewVariables);
}

const readyHTMLToWebsite = HTMLToWebsite.join('');

$div.insertAdjacentHTML('afterbegin', readyHTMLToWebsite);

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});
