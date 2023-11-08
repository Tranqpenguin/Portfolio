// This function performs a ROT13 substitution on the input string.
function rot13(str) {
  // Use the replace method with a regular expression to match all alphabetic characters.
  return str.replace(/[a-zA-Z]/g, function(char) {
    // Get the Unicode character code of the current character.
    let charCode = char.charCodeAt(0);
    // Determine the offset based on whether the character is uppercase (ASCII range 65-90) or lowercase (ASCII range 97-122).
    let offset = charCode <= 90 ? 65 : 97;
    // Apply the ROT13 transformation: shift the character code by 13 positions, wrapping around if necessary, and convert it back to a character.
    return String.fromCharCode((charCode - offset + 13) % 26 + offset);
  });
};

// Call the function with the input string "SERR PBQR PNZC" and log the result.
console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP" (after ROT13 substitution)
