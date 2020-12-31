var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

//var itm = document.getElementById(day);
//var cln = itm.cloneNode(true);
//document.getElementById("currentsong").appendChild(cln);

var days = day

do {
    days += 1;
    var x = document.getElementById(days);
    x.parentNode.removeChild(x);
}while(days <= 365);



      