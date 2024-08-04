const SecondHand = document.getElementById("seconds-hand")
const MinuteHand = document.getElementById("minutes-hand")
const HourHand = document.getElementById("hours-hand")

function getTime() {
   const now = new Date()
   const seconds = now.getSeconds()
   const minutes = now.getMinutes()
   const hours = now.getHours()
   const timeInterval = 6

   SecondHand.style.transform = "rotate(" + (seconds * timeInterval) +"deg)"
   MinuteHand.style.transform = "rotate(" + (minutes * timeInterval + seconds/10) +"deg)"
   HourHand.style.transform = "rotate(" + (hours * 30 + minutes/2) +"deg)"
   
}

getTime()
setInterval(getTime, 100)