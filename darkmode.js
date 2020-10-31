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
    } 
}

function darkmodebutton() {
    document.body.classList.toggle("darkmode");
    save();
}

apply();