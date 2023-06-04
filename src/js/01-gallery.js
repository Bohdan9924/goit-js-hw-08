import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line



const galleryEl = document.querySelector(".gallery");

const markupGallery = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`
).join("");

galleryEl.insertAdjacentHTML("afterbegin", markupGallery)

const onClick = (event) => {
    event.preventDefault();
    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
    });
    galleryEl.removeEventListener("click", onClick)
};

galleryEl.addEventListener("click", onClick) 