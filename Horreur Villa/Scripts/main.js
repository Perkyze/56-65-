//AJOUTER FILE HEADER

let numeroPiece;
let cle1inventaire = "false"


//Save que tu a fait le tuto
const tuto1 = localStorage.getItem('tuto')
if(tuto1=="true"){
    document.getElementById("explication1").style.display = "none"
}
//Enlever page comment jouer
function removeElement() {  
    document.getElementById("explication1").style.display = "none"
    /* localStorage.setItem('tuto', 'true'); */
}
function showElement() {  
    document.getElementById("explication1").style.display = "block"
   /*  localStorage.setItem('tuto', 'false'); */
}

const play1 = localStorage.getItem('menu')
if(play1=="true"){
    document.getElementById("accueil1").style.display = "none"

}
function play() {  
    document.getElementById("accueil1").style.display = "none"
    /* localStorage.setItem('menu', 'true'); */
}


function typeWriter(texte,vitesse,position) {
    if(position==0){
        /* document.getElementById("textebox").innerHTML += "\n"; */
        
        let br = document.createElement("br");
        document.getElementById("textebox").appendChild(br);
    }
    if (position < texte.length) {
      document.getElementById("textebox").innerHTML += texte.charAt(position);
      position++;
      setTimeout(function(){
        typeWriter(texte,vitesse,position)
      }, vitesse);
    }
  }

function cle1click() {
    document.querySelector(".itemcle1").style.display = "block";
    cle1inventaire="true";
    console.log(cle1inventaire);
}

  /*
DÉPLACEMENT MINIMAP -------
*/
const gamePhoto = document.querySelectorAll(".imggame");

let elementclickables = document.querySelectorAll(".pieces");

elementclickables.forEach((element) => element.addEventListener("click", deplacer));


function deplacer(e) {
     
    numeroPiece = e.target.id;
    let estDeplaceable = e.target.dataset.deplaceable;
    let estBarrer = e.target.dataset.barrer;

    if (estDeplaceable == "false") {
        console.log(numeroPiece + " est verrouiller");
        return;
    } else if (estBarrer == "true") {
        console.log(numeroPiece + " est barrer"); 
    } else{
        gamePhoto.forEach((image) => image.style.display = "none")
        elementclickables.forEach((piece)=> {
            if (piece.classList.contains("piece-presente")){
                piece.classList.remove("piece-presente");
                piece.classList.add("piece-visite");
                console.log(piece)
            }
        })
        document.querySelector("#"+e.target.id+"-photo").style.display = "block";
        document.querySelector("#"+e.target.id).classList.add("piece-presente");
        console.log(numeroPiece);
    }

    
    if(numeroPiece == "hall"){
        typeWriter("Tu es dans le hall la porte est bloquée... C'est bizarre.", 40,0)
        elementclickables.forEach((piece)=> {
           if(piece.id == "dinnern"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }
    if(numeroPiece == "dinnern"){
        
        elementclickables.forEach((piece)=> {
           if(piece.id == "dinners" || piece.id == "hall" || piece.id == "roomhall"){
            piece.dataset.deplaceable = "true";

           }
           else{
            piece.dataset.deplaceable = "false";           
           }
        })
    }
    if(numeroPiece != "dinners"){
        document.querySelector(".cle1").style.display = "none";
    }

    if(numeroPiece == "dinners"){
        document.querySelector(".cle1").style.display = "block";
        elementclickables.forEach((piece)=> {
           if(piece.id == "dinnern" || piece.id == "ballroome" || piece.id == "salon"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }
    if(numeroPiece == "salon"){
        elementclickables.forEach((piece)=> {
           if(piece.id == "masterbar" || piece.id == "dinners" || piece.id == "jardin"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }
    if(numeroPiece == "masterbar"){
        elementclickables.forEach((piece)=> {
           if(piece.id == "salon"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }
    if(numeroPiece == "jardin"){
        elementclickables.forEach((piece)=> {
           if(piece.id == "salon"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }
    if(numeroPiece == "ballroome"){
        elementclickables.forEach((piece)=> {
           if(piece.id == "ballroomo" || piece.id == "dinners"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }
    if(numeroPiece == "ballroomo"){
        elementclickables.forEach((piece)=> {
           if(piece.id == "ballroome"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }
    if(numeroPiece == "roomhall"){
        elementclickables.forEach((piece)=> {
           if(piece.id == "room1" || piece.id == "room2" || piece.id == "room3" || piece.id == "dinnern"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }
    if(numeroPiece == "room1"){
        elementclickables.forEach((piece)=> {
           if(piece.id == "roomhall"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }
    if(numeroPiece == "room2"){
        elementclickables.forEach((piece)=> {
           if(piece.id == "roomhall"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }
    if(numeroPiece == "room3"){
        elementclickables.forEach((piece)=> {
           if(piece.id == "roomhall"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }

/*     if (numeroPiece == 3) {
        deplacerPiece3();
    } */
}


// Set le temps et la date dans 30 minutes
var countDownDate = new Date().getTime() + 30 * 60 * 1000;

// Update chaque seconde
var x = setInterval(function() {

     // Get la date et le temps actuelle
    var now = new Date().getTime();

    // Calcul temps restent
    var distance = countDownDate - now;

    // Calcul les minutes et seconde
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Affiche le texte
    document.getElementById("timer").innerHTML = "Time Remaining: " + minutes + ":" + seconds;

    // Fin du compteur
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "MORT";
    }
}, 1000);



/*  // Get the stored timer value
var storedTimer = localStorage.getItem("timer");

// Set the date and time 30 minutes from now if no stored value exists
var countDownDate = storedTimer ? new Date(storedTimer).getTime() : new Date().getTime() + 30 * 60 * 1000;

// Update the timer every second
var x = setInterval(function() {
    // ...
    // Store the timer value in localStorage
    localStorage.setItem("timer", new Date(countDownDate).toString());
}, 1000);
// Get the stored timer value
var storedTimer = localStorage.getItem("timer");

// If a stored value exists, set the countDownDate variable to that value
if (storedTimer) {
    var countDownDate = new Date(storedTimer).getTime();
}
// If no stored value exists, set the countDownDate variable to 30 minutes from now
else {
    var countDownDate = new Date().getTime() + 30 * 60 * 1000;
}

// Update the timer every second
var x = setInterval(function() {
    // Store the timer value in localStorage
    localStorage.setItem("timer", new Date(countDownDate).toString());
}, 1000);
  */