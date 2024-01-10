const extendHex = (shortHex) => {
  // write your code here
	
	function extendHex(shortHex) {
  // Remove # if present and convert to lowercase
  shortHex = shortHex.replace("#", "").toLowerCase();

  // Check if the input is a short hex code (3 characters)
  if (shortHex.length === 3) {
    // Extend the short hex code to a full hex code (repeating each character)
    const fullHex = shortHex
      .split('')
      .map(char => char + char) // Repeat each character
      .join('');

    // Add # prefix to the full hex code
    return `#${fullHex}`;
  } else {
    // If input is not a short hex code, return as is
    return shortHex;
  }
}

// Test cases
console.log(extendHex("#abc")); // expected output: "#aabbcc"
console.log(extendHex("abc")); // expected output: "#aabbcc"
console.log(extendHex("#AbC")); // expected output: "#AABBCC"
console.log(extendHex("#f09")); // expected output: "#ff0099"


// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
