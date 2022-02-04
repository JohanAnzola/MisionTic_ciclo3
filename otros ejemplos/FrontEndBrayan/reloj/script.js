// variables se pone let siempre
let tablero       = document.getElementById("tablero");
let playButton    = document.getElementById("playButton");
let pauseButton    = document.getElementById("pauseButton");
let restartButton = document.getElementById("restartButton");
//vaariables necesarias tipo objeto
let esta_activo = false;
let time = {
    decimas  :0,
    segundos :0,
    minutos  :0,
}

//funcion para que los numeros se vean bien
function formato(numero){
    if(numero <10){
        return "0"+numero;
    }
    return numero;
}
//fincion que simula un reloj

function actualizar(){
    time.decimas ++;
    if(time.decimas == 10){
        time.decimas = 0;
        time.segundos++;
    }
    if(time.segundos == 60){
        time.segundos = 0;
        time.minutos++;
    }   
    //innerhtml es el valor que va por dentro
    tablero.innerHTML = formato(time.minutos) +":"+formato(time.segundos)+":"+time.decimas
    if(esta_activo){
        //cada 100 milisecundos se llama la funcion es para calibrar
        setTimeout(actualizar,100)//recursividad se vuelve a llamar
    
    } 
    
}

//funciones de botones
function play(){
    if(!esta_activo){
        esta_activo = true
        actualizar()
    }
    
}
function pause(){
    esta_activo = false
}
function reset(){
    time.decimas = 0;
    time.segundos = 0;
    time.minutos = 0;
    tablero.innerHTML = "00:00:0"
}
// Escuchar Eventos
playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);
restartButton.addEventListener('click', reset);
