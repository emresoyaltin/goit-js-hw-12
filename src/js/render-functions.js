import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createGallery(images) {
    const galleryList = document.querySelector(".gallery");
    
    const galleryMarkup = images.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => 
        `<li class="list-item">
            <div class="card">
                <a class="card-link" href="${largeImageURL}">
                    <img class="card-img" src="${webformatURL}" alt="${tags}" />
                </a>
                    <div class="card-info">
                        <ul class="card-list">
                            <li class="card-list-info">
                                <h2 class="card-info-title">Likes</h2>
                                <p class="card-info-text">${likes}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Views</h2>
                                <p class="card-info-text">${views}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Comments</h2>
                                <p class="card-info-text">${comments}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Downloads</h2>
                                <p class="card-info-text">${downloads}</p>
                            </li>
                        </ul>
                    </div>
            </div>
        </li>`
    ).join("");

    galleryList.innerHTML = galleryMarkup;
    lightboxModal();

}

let galleryModal = null;

export function lightboxModal() {
    if (galleryModal) {
        return galleryModal.refresh();
    } else {
        galleryModal = new SimpleLightbox(`.gallery a`, {
            captionsData: "alt",
            captionDelay: 250,
        })
    }
}

export function addGallery(images) {
    const galleryList = document.querySelector(".gallery");
    
    const galleryMarkup = images.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => 
        `<li class="list-item">
            <div class="card">
                <a class="card-link" href="${largeImageURL}">
                    <img class="card-img" src="${webformatURL}" alt="${tags}" />
                </a>
                    <div class="card-info">
                        <ul class="card-list">
                            <li class="card-list-info">
                                <h2 class="card-info-title">Likes</h2>
                                <p class="card-info-text">${likes}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Views</h2>
                                <p class="card-info-text">${views}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Comments</h2>
                                <p class="card-info-text">${comments}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Downloads</h2>
                                <p class="card-info-text">${downloads}</p>
                            </li>
                        </ul>
                    </div>
            </div>
        </li>`
    ).join("");

    galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
    lightboxModal();
}



export function clearGallery() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
};

export function showLoader() {
    const loader = document.querySelector(".loader");
    loader.classList.remove("hidden");
};

export function hideLoader() {
    const loader = document.querySelector(".loader");
    loader.classList.add("hidden");
}

export function showLoadMoreButton() {
    const loadMoreBtn = document.querySelector(".load-button");
    loadMoreBtn.classList.remove("hidden");
}

export function hideLoadMoreButton() {
    const loadMoreBtn = document.querySelector(".load-button");
    loadMoreBtn.classList.add("hidden");
}
