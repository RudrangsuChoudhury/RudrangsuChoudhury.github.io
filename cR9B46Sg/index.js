const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];

//function to check the password length
let activearray = characters
let istoggleNumber = false
let istoggleSymbol = false
function checkInput() {
  var inputElement = document.getElementById('password-length')
  var value = parseInt(inputElement.value)



  if (value < 1) {
    inputElement.value = 1
  } else if (value > 15) {
    inputElement.value = 15
  }
}
//function to generate the password

function generatePassword() {
  checkInput()
  var passwordLength = parseInt(document.getElementById('password-length').value)
  var password1 = ""
  var password2 = ""
  for (var i = 0; i < passwordLength; i++) {
    password1 += activearray[Math.floor(Math.random() * activearray.length)]
  }
  for (var i = 0; i < passwordLength; i++) {
    password2 += activearray[Math.floor(Math.random() * activearray.length)]
  }
  document.getElementById('password1').innerText=password1
  document.getElementById('password2').innerText=password2


}
//function to copy the password to clipboard
function copyToClipboard(elementId) {
  var element = document.getElementById(elementId)
  var element1 = document.querySelectorAll('.answer')[0]
  var element2 = document.querySelectorAll('.answer')[1]
  const toastLiveExample = document.getElementById('liveToast')
 const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  var text = element.textContent || element.innerText

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(
      function () {
        if (text.length > 0) {
          // alert('Text copied to clipboard')
           toastBootstrap.show()

            setTimeout(() => {
              toastBootstrap.hide()

            }, 1000)
        }

      },
      function (err) {
        alert('Error copying text to clipboard: ' + err)
      }
    )
  }
}

//function to toggle numbers on and off
// function to toggle numbers on and off
function toggleNumber() {
  const toggleButton = document.querySelector('.toggle-number');

  if (!istoggleNumber) {
    // Remove numbers from activearray
    activearray = activearray.filter((char) => isNaN(Number(char)));
    toggleButton.textContent = 'Add numbers to your password';
  } else {
    // Restore original activearray
    if (istoggleSymbol) {
      activearray = characters.filter(
        (char) => !/[~`!@#$%^&*()_\-+={[}\]|:;"<>,.?/]/.test(char)
      );
      toggleButton.textContent = 'Remove numbers from your password'
    } else {

      activearray = characters;
      toggleButton.textContent = 'Remove numbers from your password';
    }
  }

  istoggleNumber = !istoggleNumber;
  toggleButton.classList.add('active');
  setTimeout(() => {
    toggleButton.classList.remove('active');
  }, 300);
}

// function to toggle symbols on and off
function toggleSymbol() {
  const toggleButton = document.querySelector('.toggle-symbols')

  if (!istoggleSymbol) {
    // Remove symbols from activearray
    activearray = activearray.filter(
      (char) => !/[~`!@#$%^&*()_\-+={[}\]|:;"<>,.?/]/.test(char)
    )
    toggleButton.textContent = 'Add symbols to your password'
  } else {
    // Restore original activearray
    if (istoggleNumber) {
      activearray = characters.filter((char) => isNaN(Number(char)));
      toggleButton.textContent = 'Remove symbols from your password'
    }
    else {
      activearray = characters
      toggleButton.textContent = 'Remove symbols from your password'
    }
  }

  istoggleSymbol = !istoggleSymbol
  toggleButton.classList.add('active')
  setTimeout(() => {
    toggleButton.classList.remove('active')
  }, 300)
}
