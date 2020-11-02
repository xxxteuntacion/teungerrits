const NAME = 'isDarkmode';
const CLASS = 'darkmode';

function save() {
    var isDarkMode = document.body.classList.contains(CLASS);
    window.localStorage.setItem(NAME, isDarkMode);
}

function apply() {
    var isDarkMode = window.localStorage.getItem(NAME);

    if(isDarkMode === 'true') {
        document.body.classList.add(CLASS);
        document.getElementById('myImage').src  = 'Images/lightmode.png';
    }
     else {
       document.getElementById('myImage').src = 'Images/darkmode.png';
    }
}




function darkmodebutton() {
    document.body.classList.toggle("darkmode");
    var isDarkMode = window.localStorage.getItem(NAME);
    if (isDarkMode === 'true') {
        document.getElementById('myImage').src  = 'Images/darkmode.png';
    }
     else {
       document.getElementById('myImage').src = 'Images/lightmode.png';
   }
    save();
}

apply();