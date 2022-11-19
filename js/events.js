// Timer Events
import { buttonAddOne, buttonLessOne, buttonStop } from "./index.js"
export function TimerEvents({displayMinutes, displaySeconds, soundFunctions, buttonPlay, buttonPause, timerFunctions, timerRun}) {
    buttonAddOne.addEventListener('click', function() {
        timerFunctions.addFive()

        soundFunctions.buttonPress()
    })

    buttonLessOne.addEventListener('click', function() {
        timerFunctions.lessFive()

        soundFunctions.buttonPress()
    })

    buttonPlay.addEventListener('click', function() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')

        if (displayMinutes.textContent == "0") {
            kitchenTimer.play()
            timerFunctions.resetTimer()
            return
        }

        timerFunctions.countdown()
    })
        
    buttonPause.addEventListener('click', function() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')

        timerFunctions.hold(timerRun)
    })

    buttonStop.addEventListener('click', function() {
    let minutes = Number(displayMinutes.textContent)
    
    if (minutes <= 0) {
        displaySeconds.textContent = "00"
        return
    }
    timerFunctions.hold(timerRun)
    
    timerFunctions.resetTimer()
})
}

// Sounds Events
import {buttonForestSound, buttonRainSound, buttonCafeSound, buttonFireSound, inputForest, inputRain, inputCafe, inputFire} from "./index.js"
export function SoundsEvents({buttonForest, buttonForestSVG, soundFunctions, inputFunctions, buttonRain, buttonRainSVG, buttonCafe, buttonCafeSVG, buttonFire, buttonFireSVG}) {    
    buttonForest.addEventListener('dblclick', function() {
        buttonForest.classList.toggle('selected')
        buttonForestSVG.classList.toggle('selectedSVG')
        
        soundFunctions.playPause(buttonForestSound)  
        
        soundFunctions.isPaused(buttonFireSound, buttonCafeSound, buttonRainSound)
        soundFunctions.removeSelected(buttonFire, buttonCafe, buttonRain)
        soundFunctions.removeSelectedSVG(buttonFireSVG, buttonCafeSVG, buttonRainSVG)
        soundFunctions.buttonDarkMode(buttonForest, buttonRain, buttonCafe, buttonFire)
        inputFunctions.startVolume(inputForest, inputRain, inputCafe, inputFire)
    })

    buttonRain.addEventListener('dblclick', function() {
        buttonRain.classList.toggle('selected')
        buttonRainSVG.classList.toggle('selectedSVG')
        
        soundFunctions.playPause(buttonRainSound)  
        
        soundFunctions.isPaused(buttonFireSound, buttonCafeSound, buttonForestSound)
        soundFunctions.removeSelected(buttonFire, buttonCafe, buttonForest)
        soundFunctions.removeSelectedSVG(buttonFireSVG, buttonCafeSVG, buttonForestSVG)
        soundFunctions.buttonDarkMode(buttonRain, buttonForest, buttonCafe, buttonFire)
        inputFunctions.startVolume(inputRain, inputCafe, inputFire, inputForest)
    })

    buttonCafe.addEventListener('dblclick', function() {
        buttonCafe.classList.toggle('selected')
        buttonCafeSVG.classList.toggle('selectedSVG')
        
        soundFunctions.playPause(buttonCafeSound) 
        
        soundFunctions.isPaused(buttonFireSound, buttonForestSound, buttonRainSound)
        soundFunctions.removeSelected(buttonFire, buttonForest, buttonRain)
        soundFunctions.removeSelectedSVG(buttonFireSVG, buttonForestSVG, buttonRainSVG)
        soundFunctions.buttonDarkMode(buttonCafe, buttonForest, buttonRain, buttonFire)
        inputFunctions.startVolume(inputCafe, inputFire, inputForest, inputRain)
    })

    buttonFire.addEventListener('dblclick', function() {
    buttonFire.classList.toggle('selected')
    buttonFireSVG.classList.toggle('selectedSVG')
    
    soundFunctions.playPause(buttonFireSound) 
    
    soundFunctions.isPaused(buttonForestSound, buttonCafeSound, buttonRainSound)
    soundFunctions.removeSelected(buttonForest, buttonCafe, buttonRain)
    soundFunctions.removeSelectedSVG(buttonForestSVG, buttonCafeSVG, buttonRainSVG)
    soundFunctions.buttonDarkMode(buttonFire, buttonForest, buttonRain, buttonCafe)
    inputFunctions.startVolume(inputFire, inputForest, inputRain, inputCafe)
})
}

