import { movies } from './movie.js';

const rowGrowcastItems = document.getElementById("growcast-items");
const rowWebinarItems = document.getElementById("webinar-items");
const rowUxUiItems = document.getElementById("uxUi-items");
const rowDiversosItems = document.getElementById("diversos-items");

const growcastItems = movies.filter((movie) => movie.category === "Growcast [Episódios]");
const webinarItems = movies.filter((movie) => movie.category === "Webinar em Flutter");
const uxUiItems = movies.filter((movie) => movie.category === "Jornada UX/UI");
const diversosItems = movies.filter((movie) => movie.category === "Diversos");

const iframeMovie = document.getElementById("iframe-movie");
const movieModalEl = document.getElementById("movie-modal");
const movieModal = new bootstrap.Modal(movieModalEl);



function renderItems(element, items) {
    items.forEach((item) => {
        element.innerHTML += `
            <div class="col-12 col-sm-6 col-md-3 col-movie">
                <div class="item-hover">
                    <img src="${item.img}" alt="Imagem ilustrativa para ${item.title}" class="img-fluid">
                        <p class="detail-movie" data-link="${item.link}" onclick="openMovie(this)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"></path>
                            </svg>
                        <span>${item.title}</span>
                    </p>
                </div>
            </div>
        `;
    });
};

function openMovie(element) {
    const link = element.getAttribute("data-link");
    console.log(link);
    iframeMovie.innerHTML = `
    <iframe src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
    movieModal.show();
}
window.openMovie = openMovie;

renderItems(rowGrowcastItems, growcastItems);
renderItems(rowWebinarItems, webinarItems);
renderItems(rowUxUiItems, uxUiItems);
renderItems(rowDiversosItems, diversosItems);