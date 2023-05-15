//variables

import {updateTimerDisplay, countdown} from "./timer.js"
import {stop} from "./controls.js"

const buttonPlay = document.querySelector('.controls .play')
const buttonStop = document.querySelector('.controls .stop')
const buttonPlus = document.querySelector('.controls .plus')
const buttonMinus = document.querySelector('.controls .minus')
const forestButton = document.querySelector('.sounds .cardOne')
const rainButton = document.querySelector('.sounds .cardTwo')
const tavernButton = document.querySelector('.sounds .cardThree')
const firePlaceButton = document.querySelector('.sounds .cardFour')
const forestWav = new Audio("../sounds/Floresta.wav")
const rainWav = new Audio("../sounds/Chuva.wav")
const tavernWav = new Audio("../sounds/Cafeteria.wav")
const firePlaceWav = new Audio("../sounds/Lareira.wav")
const forestSvg = document.querySelector('.cardOne svg')
const rainSvg = document.querySelector('.sounds .cardTwo svg')
const tavernSvg = document.querySelector('.sounds .cardThree svg')
const firePlaceSvg = document.querySelector('.sounds .cardFour svg')

//forestWav.play()
//forestWav.loop = true

//functions


function sumFiveMinutes() {
  let minutes = Number(minutesDisplay.innerHTML)
  let seconds = Number(secondsDisplay.innerHTML)
  minutes = minutes + 5

  updateTimerDisplay(minutes, seconds)
}

function subtractFiveMinutes() {
  let minutes = Number(minutesDisplay.innerHTML)
  let seconds = Number(secondsDisplay.innerHTML)
  
  if (minutes >= 5) {
  minutes = minutes - 5
}

  else {
    alert('Não é possível diminuir mais')
  }

  updateTimerDisplay(minutes, seconds)
}

function forestSound() {
  forestWav.play()
  forestWav.loop = true
  adjustForestColor()


  rainWav.pause()
  tavernWav.pause()
  firePlaceWav.pause()
}

function rainSound() {
  rainWav.play()
  rainWav.loop = true
  adjustRainColor()

  forestWav.pause()
  tavernWav.pause()
  firePlaceWav.pause()
}

function tavernSound() {
  tavernWav.play()
  tavernWav.loop = true
  adjustTavernColor()

  forestWav.pause()
  rainWav.pause()
  firePlaceWav.pause()
}

function firePlaceSound() {
  firePlaceWav.play()
  firePlaceWav.loop = true
  adjustFirePlaceColor()

  forestWav.pause()
  rainWav.pause()
  tavernWav.pause()
}

function adjustForestColor() {
  forestSvg.firstElementChild.style.fill = '#02799D'
  forestSvg.lastElementChild.style.fill = '#FFFFFF'

  rainSvg.firstElementChild.style.fill = '#E1E1E6'
  rainSvg.lastElementChild.style.fill = '#323238'
  tavernSvg.firstElementChild.style.fill = '#E1E1E6'
  tavernSvg.lastElementChild.style.fill = '#323238'
  firePlaceSvg.firstElementChild.style.fill = '#E1E1E6'
  firePlaceSvg.lastElementChild.style.fill = '#323238'  
}

function adjustRainColor() {
  rainSvg.firstElementChild.style.fill = '#02799D'
  rainSvg.lastElementChild.style.fill = '#FFFFFF'

  forestSvg.firstElementChild.style.fill = '#E1E1E6'
  forestSvg.lastElementChild.style.fill = '#323238'
  tavernSvg.firstElementChild.style.fill = '#E1E1E6'
  tavernSvg.lastElementChild.style.fill = '#323238'
  firePlaceSvg.firstElementChild.style.fill = '#E1E1E6'
  firePlaceSvg.lastElementChild.style.fill = '#323238'  
}

function adjustTavernColor() {
  tavernSvg.firstElementChild.style.fill = '#02799D'
  tavernSvg.lastElementChild.style.fill = '#FFFFFF'

  rainSvg.firstElementChild.style.fill = '#E1E1E6'
  rainSvg.lastElementChild.style.fill = '#323238'  
  forestSvg.firstElementChild.style.fill = '#E1E1E6'
  forestSvg.lastElementChild.style.fill = '#323238'
  firePlaceSvg.firstElementChild.style.fill = '#E1E1E6'
  firePlaceSvg.lastElementChild.style.fill = '#323238'  
}

function adjustFirePlaceColor() {
  firePlaceSvg.firstElementChild.style.fill = '#02799D'
  firePlaceSvg.lastElementChild.style.fill = '#FFFFFF'

  rainSvg.firstElementChild.style.fill = '#E1E1E6'
  rainSvg.lastElementChild.style.fill = '#323238'  
  tavernSvg.firstElementChild.style.fill = '#E1E1E6'
  tavernSvg.lastElementChild.style.fill = '#323238'
  forestSvg.firstElementChild.style.fill = '#E1E1E6'
  forestSvg.lastElementChild.style.fill = '#323238'  
}

// events

buttonPlay.addEventListener('click', function () {
  countdown()
})

buttonStop.addEventListener('click', function() {
  stop()
})
  
buttonPlus.addEventListener('click', function() {
  sumFiveMinutes()
})

buttonMinus.addEventListener('click', function() {
  subtractFiveMinutes()
})

forestButton.addEventListener('click', function() {
  forestSound()
})

rainButton.addEventListener('click', function() {
  rainSound()
})

tavernButton.addEventListener('click', function() {
  tavernSound()
})

firePlaceButton.addEventListener('click', function() {
  firePlaceSound()
})