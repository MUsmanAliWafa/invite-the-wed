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