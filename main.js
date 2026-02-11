const elLamp = document.getElementById (`lamp`)
const elOnBtn = document.getElementById (`onBtn`)
const elOffBtn = document.getElementById (`offBtn`)


//Richiamando il bottone "on", con "click" cambio l'immagine 
/*elOffBtn.addEventListener(`click`, function(){
    elLamp.src = "./img 4/white_lamp.png"
})

//Eseguo la stessa operazione ma al contrario 
elOnBtn.addEventListener(`click`, function(){
    elLamp.src = "./img 4/yellow_lamp.png"
})*/


elOnBtn.addEventListener(`click`, function(){

    if(elLamp.src.includes(`yellow_lamp`)){
        elLamp.src = "./img 4/white_lamp.png"
    }
    else {
        elOnBtn.innerText = `TURN OFF`
        elLamp.src = "./img 4/yellow_lamp.png"
    }
})

