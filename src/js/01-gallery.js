// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import galleryMarkup from '../templates/gallery-items.handlebars';

const galleryContainerRef = document.querySelector('.gallery');

function addItemsToGallery(pics, gallery) {
  gallery.innerHTML = galleryMarkup(pics);
}

addItemsToGallery(galleryItems, galleryContainerRef);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
