// Navigation block

const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

// Modal window

const OPEN_POPUP = document.querySelectorAll('.buy-tour');
const POPUP = document.querySelector('.order');
const CLOSE_POPUP = POPUP.querySelector('.order__toggle');
const ORDER_FORM = POPUP.querySelector('.order__form');
const TELEPHONE_ORDER = ORDER_FORM.querySelector('#order__telephone');
const EMAIL_ORDER = ORDER_FORM.querySelector('#order__e-mail');

const SENT_DELIVERY = document.querySelector('.sent');
const CLOSE_SENT = SENT_DELIVERY.querySelector('.sent__toggle');

OPEN_POPUP.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    POPUP.classList.remove('visually-hidden');
    TELEPHONE_ORDER.focus();
  });
});

const closePopupButton = (popup, btn) => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.add('visually-hidden');
  });
};

closePopupButton(SENT_DELIVERY, CLOSE_SENT);
closePopupButton(POPUP, CLOSE_POPUP);

const closePopupOverlay = (popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      popup.classList.add('visually-hidden');
    }
  });
}

closePopupOverlay(POPUP);
closePopupOverlay(SENT_DELIVERY);

document.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (!POPUP.classList.contains('visually-hidden')) {
      POPUP.classList.add('visually-hidden');
    }
    if (!SENT_DELIVERY.classList.contains('visually-hidden')) {
      SENT_DELIVERY.classList.add('visually-hidden');
    }
  }
});

// Order form

ORDER_FORM.addEventListener('submit', (evt) => {
  evt.preventDefault();

  localStorage.setItem('order__telephone', TELEPHONE_ORDER.value);
  localStorage.setItem('order__e-mail', EMAIL_ORDER.value);
  POPUP.classList.add('visually-hidden');
  SENT_DELIVERY.classList.remove('visually-hidden');
  TELEPHONE_ORDER.value = '';
  EMAIL_ORDER.value = '';
});

// Feedback form

const FEEDBACK_FORM = document.querySelector('.feedback__form')
const TELEPHONE_FEEDBACK = FEEDBACK_FORM.querySelector('#feedback__telephone');
const EMAIL_FEEDBACK = FEEDBACK_FORM.querySelector('#feedback__e-mail');

FEEDBACK_FORM.addEventListener('submit', (evt) => {
  evt.preventDefault();

  localStorage.setItem('feedback__telephone', TELEPHONE_FEEDBACK.value);
  localStorage.setItem('feedback__e-mail', EMAIL_FEEDBACK.value);
  SENT_DELIVERY.classList.remove('visually-hidden');
  EMAIL_FEEDBACK.value = '';
  TELEPHONE_FEEDBACK.value = '';
});


// Tabs block

const TABS = document.querySelectorAll('.description__wrap');
const REVIEWS = document.querySelectorAll('.reviews__wrap');

const GREECE_BTN = document.querySelector('#greece');
const GREECE_LINK = document.querySelector('.preview__container--greece');
const GREECE_TAB = document.querySelector('.description__wrap--greece');
const GREECE_REVIEWS = document.querySelector('.reviews__wrap--greece');

const ALBANIA_BTN = document.querySelector('#albania');
const ALBANIA_LINK = document.querySelector('.preview__container--albania');
const ALBANIA_TAB = document.querySelector('.description__wrap--albania');
const ALBANIA_REVIEWS = document.querySelector('.reviews__wrap--albania');

const MACEDONIA_BTN = document.querySelector('#macedonia');
const MACEDONIA_LINK = document.querySelector('.preview__container--macedonia');
const MACEDONIA_TAB = document.querySelector('.description__wrap--macedonia');
const MACEDONIA_REVIEWS = document.querySelector('.reviews__wrap--macedonia');

const MONTENEGRO_BTN = document.querySelector('#montenegro');
const MONTENEGRO_LINK = document.querySelector('.preview__container--montenegro');
const MONTENEGRO_TAB = document.querySelector('.description__wrap--montenegro');
const MONTENEGRO_REVIEWS = document.querySelector('.reviews__wrap--montenegro');

const CROATIA_BTN = document.querySelector('#croatia');
const CROATIA_LINK = document.querySelector('.preview__container--croatia');
const CROATIA_TAB = document.querySelector('.description__wrap--croatia');
const CROATIA_REVIEWS = document.querySelector('.reviews__wrap--croatia');

const changeTabLink = (link, tab, reviews) => {
  link.addEventListener('click', (evt) => {
    TABS.forEach((element) => {
      if (!element.classList.contains('visually-hidden')) {
        element.classList.add('visually-hidden');
      }
    });
    REVIEWS.forEach((element) => {
      if (!element.classList.contains('visually-hidden')) {
        element.classList.add('visually-hidden');
      }
    });
    tab.classList.remove('visually-hidden');
    reviews.classList.remove('visually-hidden');
  });
};

changeTabLink(GREECE_LINK, GREECE_TAB, GREECE_REVIEWS);
changeTabLink(ALBANIA_LINK, ALBANIA_TAB, ALBANIA_REVIEWS);
changeTabLink(MACEDONIA_LINK, MACEDONIA_TAB, MACEDONIA_REVIEWS);
changeTabLink(MONTENEGRO_LINK, MONTENEGRO_TAB, MONTENEGRO_REVIEWS);
changeTabLink(CROATIA_LINK, CROATIA_TAB, CROATIA_REVIEWS);

const changeTab = (btn, tab, reviews, img) => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    TABS.forEach((element) => {
      if (!element.classList.contains('visually-hidden')) {
        element.classList.add('visually-hidden');
      }
    });
    REVIEWS.forEach((element) => {
      if (!element.classList.contains('visually-hidden')) {
        element.classList.add('visually-hidden');
      }
    });
    tab.classList.remove('visually-hidden');
    reviews.classList.remove('visually-hidden');
  });
};

changeTab(GREECE_BTN, GREECE_TAB, GREECE_REVIEWS);
changeTab(ALBANIA_BTN, ALBANIA_TAB, ALBANIA_REVIEWS);
changeTab(MACEDONIA_BTN, MACEDONIA_TAB, MACEDONIA_REVIEWS);
changeTab(MONTENEGRO_BTN, MONTENEGRO_TAB, MONTENEGRO_REVIEWS);
changeTab(CROATIA_BTN, CROATIA_TAB, CROATIA_REVIEWS);
