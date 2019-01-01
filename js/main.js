// Close navbar when seclected nav item
const navMenu = document.querySelector('.navigation__checkbox');
const navList = document.querySelector('.navigation__list');

navList.onclick = e => {
  navMenu.checked = false;
};

// Horizontal Click Drag Scroll Gallery
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

// Scroll
slider.addEventListener('wheel', e => {
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;

  e.preventDefault();
  const x = e.deltaY - slider.offsetLeft;

  const walk = (x - startX) / 2;

  if (e.deltaY < 0) {
    slider.scrollLeft = scrollLeft - walk;
  } else {
    slider.scrollLeft = scrollLeft + walk;
  }
});

// Click Drag
// slider.addEventListener('mousedown', e => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', e => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
// });
