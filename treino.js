const nome= "Letícia"
function getEventoAleatorio(){
    let n= Math.floor(Math.random()*2);

    if(n===0){
        return "Maratona";
    }

    if(n===1){
    return 'Triathlon';
    }

    else if(n===2){
        return "Pentathlon"
    }
}

const Event=getEventoAleatorio()

function getDiasTreino(Event){
if (Event==="Maratona"){
    return "retornará em 50 dias";
}

if (Event==="Triathlon")
    return "retornará em 100 dias";

else if(Event==="Pentathlon")
   return "retornará em 200 dias";
}
const tempo=getDiasTreino(Event)

function logEvento(nome,Event){
    console.log("A "+nome,"irá fazer "+ Event)
}
logEvento(nome,Event)

function logTempo(nome,tempo){
    console.log('A '+nome,tempo)
}
logTempo(nome,tempo)