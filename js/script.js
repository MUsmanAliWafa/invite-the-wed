// simply countdown
simplyCountdown('.simply-countdown', {
  year: 2023, // required
  month: 11, // required
  day: 20, // required
  hours: 8, // Default is 0 [0-23] integer
  words: { //words displayed into the countdown
    days: {
      singular: 'hari',
      plural: 'hari'
    },
    hours: {
      singular: 'jam',
      plural: 'jam'
    },
    minutes: {
      singular: 'menit',
      plural: 'menit'
    },
    seconds: {
      singular: 'detik',
      plural: 'detik'
    }
  },
});

// offcanvas
const stickyTop = document.querySelector('.sticky-top');
const offcanvas = document.querySelector('.offcanvas');


offcanvas.addEventListener('show.bs.offcanvas', function () {
  stickyTop.style.overflow = 'visible';
});


offcanvas.addEventListener('hidden.bs.offcanvas', function () {
  stickyTop.style.overflow = 'hidden';
});


// disablescroll

const rootElement = document.querySelector(":root");

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  }

  rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
  window.onscroll = function () {}
  rootElement.style.scrollBehavior = 'smooth';
  localStorage.setItem('open', 'true');
}

if (!localStorage.getItem('open')) {
  disableScroll();
}

disableScroll();