// DarkMode Events
let darkMode 
export {darkMode}
export function DarkEvent({sun, moon, body, textColor1, textColor2, textColor3, SVG1, SVG2, SVG3, SVG4, SVG5, SVG6, SVG7, SVG8, SVG9, buttonCafe, buttonForest, buttonRain, buttonFire, soundFunctions, input1, input2, input3, input4}) {
    sun.addEventListener('click', function() {
        sun.classList.add('hide')
        moon.classList.remove('hide')
        body.classList.add('bodyDark')
        textColor1.classList.add('textColorDark')
        textColor2.classList.add('textColorDark')
        textColor3.classList.add('textColorDark')
        SVG1.classList.add('SVGDark')
        SVG2.classList.add('SVGDark')
        SVG3.classList.add('SVGDark')
        SVG4.classList.add('SVGDark')
        SVG5.classList.add('SVGDark')
        SVG6.classList.add('SVGDark')
        SVG7.classList.add('SVGDark')
        SVG8.classList.add('SVGDark')
        SVG9.classList.add('SVGDark')
        buttonCafe.classList.add('buttonDark')
        buttonForest.classList.add('buttonDark')
        buttonRain.classList.add('buttonDark')
        buttonFire.classList.add('buttonDark')
        darkMode = true
        soundFunctions.changeDark(buttonForest)
        soundFunctions.changeDark(buttonRain)
        soundFunctions.changeDark(buttonCafe)
        soundFunctions.changeDark(buttonFire)
        input1.classList.add("inputDark")
        input2.classList.add("inputDark")
        input3.classList.add("inputDark")
        input4.classList.add("inputDark")
    })

    moon.addEventListener('click', function() {
        moon.classList.add('hide')
        sun.classList.remove('hide')
        body.classList.remove('bodyDark')
        textColor1.classList.remove('textColorDark')
        textColor2.classList.remove('textColorDark')
        textColor3.classList.remove('textColorDark')
        SVG1.classList.remove('SVGDark')
        SVG2.classList.remove('SVGDark')
        SVG3.classList.remove('SVGDark')
        SVG4.classList.remove('SVGDark')
        SVG5.classList.remove('SVGDark')
        SVG6.classList.remove('SVGDark')
        SVG7.classList.remove('SVGDark')
        SVG8.classList.remove('SVGDark')
        SVG9.classList.remove('SVGDark')
        buttonCafe.classList.remove('buttonDark')
        buttonForest.classList.remove('buttonDark')
        buttonRain.classList.remove('buttonDark')
        buttonFire.classList.remove('buttonDark')
        darkMode = false
        soundFunctions.changeLight(buttonRain, buttonRainSound)
        soundFunctions.changeLight(buttonForest, buttonForestSound)
        soundFunctions.changeLight(buttonCafe, buttonCafeSound)
        soundFunctions.changeLight(buttonFire, buttonFireSound)
        input1.classList.remove("inputDark")
        input2.classList.remove("inputDark")
        input3.classList.remove("inputDark")
        input4.classList.remove("inputDark")
    })
}

// Input events
export function InputEvents({inputForest, inputRain, inputCafe, inputFire}) {
    inputForest.addEventListener('change', function() {
        buttonForestSound.volume = this.value
    })
    inputRain.addEventListener('change', function() {
        buttonRainSound.volume = this.value
    })
    inputCafe.addEventListener('change', function() {
        buttonCafeSound.volume = this.value
    })
    inputFire.addEventListener('change', function() {
        buttonFireSound.volume = this.value
    })
}