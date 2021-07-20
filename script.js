import { generateOptionChar, getRandomNumberFromTo } from "./utils.js";

const generatedPasswordInput = document.getElementById("password");
const rangeInput = document.getElementById("passwordRange");
const passLength = document.getElementById("passLength");
const passwordOptionsElement = document.getElementById("options");
const generatePasswordButton = document.getElementById("generatePass");
const copyToClipBoardButton = document.getElementById("copyButton");

let selectedOptions = [];

window.onload = handleRangeInput;
rangeInput.addEventListener("input", handleRangeInput);
generatePasswordButton.addEventListener("click", showGeneratedPassword);
copyToClipBoardButton.addEventListener("click", handleCopyButtonClicked);

function handleRangeInput() {
  passLength.innerText = rangeInput.value;
  generatedPasswordInput.value && showGeneratedPassword();
}

function showGeneratedPassword() {
  generatedPasswordInput.value = generatePassword();
}

function handleCopyButtonClicked() {
  generatedPasswordInput.select();
  document.execCommand("copy");
  deselectPassword();
}

function generatePassword() {
  const passLength = rangeInput.value;

  selectedOptions = getSelectedOptions();

  const selectedOptionsCount = selectedOptions.length;

  if (!selectedOptionsCount) return "";

  const charsCountSplit = splitLengthRandomly(passLength, selectedOptionsCount);

  let generatedPassword = "";

  for (let i = 0; i < passLength; i++) {
    const randomOptionIndex = getRandomNumberFromTo(0, selectedOptionsCount);

    if (!charsCountSplit[selectedOptions[randomOptionIndex]]) {
      delete charsCountSplit[selectedOptions[randomOptionIndex]];
    }
    const char = generateOptionChar(selectedOptions[randomOptionIndex]);

    charsCountSplit[selectedOptions[randomOptionIndex]]--;

    generatedPassword += char;
  }

  return generatedPassword;
}

function deselectPassword() {
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
}

function getSelectedOptions() {
  const options = [...passwordOptionsElement.querySelectorAll("div > input")];
  const selectedOptions = options
    .filter((option) => option.checked)
    .map((option) => option.name);
  return selectedOptions;
}

function splitLengthRandomly(length, portions) {
  let finalSplit = [];

  // At least one occurrence of a chosen option
  for (let i = 0; i < portions; i++) {
    const option = selectedOptions[i];
    finalSplit[option] = 1;
  }

  for (let i = 0; i < length - portions; i++) {
    const randomIndex = getRandomNumberFromTo(0, portions);
    const randomOption = selectedOptions[randomIndex];
    finalSplit[randomOption]++;
  }

  return finalSplit;
}
