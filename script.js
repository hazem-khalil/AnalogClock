const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//These values are used just for testing
hrPosition = 20;
minPosition = 130;
secPosition = 267;

var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

