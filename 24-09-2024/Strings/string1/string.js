function replaceFirstLetterWithAsterisk(inputString) {
  if (inputString.length === 0) {
    return inputString;
  }
  const firstLetter = inputString[0];
  return (
    firstLetter +
    inputString.slice(1).replace(new RegExp(firstLetter, "g"), "*")
  );
}

const inputStr = "cactus";
const outputStr = replaceFirstLetterWithAsterisk(inputStr);
console.log(outputStr);
