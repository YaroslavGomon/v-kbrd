const body = document.querySelector('body');

const markup = `  <div class="container">
<div class="keyboard_wrapp">
  <div class="keyboard_keys">
    <div class="row">
      <div class="keys sym"></div>
      <div class="keys sym dig">1</div>
      <div class="keys sym dig">2</div>
      <div class="keys sym dig">3</div>
      <div class="keys sym dig">4</div>
      <div class="keys sym dig">5</div>
      <div class="keys sym dig">6</div>
      <div class="keys sym dig">7</div>
      <div class="keys sym dig">8</div>
      <div class="keys sym dig">9</div>
      <div class="keys sym dig">0</div>
      <div class="keys sym dig">-</div>
      <div class="keys sym dig">=</div>
      <div class="keys backspace_key">Backspace</div>
    </div>
    <div class="row">
      <div class="keys tab_key">Tab</div>
      <div class="keys sym">Q</div>
      <div class="keys sym">W</div>
      <div class="keys sym">E</div>
      <div class="keys sym">R</div>
      <div class="keys sym">T</div>
      <div class="keys sym">Y</div>
      <div class="keys sym">U</div>
      <div class="keys sym">I</div>
      <div class="keys sym">O</div>
      <div class="keys sym">P</div>
      <div class="keys sym dig">[</div>
      <div class="keys sym dig">]</div>
      <div class="keys del_key">Del</div>
    </div>
    <div class="row">
      <div class="keys caps_lock_key">Caps Lock</div>
      <div class="keys sym">A</div>
      <div class="keys sym">S</div>
      <div class="keys sym">D</div>
      <div class="keys sym">F</div>
      <div class="keys sym">G</div>
      <div class="keys sym">H</div>
      <div class="keys sym">J</div>
      <div class="keys sym">K</div>
      <div class="keys sym">L</div>
      <div class="keys sym dig">;</div>
      <div class="keys sym dig">'</div>
      <div class="keys sym dig slash_key"></div>
      <div class="keys enter_key">Enter</div>
    </div>
    <div class="row">
      <div class="keys shift_key shift_left">Shift</div>
      <div class="keys sym">Z</div>
      <div class="keys sym">X</div>
      <div class="keys sym">C</div>
      <div class="keys sym">V</div>
      <div class="keys sym">B</div>
      <div class="keys sym">N</div>
      <div class="keys sym">M</div>
      <div class="keys sym dig">,</div>
      <div class="keys sym dig">.</div>
      <div class="keys sym dig"></div>
      <div class="keys arrow_up">&#9650</div>
      <div class="keys shift_key shift_right">Shift</div>
    </div>
    <div class="row">
      <div class="keys ctrl_key ctrl_left">Ctrl</div>
      <div class="keys win_key">Win</div>
      <div class="keys alt_key alt_left">Alt</div>
      <div class="keys space_key"></div>
      <div class="keys alt_key alt_right">Alt</div>
      <div class="keys arrow_left">&#9664</div>
      <div class="keys arrow_down">&#9660</div>
      <div class="keys arrow_right">&#9654</div>
      <div class="keys ctrl_key ctrl_right">Ctrl</div>
    </div>
  </div>
  </div>
  <div>Left Alt + Left Ctrl to Language change</div>
  <input class="text" type="text">
  </div>
`;

body.insertAdjacentHTML('afterbegin', markup);

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

const digitsShiftEn = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  '{',
  '}',
  ':',
  '"',
  '|',
  '<',
  '>',
  '?',
];

const digitsEn = [
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
  '[',
  ']',
  ';',
  "'",
  '\\',
  ',',
  '.',
  '/',
];

const digitsRu = [
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
  'х',
  'ъ',
  'ж',
  'э',
  '\\',
  'б',
  'ю',
  '.',
];

const digitsShiftRu = [
  '!',
  '"',
  '№',
  ';',
  '%',
  ':',
  '?',
  '*',
  '(',
  ')',
  '_',
  '+',
  'Х',
  'Ъ',
  'Ж',
  'Э',
  '/',
  'Б',
  'Ю',
  ',',
];

let multiPress = 0;
let currentLang = 'en';
let savedLeng;
let savingKeys;

if (localStorage.getItem('lang')) {
  for (let i = 0; i < sym.length; i++) {
    sym[i].textContent = localStorage.getItem(i);
  }
} else {
  for (let i = 0; i < sym.length; i++) {
    sym[i].textContent = smallEn[i];
  }
}

const save = function () {
  for (let i = 0; i < sym.length; i++) {
    localStorage.setItem(i, sym[i].textContent);
  }
  localStorage.setItem('lang', currentLang);
};

save();

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
      if (e.code === i[0] && e.code !== 'CapsLock') {
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
      save();
    } else {
      for (let i = 0; i < sym.length; i++) {
        sym[i].textContent = smallEn[i];
      }
      currentLang = 'en';
      multiPress = 0;
      save();
    }
  }
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Shift' && currentLang === 'en') {
    for (let i = 0; i < sym.length; i++) {
      sym[i].textContent = sym[i].textContent.toUpperCase();
    }
    for (let i = 0; i < dig.length; i++) {
      dig[i].textContent = digitsShiftEn[i];
    }
  }
  if (e.key === 'Shift' && currentLang === 'ru') {
    for (let i = 0; i < sym.length; i++) {
      sym[i].textContent = sym[i].textContent.toUpperCase();
    }
    for (let i = 0; i < dig.length; i++) {
      dig[i].textContent = digitsShiftRu[i];
    }
  }
});

window.addEventListener('keyup', function (e) {
  if (e.key === 'Shift' && currentLang === 'en') {
    for (let i = 0; i < sym.length; i++) {
      sym[i].textContent = sym[i].textContent.toLowerCase();
    }
    for (let i = 0; i < dig.length; i++) {
      dig[i].textContent = digitsEn[i];
    }
  }
  if (e.key === 'Shift' && currentLang === 'ru') {
    for (let i = 0; i < sym.length; i++) {
      sym[i].textContent = sym[i].textContent.toLowerCase();
    }
    for (let i = 0; i < dig.length; i++) {
      dig[i].textContent = digitsRu[i];
    }
  }
});

window.addEventListener('keyup', function (e) {
  if (e.key === 'CapsLock' && e.getModifierState('CapsLock')) {
    caps_lock_key.classList.add('active');
    for (let i = 0; i < sym.length; i++) {
      sym[i].textContent = sym[i].textContent.toUpperCase();
    }
    save();
    localStorage.setItem('caps', caps_lock_key.classList.contains('active'));
  }
  if (e.key === 'CapsLock' && !e.getModifierState('CapsLock')) {
    caps_lock_key.classList.remove('active');
    caps_lock_key.classList.remove('remove');
    for (let i = 0; i < sym.length; i++) {
      sym[i].textContent = sym[i].textContent.toLowerCase();
    }
    save();
  }
});

window.addEventListener('DOMContentLoaded', function () {
  if (keys[15].textContent === keys[15].textContent.toUpperCase()) {
    caps_lock_key.classList.add('active');
  }
});
