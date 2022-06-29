var sec=document.getElementById("seconds");
var millisec=document.getElementById("milliseconds");
var min=document.getElementById("minutes");
var start=document.getElementById("start");
var stop=document.getElementById("stop");
var reset=document.getElementById("reset");

var s=0;
var ms=0;
var m=0;
var timeInterval;

//Function for timer
const timer=()=>
{
    ms++;
 
    if(ms<9)
    {
        millisec.innerHTML="0"+ms;
    }
 
    if(ms>9)
    {
        millisec.innerHTML=ms;
    }
 
    if(ms>99)
    {
        s++;
        sec.innerHTML="0"+s;
        ms=0;
        millisec.innerHTML="0"+0;
    }

    if(s>9)
    {
        sec.innerHTML=s;
    }

    if (s>60)
    {
        m++;
        min.innerHTML="0"+m;
        s=0;
        sec.innerHTML="0"+0;
    }

    if(m>9)
    {
        min.innerHTML=m;
    }
}

//Start
start.addEventListener('click',()=>{
    timeInterval=setInterval(timer,10);
})

//stop
stop.addEventListener('click',()=>{
    clearInterval(timeInterval);
})

//reset
reset.addEventListener('click',()=>{
    clearInterval(timeInterval);
    s="00";
    ms="00";
    m="00"
    sec.innerHTML=s;
    millisec.innerHTML=ms;
    min.innerHTML=m;
})
