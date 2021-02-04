function change() {
    document.body.classList.toggle("change");
};



function Social(){
    document.getElementById("main").style.opacity = "0";
    setTimeout(Socials, 500);
    function Socials (){
        window.location.href = "socials.html";
    }
};

function Merc(){
    document.getElementById("main").style.opacity = "0";
    setTimeout(Merch, 500);
    function Merch (){
        window.location.href = "merch.html";
    }
};

function Etc(){
    document.getElementById("main").style.opacity = "0";
    setTimeout(Overig, 500);
    function Overig (){
        window.location.href = "overig.html";
    }
};

function Donatie(){
    document.getElementById("main").style.opacity = "0";
    setTimeout(Donatiebox, 500);
    function Donatiebox (){
        window.location.href = "Donatiebox.html";
    }
};

function Home(){
    document.getElementById("main").style.opacity = "0";
    setTimeout(Index, 500);
    function Index (){
        window.location.href = "index.html";
    }
};