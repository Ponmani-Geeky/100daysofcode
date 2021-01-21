const secondhand=document.querySelector('.sec-hand');
const minhand=document.querySelector('.min-hand');
const hourhand=document.querySelector('.hour-hand');

function setDate(){
    const now= new Date();
    const secs=now.getSeconds();
    const secdegrees=((secs/60)*360)+90;
    secondhand.style.transform=`rotate(${secdegrees}deg)`

    const mins=now.getMinutes();
    const mindegrees=((mins/60)*360)+90;
    minhand.style.transform=`rotate(${mindegrees}deg)`

    const hours=now.getHours();
    const hoursdegrees=((hours/12)*360)+90;
    hourhand.style.transform=`rotate(${hoursdegrees}deg)`
}
   

setInterval(setDate,1000);

setDate();
