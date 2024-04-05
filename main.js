let ampm=document.getElementById("ampm")
function displayTime(){
let dateTime=new Date()
let hr=dateTime.getHours();
let min=dateTime.getMinutes()
let sec=dateTime.getSeconds()
if(hr>12)
{
    hr=hr-12
    ampm.innerHTML="PM"
}

document.getElementById("hours").innerHTML=timeZero(hr)
document.getElementById("minutes").innerHTML=timeZero(min)
document.getElementById("seconds").innerHTML=timeZero(sec)
}
function timeZero(no){
    return no<10?"0"+no:no
}
setInterval(displayTime,1000)