var interval = null

var start_timer = document.getElementById('start_timer')
var pause_timer = document.getElementById('pause_timer')

pause_timer.disabled = true

function iniciar() {

    relogio()
    interval = setInterval(relogio, 1000)

    if(start_timer.disabled == false) {
        start_timer.disabled = true
        pause_timer.disabled = false
    }else{
        start_timer.disabled = false
        pause_timer.disabled = true
    }

}

function relogio() {

    let hora = 0
    let minuto = 0
    let segundo = 0
    let hora_input = document.querySelector('input#horas')
    let minuto_input = document.querySelector('input#minutos')
    let segundo_input = document.querySelector('input#segundos')

    if(segundo_input.value.length == 0){
        segundo = 60
    }else{
        segundo = segundo_input.value
    }

    if(minuto_input.value.length == 0){
        minuto = 59
    }else{
        minuto = minuto_input.value
    }

    if(hora_input.value.length == 0){
        hora = 10
    }else{
        hora = hora_input.value
    }
    

    if(segundo > 0){
        if(segundo <= 60){
            segundo--
        }
    }

    if(segundo == 0 && minuto > 0){

        minuto--
        segundo = 59

    }else if(hora > 0 && segundo == 0 && minuto == 0){
        
        hora--
        minuto = 2
        segundo = 59

    }

    if(hora < 10)
        hora_input.value = String(hora).padStart(2, '0')
    else
        hora_input.value = hora

    if(minuto < 10)
        minuto_input.value = String(minuto).padStart(2, '0')
    else
        minuto_input.value = minuto

    if(segundo < 10)
        segundo_input.value = String(segundo).padStart(2, '0')
    else
        segundo_input.value = segundo

    hora_input.style.textAlign = 'center'
    minuto_input.style.textAlign = 'center'
    segundo_input.style.textAlign = 'center'

    //console.log(interval)

}

function pausar() {

    if(start_timer.disabled == false) {
        start_timer.disabled = true
        pause_timer.disabled = true
    }else{
        start_timer.disabled = false
        pause_timer.disabled = true
    }

    start_timer.value = 'Continuar'

    clearInterval(interval)

}


function zerar() {

    clearInterval(interval)

    let hora_input = document.querySelector('input#horas')
    let minuto_input = document.querySelector('input#minutos')
    let segundo_input = document.querySelector('input#segundos')

    interval = true

    hora_input.value = ''
    minuto_input.value = ''
    segundo_input.value = ''

    start_timer.disabled = false
    pause_timer.disabled = true

    start_timer.value = 'Iniciar'

}