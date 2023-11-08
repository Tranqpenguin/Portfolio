// This function takes a number as input and converts it to a Roman numeral.
function convertToRoman(num) {
  // An array of objects representing Roman numerals and their corresponding values.
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  // Initialize an empty string to store the Roman numeral representation.
  let roma = '';

  // Iterate through the romanNumerals array.
  for(let i = 0; i < romanNumerals.length; i++){
    // While the input number is greater than or equal to the current Roman numeral value.
    while(num >= romanNumerals[i].value){
      // Subtract the current Roman numeral value from the input number.
      num -= romanNumerals[i].value;
      // Add the corresponding symbol to the result string.
      roma += romanNumerals[i].symbol;
    }
  }

  // Return the Roman numeral representation of the input number.
  return roma;
}

// Call the function with an input of 36 and log the result.
console.log(convertToRoman(36)); // Output: XXXVI
