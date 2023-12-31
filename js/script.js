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
const song = document.querySelector('#song');
const audioIcon = document.querySelector('.bi-disc')
const audoIconWrapper = document.querySelector('.audio-icon-wrapper');
let isPlaying = false;


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
  playAudio();
  // localStorage.setItem('opened', 'true');
}

function playAudio() {
  song.volume = 0.3;
  audoIconWrapper.style.display = 'flex';
  song.play();
  isPlaying = true;
}

// buat logic click song
audoIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove('bi-disc');
    audioIcon.classList.add('bi-pause-circle');
  } else {
    song.play();
    audioIcon.classList.add('bi-disc');
    audioIcon.classList.remove('bi-pause-circle');
  }

  isPlaying = !isPlaying;
}

// if (!localStorage.setItem('opened')) {
//   disableScroll();
// }

disableScroll();


// form
window.addEventListener("load", function () {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Konfirmasi kehadiran berhasil terkirim!");
      })
  });
});


// nama untuk tamu undangan
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('n') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i, ';
const namaContainer = document.querySelector('.hero h4 span');
namaContainer.innerText = `${pronoun}, ${nama}, `.replace(/ ,$/, ',');

document.querySelector('#nama').value = nama;






// tahun
let currentYear = new Date().getFullYear();
document.querySelector(".copyright-year").textContent = currentYear;