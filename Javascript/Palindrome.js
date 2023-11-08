// This function checks if the input string is a palindrome (reads the same backward as forward) after removing non-alphanumeric characters and ignoring case.
function palindrome(str) {
  // If the input string has a length of 1 or less, it's always a palindrome.
  if(str.length <= 1) return true;
  
  // Initialize left and right pointers for comparing characters from the start and end of the string.
  let left = 0;
  let right = str.length - 1;
  let leftChar, rightChar;
  
  // Loop until the left pointer is less than the right pointer.
  while(left < right){
    // Get characters at left and right pointers.
    leftChar = str[left];
    rightChar = str[right];

    // If the character at the left pointer is not alphanumeric, move the left pointer to the right.
    if(!/[a-zA-Z0-9]/.test(leftChar)){
      left++;
    }
    // If the character at the right pointer is not alphanumeric, move the right pointer to the left.
    else if(!/[a-zA-Z0-9]/.test(rightChar)){
      right--;
    }
    // If both characters are alphanumeric, compare them after converting to lowercase.
    else {
      // If the characters are not equal, the string is not a palindrome.
      if(leftChar.toLowerCase() != rightChar.toLowerCase()){
        return false;
      }
      // Move the pointers inward for the next comparison.
      left++;
      right--;
    }
  }

  // If the loop completes without returning false, the input string is a palindrome.
  return true;
};

// Call the function with the input string "eye" and log the result.
console.log(palindrome("eye")); // Output: true (since "eye" is a palindrome)
