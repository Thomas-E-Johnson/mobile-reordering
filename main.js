const nav = document.querySelector('.toggleNav');
const dropDown = document.querySelector('.dropDown')

function toggleNav() {
  dropDown.classList.toggle('open');
}

nav.addEventListener('click', toggleNav);
