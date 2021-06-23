// Modal window

const OPEN_POPUP = document.querySelectorAll('.button--open');
const POPUP = document.querySelector('.modal');
const CLOSE_POPUP = POPUP.querySelector('.modal__toggle');

OPEN_POPUP.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    POPUP.classList.remove('visually-hidden');
  });
});

CLOSE_POPUP.addEventListener('click', (evt) => {
  evt.preventDefault();
  POPUP.classList.add('visually-hidden');
});

POPUP.addEventListener('click', (evt) => {
  if (evt.target === POPUP) {
    POPUP.classList.add('visually-hidden');
  }
});

document.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (!POPUP.classList.contains('visually-hidden')) {
      POPUP.classList.add('visually-hidden');
    }
  }
});
