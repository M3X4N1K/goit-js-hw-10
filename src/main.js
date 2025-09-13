// src/main.js

// Підвантаження partials на всіх сторінках
import './js/load-partials.js';

// Підвантаження конкретного JS для сторінки
if (document.querySelector('#datetime-picker')) {
  import('./js/1-timer.js');
} else if (document.querySelector('.form')) {
  import('./js/2-snackbar.js');
}
