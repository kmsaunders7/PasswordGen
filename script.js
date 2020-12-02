// create var array for special characters
var specialCharacters = ["!", "@","#","$","%","^","&","*","(",")","_","+","=","-","?","~",".",",","<",">"]
// var for numeric characters
 var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
// var array upper case characters
 var upperCaseCharacters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
// var array lower case characters
 var lowerCaseCharacters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]


//Prompts to ask user what they want in their password....special characters, numbers, upper and/or lowercase letters

var specialChar = confirm('Would you like to include $pec!@l ch@r@cters? Click OK');
var numericChar = confirm('Would you like to include numb3rs? Click OK');
var lowerChar = confirm('Would you like to include lowercase lettering? Click OK');
var upperChar = confirm('Would you like to inlcude UPPERCASE LETTERING? Click OK');

//Ask how many digits they would like in their password...



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
