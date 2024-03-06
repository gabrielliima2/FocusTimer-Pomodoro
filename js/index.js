import Controls from './constrols.js'
import Timer from'./timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import { elements } from './elements.js'

const {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    minutesDisplay,
    secondsDisplay, 
} = elements

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer ({
    minutesDisplay,
    secondsDisplay,  
    resetControls : controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})