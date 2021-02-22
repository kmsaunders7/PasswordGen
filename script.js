// create var array for special characters
var symbols = ["!", "@","#","$","%","^","&","*","(",")","_","+","=","-","?","~",".",",","<",">"]
// var for numeric characters
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
// var array upper case characters
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
// var array lower case characters
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

//Ask how many digits they would like in their password...
var length = parseInt(prompt("How long do you want your password? Between 8 and 128 characters"))

//If less than 8 or greater than 128 alert user

  if (length < 8 || length > 128) {
  alert("Number selected must be between 8-128");
  }
  

//Ask user what characters they want in their password with confirm statements...
var includeSymbols = confirm('Would you like to include $pec!@l ch@r@cters? Click OK');

var includeNumbers = confirm('Would you like to include numb3rs? Click OK');

var includeLower = confirm('Would you like to include lowercase lettering? Click OK');

var includeUpper = confirm('Would you like to inlcude UPPERCASE LETTERING? Click OK');

// if user selects cancel on all the prompts... 
if (
  includeSymbols === false &&
  includeNumbers === false &&
  includeLower === false &&
  includeUpper === false
) {
  alert("Must select at least one of the options");
  end
}
// function to generate the password making a different variable, containing the confirmed characters user wants to include
function generatePassword () {
  var inclusion = ""
    if (includeSymbols === true) {
      inclusion += symbols
    }
    if (includeNumbers === true) {
      inclusion += numbers
    }
    if (includeLower === true) {
      inclusion += lowerCase
    } 
    if (includeUpper === true) {
      inclusion += upperCase
    }
  var password = ""
    for (var i = 0; i < length; i++) {
      var randomCharacters = Math.floor(Math.random() * inclusion.length)
      password += inclusion[randomCharacters]
    }
    return password
}


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
