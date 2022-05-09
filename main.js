const keyboard_wrapp = document.querySelector('.keyboard_wrapp');
const keys = document.querySelectorAll('.keys');
const spaceKey = document.querySelector('.space_key');
const shift_left = document.querySelector('.shift_left');
const shift_right = document.querySelector('.shift_right');
const ctrl_left = document.querySelector('.ctrl_left');
const ctrl_right = document.querySelector('.ctrl_right');
const alt_left = document.querySelector('.alt_left');
const alt_right = document.querySelector('.alt_right');
const caps_lock_key = document.querySelector('.caps_lock_key');
const body = document.querySelector('body');
const text_input = document.querySelector('.text');
const arrow_up = document.querySelector('.arrow_up');
const arrow_left = document.querySelector('.arrow_left');
const arrow_down = document.querySelector('.arrow_down');
const arrow_right = document.querySelector('.arrow_right');
const tab_key = document.querySelector('.tab_key');
const del_key = document.querySelector('.del_key');
const backspace_key = document.querySelector('.backspace_key');
const win_key = document.querySelector('.win_key');
const enter_key = document.querySelector('.enter_key');
const sym = document.querySelectorAll('.sym');
const dig = document.querySelectorAll('.dig');

const smallEn = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  '\\',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
];

const smallRu = [
  'ё',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ъ',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'э',
  '\\',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю',
  '.',
];

const specialKeys = [
  ['Tab', tab_key],
  ['CapsLock', caps_lock_key],
  ['ShiftLeft', shift_left],
  ['ShiftRight', shift_right],
  ['ControlLeft', ctrl_left],
  ['ControlRight', ctrl_right],
  ['MetaLeft', win_key],
  ['Space', spaceKey],
  ['Backspace', backspace_key],
  ['Delete', del_key],
  ['Enter', enter_key],
  ['AltLeft', alt_left],
  ['AltRight', alt_right],
  ['ArrowUp', arrow_up],
  ['ArrowLeft', arrow_left],
  ['ArrowDown', arrow_down],
  ['ArrowRight', arrow_right],
];

let multiPress = 0;
let currentLang = 'en';

for (let i of keys) {
  i.addEventListener('mousedown', function (e) {
    i.classList.add('active');
  });

  i.addEventListener('mouseup', function (e) {
    i.classList.remove('active');
  });
  window.addEventListener('keydown', function (e) {
    if (e.key == i.textContent.toLowerCase()) {
      i.classList.add('active');
    }
    for (let i of specialKeys) {
      if (e.code === 'Tab' || e.key === 'Alt') {
        e.preventDefault();
      }
      if (e.code === i[0]) {
        i[1].classList.add('active');
      }
    }
  });

  window.addEventListener('keyup', function (e) {
    if (e.key == i.textContent.toLowerCase()) {
      i.classList.remove('active');
      i.classList.add('remove');
    }
    for (let i of specialKeys) {
      if (e.code === i[0]) {
        i[1].classList.remove('active');
        i[1].classList.remove('remove');
      }
    }
    setTimeout(() => {
      i.classList.remove('remove');
    }, 200);
  });
}

window.addEventListener('keydown', function (e) {
  if (e.code === 'AltLeft') {
    multiPress++;
  }
  if (e.code === 'ControlLeft') {
    multiPress++;
    if (multiPress === 2 && currentLang === 'en') {
      for (let i = 0; i < sym.length; i++) {
        sym[i].textContent = smallRu[i];
      }
      currentLang = 'ru';
      multiPress = 0;
    } else {
      for (let i = 0; i < sym.length; i++) {
        sym[i].textContent = smallEn[i];
      }
      currentLang = 'en';
      multiPress = 0;
    }
  }
});

// Shift key

window.addEventListener('keydown', function (e) {
  if (e.key === 'Shift') {
    for (let i = 0; i < sym.length; i++) {
      sym[i].textContent = sym[i].textContent.toUpperCase();
    }
  }
});

window.addEventListener('keyup', function (e) {
  if (e.key === 'Shift') {
    for (let i = 0; i < sym.length; i++) {
      sym[i].textContent = sym[i].textContent.toLowerCase();
    }
  }
});

// for (let i = 0; i < keys.length; i++) {
//   localStorage.setItem(i, keys[i].textContent);
// }

// console.log(localStorage.getItem('55'));

for (let i = 0; i < sym.length; i++) {
  sym[i].textContent = smallEn[i];
}
