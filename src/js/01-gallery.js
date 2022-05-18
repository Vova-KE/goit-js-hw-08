// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const createGalleryMarkup = ({original, preview, description}) => {
    return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
};

const galleryMarkup = galleryItems.map(createGalleryMarkup).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

const handleClickImage = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    let gallery = new SimpleLightbox('.gallery a',
        {
            captionsData: 'alt',
            captionDelay: 250,
        });
    gallery.on('show.simplelightbox', function () {
    });
}

gallery.addEventListener('click', handleClickImage);