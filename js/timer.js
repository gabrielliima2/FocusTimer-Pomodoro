import Sound from "./sounds.js"

export default function Timer({//esses elementos são variaveis do index, que estão sendo utilizadas no Timer
    minutesDisplay,
    secondsDisplay,  
    resetControls
}) {  //factory ou contrutor

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined  ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')//.padStart()
        secondsDisplay.textContent = String(seconds).padStart(2, '0')//quando chegar no 9,8,7.. adicione um 0 antes 09,08..
    }

    function reset () {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut) //diz para tudo, entao para o funcionamento do timer
    }

    //recursividade uma função chamando ela mesma
    function countDown() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            updateDisplay(minutes, 0)

            if(isFinished) {
                resetControls()
                updateDisplay()
                Sound().timeEnd()
                return //quando a função encontra o retorno ela para de executar
            }

            if(seconds <= 0) {
                seconds = 60
            --minutes
            }

        
            updateDisplay(minutes, String(seconds - 1))

            countDown()
        }, 1000)//depois de 1000 milisegundos que é = 1segundo ele diminui 1 do texto
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold(){
        clearTimeout(timerTimeOut)
    }

    return {
        countDown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }
}

