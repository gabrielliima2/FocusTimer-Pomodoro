export default function Controls({//esses elementos são variaveis do index, que estão sendo utilizadas no Controls
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
}) {

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }
    
    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }
    
    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minitos?')
        if( !newMinutes ) {
            return false
        }
        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}
