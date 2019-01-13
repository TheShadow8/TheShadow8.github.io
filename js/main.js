// Close navbar when seclected nav item
const navMenu = document.querySelector('.navigation__checkbox');
const navList = document.querySelector('.navigation__list');
const slider = document.querySelector('.items');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');

const scrollWidth = slider.scrollWidth;
const offsetWidth = slider.offsetWidth;

galleryPrev.onclick = e => {
  e.preventDefault();
  slider.scrollLeft = slider.scrollLeft - 300;
};

galleryNext.onclick = e => {
  e.preventDefault();
  slider.scrollLeft = slider.scrollLeft + 300;
};

const hiddenBtn = () => {
  if (slider.scrollLeft < 10) {
    galleryPrev.classList.add('hidden');
  }
  if (slider.scrollLeft > 10) {
    galleryPrev.classList.remove('hidden');
  }

  if (scrollWidth - 100 < slider.scrollLeft + offsetWidth) {
    galleryNext.classList.add('hidden');
  }

  if (scrollWidth - 100 > slider.scrollLeft + offsetWidth) {
    galleryNext.classList.remove('hidden');
  }
};

slider.addEventListener('scroll', e => {
  hiddenBtn();
});
