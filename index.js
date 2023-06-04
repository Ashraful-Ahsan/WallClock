let hr=document.getElementById('hour')
let min=document.getElementById('min')
let sec=document.getElementById('sec')

const tickSound = new Audio('tt.mp3');

function displayTime(){

    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotation=30*hh+mm/2;
    let mRotation=6*mm;
    let sRotation=6*ss;

    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation}deg)`;
    sec.style.transform=`rotate(${sRotation}deg)`;

    if (ss % 2 === 0) {
        tickSound.play();
      }

}

setInterval(displayTime,1000)




