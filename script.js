const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function clock(){
var date=new Date();
let h=date.getHours();
let s=date.getSeconds();
let m=date.getMinutes();


hours=360*h/12;
secs=360*s/60;
mins=360*m/60+secs/60;



HOURHAND.style.transform="rotate("+hours+"deg)";
MINUTEHAND.style.transform="rotate("+mins+"deg)";
SECONDHAND.style.transform="rotate("+secs+"deg)";
var snd = new Audio("tick.m4a"); // buffers automatically when created
snd.play();
}

var interval=setInterval(clock,1000)
