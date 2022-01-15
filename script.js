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

function generatePassword() {
  //creating necessary variables and prompting the user when doing so
  var pwLength = window.prompt("Please choose the length of your password.\n\n(It must be from 8 to 128 characters)", 8);
  while (pwLength < 8 || pwLength > 128) {
    pwLength = window.prompt("Please choose a length between 8 and 128.\n\n", 8);
  }
  
  var isLowercase = window.confirm("Would you like to include the following type of character?\n\n(You must include at least 1 of the 4 types)\n\n  1. lowercase letters");
  var isUppercase = window.confirm("Would you like to include the following type of character?\n\n(You must include at least 1 of the 4 types)\n\n  2. uppercase letters");
  var isNumbers = window.confirm("Would you like to include the following type of character?\n\n(You must include at least 1 of the 4 types)\n\n  3. numbers: 0-9");
  var isSpecial = window.confirm("Would you like to include the following type of character?\n\n(You must include at least 1 of the 4 types)\n\n  4. special characters: ! @ # $ % ^ & * ( ) _ + - =");
  
  //special use case for if they didnt select any character type, needed to prompt them over again
  while (!isLowercase && !isUppercase && !isNumbers && !isSpecial) {
    window.alert("Sorry, you must select at least 1 of the 4 character types:\n\n 1. lowercase numbers\n\n  2. uppercase letters\n\n  3. numbers\n\n  4. special characters");
    isLowercase = window.confirm("Would you like to include the following type of character?\n\n(You must include at least 1 of the 4 types)\n\n  1. lowercase letters");
    isUppercase = window.confirm("Would you like to include the following type of character?\n\n(You must include at least 1 of the 4 types)\n\n  2. uppercase letters");
    isNumbers = window.confirm("Would you like to include the following type of character?\n\n(You must include at least 1 of the 4 types)\n\n  3. numbers: 0-9");
    isSpecial = window.confirm("Would you like to include the following type of character?\n\n(You must include at least 1 of the 4 types)\n\n  4. special characters: ! @ # $ % ^ & * ( ) _ + - =");
  }

  //combing the users choices into a more readable format to show them later
  var charChoice = "";
  if (isLowercase) {
    charChoice += "lowercase letters\n";
  }
  if (isUppercase) {
    charChoice += "upercase letters\n";
  }
  if (isNumbers) {
    charChoice += "numbers\n";
  }
  if (isSpecial) {
    charChoice += "special characters\n";
  }
  
  //confirming with the user the parameters that they chose for their pw, and asking to initiate the pw generator
  var start = window.confirm("You have chosen to generate a password that is " + pwLength + " characters long.\n\nIt will include:\n" + charChoice + "\nDo you want to continue with generating your password?");
  if (!start){
    return password;
  } //added this small if statement for when a user presses cancel on the last question, to return an undefined password

  //these arrays hold all the values of each specific character type that will be used when generating the pw
  var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var nums = ["0","1","2","3","4","5","6","7","8","9"]
  var spec = ["!","@","#","$","%","^","&","*","(",")","_","+","-","="]

  //this new array will concatinate the users choices of each character type
  var allCharacters = [];
  if (isLowercase) {
    allCharacters = allCharacters.concat(lower);
  }
  if (isUppercase) {
    allCharacters = allCharacters.concat(upper);
  }
  if (isNumbers) {
    allCharacters = allCharacters.concat(nums);
  }
  if (isSpecial) {
    allCharacters = allCharacters.concat(spec);
  }

  console.log(allCharacters);
  
  var password = [];
  var newChar;
  
  //this was the trickiest part but i just need to remember the math.floor
  for (var i = 0; i < pwLength; i++) {
    newChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    console.log(newChar);
    password = password.concat(newChar);
    console.log(password);
  }

  return password.join("");
}