const minutesDisplay = document.querySelector('.minutes span')
const secondsDisplay = document.querySelector('.seconds span')
let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2,'0')
    secondsDisplay.textContent =  String(seconds).padStart(2,'0')
  }
  
function countdown() {
    timerTimeOut = setTimeout(function() {
      let minutes = Number(minutesDisplay.innerHTML)
      let seconds = Number(secondsDisplay.innerHTML)
  
      if (seconds <= 0) {
        seconds = '05'
        --minutes
      }
  
      updateTimerDisplay(minutes, --seconds)
  
      countdown()
  
},1000)}

export {updateTimerDisplay, countdown}