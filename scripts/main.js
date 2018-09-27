var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/brand.gif') {
        myImage.setAttribute ('src','images/kyle.jpeg');
    } else {
        myImage.setAttribute ('src', 'images/brand.gif');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'South Park is cool, ' + myName;
};

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'South Park is cool, ' + storedName;
};

myButton.onclick = function() {
    setUserName();
};