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
        <div class="col-12 col-sm-6 col-xl-3 col-movie">
          <div class="item-hover position-relative overflow-hidden rounded-3" style="height: 230px;">
            <img src="${item.img}" alt="${item.title}" class="w-100 h-100 object-fit-cover rounded-3">
            <p class="detail-movie position-absolute bottom-0 start-0 w-100 text-white m-0 py-2 px-3 bg-dark bg-opacity-75 d-flex align-items-center gap-2"
               data-link="${item.link}" onclick="openMovie(this)" style="cursor: pointer;">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-play-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
              </svg>
              <span class="fs-6">${item.title}</span>
            </p>
          </div>
        </div>
      `;
    });
  }


function openMovie(element) {
    const link = element.getAttribute("data-link");
    console.log(link);
    iframeMovie.innerHTML = `
    <iframe src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
    movieModal.show();
}
window.openMovie = openMovie;


function openMovieFromButton(link) {
  iframeMovie.innerHTML = `
    <iframe src="${link}" title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
  `;
  movieModal.show();
}
window.openMovieFromButton = openMovieFromButton;

renderItems(rowGrowcastItems, growcastItems);
renderItems(rowWebinarItems, webinarItems);
renderItems(rowUxUiItems, uxUiItems);
renderItems(rowDiversosItems, diversosItems);