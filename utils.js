const UPPERCASE_LETTERS_FIRST_ASCII_CODE = 65;
const UPPERCASE_LETTERS_LAST_ASCII_CODE = 90;

const LOWERCASE_LETTERS_FIRST_ASCII_CODE = 97;
const LOWERCASE_LETTERS_LAST_ASCII_CODE = 122;

const SPECIAL_CHAR_FIRST_ASCII_CODE = 33;
const SPECIAL_CHAR_LAST_ASCII_CODE = 47;

function getRandomUppercaseLetter() {
  const randomCode = getRandomNumberFromTo(
    UPPERCASE_LETTERS_FIRST_ASCII_CODE,
    UPPERCASE_LETTERS_LAST_ASCII_CODE
  );
  return getCharacter(randomCode);
}

function getRandomLowercaseLetter() {
  const randomCode = getRandomNumberFromTo(
    LOWERCASE_LETTERS_FIRST_ASCII_CODE,
    LOWERCASE_LETTERS_LAST_ASCII_CODE
  );
  return getCharacter(randomCode);
}

function getRandomNumber() {
  return getRandomNumberFromTo(0, 9);
}

function getRandomSpecialCharacter() {
  const randomCode = getRandomNumberFromTo(
    SPECIAL_CHAR_FIRST_ASCII_CODE,
    SPECIAL_CHAR_LAST_ASCII_CODE
  );
  return getCharacter(randomCode);
}

function getCharacter(asciiCode) {
  return String.fromCharCode(asciiCode);
}

export function getRandomNumberFromTo(min, max) {
  return Math.floor(min + (max - min) * Math.random());
}

export function generateOptionChar(option) {
  let char;
  switch (option) {
    case "uppercase":
      char = getRandomUppercaseLetter();
      break;
    case "lowercase":
      char = getRandomLowercaseLetter();
      break;
    case "numbers":
      char = getRandomNumber();
      break;
    case "special":
      char = getRandomSpecialCharacter();
      break;
  }

  return char;
}
