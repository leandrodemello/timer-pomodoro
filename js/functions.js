// Timer Functions
export function TimerFunctions({timerRun, displayMinutes, displaySeconds, kitchenTimer, initialMinutes, buttonPause, buttonPlay}) {
  function countdown() {
      timerRun = setTimeout(function() {
          let minutes = Number(displayMinutes.textContent)
          let seconds = Number(displaySeconds.textContent)
          
          if (minutes <= 0 && seconds <=0) {
              resetTimer()
              kitchenTimer.play()
              return
          }
          
          if (seconds <= 0) {
          minutes -= 1
          
          seconds = 60
          
          displayMinutes.textContent = String(minutes).padStart(2, "0")
      }
      
      displaySeconds.textContent = String(seconds - 1).padStart(2, "0")
      
      countdown()
  }, 1000)
  }

  function resetTimer() {
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')

      initialMinutes = initialMinutes == undefined ? 25 : initialMinutes
      displayMinutes.textContent = initialMinutes

      displaySeconds.textContent = "00"
  }   

  function hold() {
      clearTimeout(timerRun)
  }

  function addFive() {
      let minutes = Number(displayMinutes.textContent)
      minutes += 5
      displayMinutes.textContent = String(minutes).padStart(2, "0")
      initialMinutes = String(minutes).padStart(2, "0")
  }

  function lessFive() {
      let minutes = Number(displayMinutes.textContent)
      
      if (minutes <= 0) {
          alert("Não é possível selecionar minutos negativos")
          minutes = 0
          displayMinutes.textContent = String(minutes).padStart(2, "0")
          return
      }

      minutes -= 5
      if (minutes <= 0) {minutes = 0}
      displayMinutes.textContent = String(minutes).padStart(2, "0")
      initialMinutes = String(minutes).padStart(2, "0")
  }

  return {countdown, resetTimer, hold, addFive, lessFive}
}

// Sounds Functions
import { darkMode } from "./events.js"
export function SoundFunctions({buttonPressAudio, kitchenTimer}) {

  function buttonPress() {
      buttonPressAudio.play()
  }

  function buttonKitchenTimer() {
      kitchenTimer.play()
  }

  function playPause(button) {
      if (button.paused) {
          button.play()
          button.volume = 0.5
      } else {
          button.pause()
      }
  }

  function isPaused(x, y, z) {
      x.pause()
      y.pause()
      z.pause()
  }

  function removeSelected(x,y,z) {
      x.classList.remove('selected')
      y.classList.remove('selected')
      z.classList.remove('selected')
  }

  function removeSelectedSVG(x,y,z) {
      x.classList.remove('selectedSVG')
      y.classList.remove('selectedSVG')
      z.classList.remove('selectedSVG')
  }

  function buttonDarkMode(x, a, b, c){
      if (darkMode) {
          x.classList.toggle('selectedDark')
          a.classList.remove('selectedDark')
          b.classList.remove('selectedDark')
          c.classList.remove('selectedDark')
      } else {
          x.classList.remove('selectedDark') 
          a.classList.remove('selectedDark') 
          b.classList.remove('selectedDark')
          c.classList.remove('selectedDark')
      }
  }

  function removeSelectedDark(x,y,z) {
      x.classList.remove('selectedDark')
      y.classList.remove('selectedDark')
      z.classList.remove('selectedDark')
  }

  function changeDark(x) {
      if (x.classList.toggle('selected') == false) {
          x.classList.toggle('selectedDark') 
          
      }
  }

  function changeLight(x, y) {
  if (y.paused == false) {
      x.classList.add('selected')
      x.classList.remove('selectedDark')
      x.classList.remove('buttonDark')
  } else {
      x.classList.remove('buttonDark')
      x.classList.remove('selectedDark')
      x.classList.remove('selected')
  }
  }

  return {buttonPress, buttonKitchenTimer, playPause, isPaused, removeSelected, removeSelectedSVG, buttonDarkMode, removeSelectedDark, changeDark, changeLight}
}

// Input Functions
export function InputFunctions() {
  function startVolume(x, a, b, c) {
      x.value = 0.5
      a.value = 0
      b.value = 0
      c.value = 0
  }
  return {startVolume}
}