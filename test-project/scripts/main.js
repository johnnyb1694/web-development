let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me.jpg') {
      myImage.setAttribute ('src','images/lang-lang.jpg');
    } else {
      myImage.setAttribute ('src','images/me.jpg');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Cool! Nice to meet you, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Cool! Nice to meet you, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }