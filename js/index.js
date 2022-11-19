// Controls Declarations
let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonAddOne = document.querySelector('.addOne')
let buttonLessOne = document.querySelector('.lessOne')
let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')
let timerRun 
let initialMinutes = undefined
export {buttonStop, buttonAddOne, buttonLessOne}

// Sounds Declarations
let buttonForest = document.querySelector('.forest')
let buttonForestSVG = document.querySelector('.forestSVG')
let buttonRain = document.querySelector('.rain')
let buttonRainSVG = document.querySelector('.rainSVG')
let buttonCafe = document.querySelector('.cafe')
let buttonCafeSVG = document.querySelector('.cafeSVG')
let buttonFire= document.querySelector('.fire')
let buttonFireSVG= document.querySelector('.fireSVG')
let buttonForestSound= new Audio("./sounds/Floresta.wav")
let buttonRainSound= new Audio("./sounds/Chuva.wav")
let buttonCafeSound= new Audio("./sounds/Cafeteria.wav")
let buttonFireSound= new Audio("./sounds/Lareira.wav")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
export {buttonForestSound, buttonRainSound, buttonCafeSound, buttonFireSound}
import {darkMode} from "./events.js"

// DarkMode Declarations
let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')
let body = document.querySelector('.body')
let textColor1 = document.querySelector('.textColor1')
let textColor2 = document.querySelector('.textColor2')
let textColor3 = document.querySelector('.textColor3')
let SVG1 = document.querySelector('.SVG1')
let SVG2 = document.querySelector('.SVG2')
let SVG3 = document.querySelector('.SVG3')
let SVG4 = document.querySelector('.SVG4')
let SVG5 = document.querySelector('.SVG5')
let SVG6 = document.querySelector('.SVG6')
let SVG7 = document.querySelector('.SVG7')
let SVG8 = document.querySelector('.SVG8')
let SVG9 = document.querySelector('.SVG9')
let input1 = document.querySelector('.inputForest')
let input2 = document.querySelector('.inputRain')
let input3 = document.querySelector('.inputCafe')
let input4 = document.querySelector('.inputFire')

// Inputs Declarations
const volumeControl = document.querySelector(".volumeControl")
const inputForest = document.querySelector(".inputForest")
const inputRain = document.querySelector(".inputRain")
const inputCafe = document.querySelector(".inputCafe")
const inputFire = document.querySelector(".inputFire")
export {inputForest, inputRain, inputCafe, inputFire}

// Timer Functions
import { TimerFunctions } from "./functions.js"
const timerFunctions = TimerFunctions({timerRun, displayMinutes, displaySeconds, kitchenTimer, initialMinutes, buttonPause, buttonPlay})

// Sounds Functions
import { SoundFunctions } from "./functions.js"
const soundFunctions = SoundFunctions({buttonPressAudio, kitchenTimer, darkMode})

// Input Functions
import { InputFunctions } from "./functions.js"
const inputFunctions = InputFunctions()

// Timer Events
import { TimerEvents  } from "./events.js"
const timerEvents = TimerEvents({displayMinutes, displaySeconds, soundFunctions, buttonPlay, buttonPause, timerFunctions, timerRun})

// Sounds Events
import { SoundsEvents } from "./events.js"
const soundsEvents = SoundsEvents({buttonForest, buttonForestSVG, soundFunctions, inputFunctions, buttonRain, buttonRainSVG, buttonCafe, buttonCafeSVG, buttonFire, buttonFireSVG})

// DarkMode Events
import { DarkEvent } from "./events.js"
const darkEvent = DarkEvent({sun, moon, body, textColor1, textColor2, textColor3, SVG1, SVG2, SVG3, SVG4, SVG5, SVG6, SVG7, SVG8, SVG9, buttonCafe, buttonForest, buttonRain, buttonFire, soundFunctions, input1, input2, input3, input4})

// Input Events
import { InputEvents } from "./events.js"
const darkEvents = InputEvents({inputForest, inputRain, inputCafe, inputFire})