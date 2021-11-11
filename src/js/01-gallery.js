// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryContainerRef = document.querySelector('.gallery');

addItemsToGallery(galleryItems, galleryContainerRef);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createPicMarkup({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
<img class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"/>
</a>`;
}

function addItemsToGallery(pics, gallery) {
  gallery.innerHTML = pics.map(createPicMarkup).join('');
}

console.log('questions>?');
