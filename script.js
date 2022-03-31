function generatePassword(){
    //TODO: your code goes here
    var lowerBank = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var upperBank = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var numericBank = [0,1,2,3,4,5,6,7,8,9]
    var specialCharactersBank = ["!","@","#","$","%","^","&","*","(",")"]
    var bank = []
    var generatePassword = ""
    var randomBank = []
    
    var lengthOfPassword = prompt("How long do you want your password to be? The password has to be at least 8 characters long and at MOST 128 characters long");
    if (8>lengthOfPassword || lengthOfPassword>128) {
      alert("That is not a valid numeric choice")
      generatePassword()
    }
    var lower = prompt('Do you want to include lower letters? Type "Y" or "N"').toUpperCase();
    if (lower == "Y"){
      bank.concat(lowerBank)

    }

    var upper = prompt('Do you want to include uppercase letters? Type "Y" or "N"').toUpperCase();
    if (upper == "Y"){
      bank.concat(upperBank)
    }
    var numeric = prompt('Do you want to include numeric values? Type "Y" or "N"').toUpperCase();
    if (numeric == "Y"){
      bank.concat(numericBank)
    }

    var specialCharacters = prompt('Do you want to include special characters? Type "Y" or "N"').toUpperCase();
    if (specialCharacters == "Y"){
      bank.concat(specialCharactersBank)
    }

    for (i = 0; i < parseInt(lengthOfPassword); i++) {
      
      if (lower == "Y"){
        bank.push(lowerBank[Math.floor(Math.random()*lowerBank.length)])
      }
      if (upper == "Y"){
        bank.push(upperBank[Math.floor(Math.random()*upperBank.length)])
      }
      if (numeric == "Y"){
        bank.push(numericBank[Math.floor(Math.random()*numericBank.length)])
      }
      if (specialCharacters == "Y"){
        bank.push(specialCharactersBank[Math.floor(Math.random()*specialCharactersBank.length)])
      }
    }
    while (bank.length>parseInt(lengthOfPassword)){
      bank.pop()
    }


    generatePassword = bank.join("")
    
    return generatePassword
  }

  
  
  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  