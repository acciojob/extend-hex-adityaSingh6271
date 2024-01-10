function extendHex(shortHex) {
  // Remove '#' symbol if present and convert to lowercase
  let hex = shortHex.replace('#', '').toLowerCase();

  // If the input is a short hex code, extend it to a full hex code
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(char => char + char) // Repeat each character
      .join('');
  }

  // Add '#' prefix and return the extended hex code
  return `#${hex}`;
}

// Test cases
console.log(extendHex("#abc")); // expected output: "#aabbcc"
console.log(extendHex("abc")); // expected output: "#aabbcc"
console.log(extendHex("#AbC")); // expected output: "#aabbcc" (lowercase)
console.log(extendHex("#f09")); // expected output: "#ff0099"
