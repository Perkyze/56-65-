//AJOUTER FILE HEADER

//variables
let numeroPiece;
let cle1Inventaire = "false";
let cle2Inventaire = "false";
intro="false";
firsttime = "true";
room1FirstTime = "true";
journalInventaire = "false";
balFirst = "true";
balEFirst = "true";
lampe = "false";
firstPrompt = "true";
armoireUnlock = "false";
cle1Used = "false";
coffreUnlocked = "false";
noteInventaire = "false";
endBtn = 0;


function changeScr() {
if(cle1Inventaire == "true" && lampe == "false"){
    document.getElementById("masterbar-photo").src="images/masterbarouvert.webp";
    console.log("ouvert")
    document.querySelector(".itemcle1").style.display = "none";
    typeWriter("Il fait très sombre êtes vous sûr de vouloir y aller?",2,0);
    document.getElementById("yesbutton").style.display = "block";
    document.getElementById("nobutton").style.display = "block";
    armoireUnlock = "true";
    cle1Used = "true";
}else if(cle1Inventaire == "true" || armoireUnlock == "true" && lampe == "true"){
    document.querySelector(".itemcle1").style.display = "none";
    document.querySelector(".armoire").style.display = "none";
    document.getElementById("masterbar-photo").src="images/masterbarcle.webp";
    document.querySelector(".cle2").style.display = "block";
    cle1Inventaire = "false"
    
}else if (firstPrompt == "true"){    
    typeWriter("C'est barré à clé.",1,0);
    firstPrompt = "false";
}
}

//Save que tu a fait le tuto
const tuto1 = localStorage.getItem('tuto')
if(tuto1=="true"){
    document.getElementById("explication1").style.display = "none";
}


const play1 = localStorage.getItem('menu')
if(play1=="true"){
    document.getElementById("accueil1").style.display = "none";

}
function play() {  
    document.getElementById("accueil1").style.display = "none";
    /* localStorage.setItem('menu', 'true'); */
}

/*
BOUTON BAS DE PAGE ------------------------
  */
function showStory() {  
    document.getElementById("histoire2").style.display = "block"
}
function removeStory() {  
    document.getElementById("histoire2").style.display = "none"
}
//Enlever page comment jouer
function removeElement() {  
    document.getElementById("explication1").style.display = "none"
}
function showElement() {  
    document.getElementById("explication1").style.display = "block"
}

 /*
EVENT ------------------------
  */
function showTexte1(){
    typeWriter("Vous vous êtes mis à couvert derrière l’un des piliers de la salle de bal vous bouchant la bouche et en vous recroquevillant sur vous-même pour faire le moins de bruit de possible. Après un certain moment le monstre partit et vous sortez de votre cachette.",2,0);
    document.getElementById("ouibutton").style.display = "none";
    document.getElementById("nonbutton").style.display = "none";
    document.querySelector(".monstre").style.display = "none";
}
function showDeath1(){
    document.getElementById("ouibutton").style.display = "none";
    document.getElementById("nonbutton").style.display = "none";
    document.querySelector(".deathScreen").style.display = "block";
    document.querySelector(".btnfooter").style.visibility = "hidden";
    
}
function rejouer(){
    document.querySelector(".deathScreen").style.display = "none";
    document.querySelector(".btnrejouer").style.display = "none";
    window.location.href=window.location.href;
}

function showTexte2(){
    typeWriter("Vous pourrez toujours y revenir plus tard",2,0);
    document.getElementById("yesbutton").style.display = "none";
    document.getElementById("nobutton").style.display = "none";
}
function showDeath2(){
    document.getElementById("yesbutton").style.display = "none";
    document.getElementById("nobutton").style.display = "none";
    document.querySelector(".deathScreen2").style.display = "block";
    document.querySelector(".btnfooter").style.visibility = "hidden";
}
function rejouer(){
    window.location.href=window.location.href;
}
function endScreen(){
    document.querySelector(".endScreen").style.display = "block";
    document.querySelector(".btnfooter").style.visibility = "hidden";
}
function next(){
    if(endBtn== "0"){
        document.querySelector(".endText1").style.display = "none";
        document.querySelector(".endText2").style.display = "block";
        document.querySelector(".endText3").style.display = "none";
        document.querySelector(".endText4").style.display = "none";
        endBtn ++;
    }else if(endBtn == "1"){
        document.querySelector(".endText1").style.display = "none";
        document.querySelector(".endText2").style.display = "none";
        document.querySelector(".endText3").style.display = "block";
        document.querySelector(".endText4").style.display = "none";
        endBtn ++;
    }else if(endBtn == "2"){
        document.querySelector(".endText1").style.display = "none";
        document.querySelector(".endText2").style.display = "none";
        document.querySelector(".endText3").style.display = "none";
        document.querySelector(".endText4").style.display = "block";
        document.querySelector(".btnEnd").style.display = "none";
        document.getElementById("henry").style.display = "block";
        document.getElementById("bence").style.display = "block";
        endBtn ++;
    }
}

function showRevele(){
    document.querySelector(".endText4").style.display = "none";
    document.getElementById("henry").style.display = "none";
    document.getElementById("bence").style.display = "none";
    document.querySelector(".revele").style.display = "block";
}

function showCacher(){
    document.querySelector(".endText4").style.display = "none";
    document.getElementById("henry").style.display = "none";
    document.getElementById("bence").style.display = "none";
    document.querySelector(".cacher").style.display = "block";

}


/*
TYPING SCRIPT ------------------------
*/

    function typeWriter(texte,vitesse,position) {
    if(position==0){
        let br1 = document.createElement("br");
        document.getElementById("textebox").appendChild(br1);
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
    var objDiv = document.getElementById("textebox");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

/*
ENIGME ------------------------
*/
function cle1click() {
    if(cle1Inventaire != "true" && cle1Used == "false"){
    document.querySelector(".itemcle1").style.display = "block";
    typeWriter("Tu as trouvé une clé à l'intérieur de cette statue.", 20, 0);
    cle1Inventaire="true";
    document.querySelector(".cle1").style.display = "none";
    }
}

function cle2click(){
    if (cle2Inventaire != "true"){
        document.querySelector(".item2img").style.display = "block";
        document.getElementById("masterbar-photo").src="images/masterbarouvert.webp";
        document.querySelector(".cle2").style.display = "none";
        document.querySelector(".armoire").style.display = "none";
        cle2Inventaire = "true";
        console.log("cle2 unlocked")
        typeWriter("Tu as trouvé une note montrant un code et les mots « menteur » et « monstre » répéter sur l'entièreté de la page.",1,0)
    }
}


function journalClick() {
    
    if(journalInventaire != "true"){
        typeWriter("En fouillant la chambre du maitre d’hôtel, vous trouvez une page d’un hebdomadaire. Il se rapporte à un incident qui a eu lieu en 1875, un homme nommés Henry Tòth fut pendu pour une série de meurtre d’enfants innocents. En continuant de lire vous observer les lettres commençais lentement à fondre jusqu’à qu’elles disparaissent complétement de la page. Soudainement, vous entendez du bruit provenant de la salle de bal.", 1, 0);
        journalInventaire="true";
        document.querySelector(".lampe").style.display = "none";
    }

}

function lampeClick(){
    document.querySelector(".item3img").style.display = "block";
    typeWriter("Vous avez trouvé une lampe torche", 1, 0);
        lampe="true";
        document.querySelector(".lampe").style.display = "none";
}

function coffreClick(){
    if(coffreUnlocked == "false"){
        typeWriter("Le code a bien fonctionné. À l’intérieur vous trouvez un journal intime abimé. Dans celui-ci vous apprenez l’histoire d’amour entre Bence Korhonen et Henry Tòth le tueur en série. Vous y trouvez aussi l’affreux récit détaillé des meurtres des enfants, et du plaisir que le meurtrier pris à tuer ses victimes. Vous pensez à haute voix que Henry Tòth est un monstre. D’un seul coup, la radio qui ne fonctionnais pas jusque-là se mit soudainement à fonctionner. Vous entendez une voix à l’intérieur répétant « Ce n’était pas moi, non c’était moi » jusqu’à qu’elle dysfonctionne.",5,0)

        document.querySelector(".coffre").style.display = "none";
        coffreUnlocked = "true";
    }
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
        console.log(numeroPiece + " est pas deplaceable");
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

    //HALL
    if(numeroPiece == "hall"){
        if(intro != "true"){
        typeWriter("Vous vous réveillez au hall d'entrée de l'hôtel sans aucune idée de ce qui c'était passez la veille avant de vous endormir. En essayant de vous rappeler ce qui vous êtes arrivé, vous remarquez que le manoir semble différent : les décors semblaient plus vieux qu'auparavant, et il n'y avait personne au hall d'entrée, même pas un seul son en provenance des différentes pièces du manoir. Vous essayez de sortir par la porte d'entrée, mais la porte semble bloquée, c'était la même chose pour les fenêtres. De plus, en regardant à travers celle-ci il n'y avait que du brouillard. En pleine panique, vous vous aventurez dans le manoir afin de trouver au moins le maitre d'hôtel. Pendant votre recherche, vous avez entendu un son provenant de la chambre des maîtres au nord de l'hôtel.", 1,0);
        intro="true";
        }
        
        elementclickables.forEach((piece)=> {
           if(piece.id == "dinnern"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }

    //DINNERN
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
    
    //DINNERS
    if(numeroPiece == "dinners"){
        if(numeroPiece == "dinners" && coffreUnlocked == "true"){
            endScreen();
        }
        elementclickables.forEach((piece)=> {
           if(piece.id == "dinnern" || piece.id == "ballroome" || piece.id == "salon"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }

    if(numeroPiece != "salon"){
        document.querySelector(".coffre").style.display = "none";
    }
    //SALON
    if(numeroPiece == "salon"){
        document.querySelector(".coffre").style.display = "block";
        elementclickables.forEach((piece)=> {
           if(piece.id == "masterbar" || piece.id == "dinners" || piece.id == "jardin"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }

    //MASTERBAR
    if(numeroPiece != "masterbar"){
        document.querySelector(".journal").style.display = "none";
        document.querySelector(".armoire").style.display = "none";
    }

    if(numeroPiece == "masterbar"){
        if(cle2Inventaire == "false"){
        document.querySelector(".journal").style.display = "block";
        document.querySelector(".armoire").style.display = "block";
        }
        elementclickables.forEach((piece)=> {
           if(piece.id == "salon"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }

    //JARDIN
    if(numeroPiece != "jardin"){
        document.querySelector(".cle1").style.display = "none";
    }
    
    if(numeroPiece == "jardin"){

        if(balFirst == "false" && cle1Inventaire == "false" && armoireUnlock != "true" && cle2Inventaire =="false"){
        document.querySelector(".cle1").style.display = "block";
        }

        elementclickables.forEach((piece)=> {
           if(piece.id == "salon"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }
    
    //BALLROOME
    if(numeroPiece == "ballroome"){
        if(balFirst == "true" && journalInventaire=="true"){
            typeWriter("Vous vous dirigez vers la source jusqu’à que vous vous retrouviez nez à nez avec un horrible monstre. Son corps était élancé et il avait une peau grise brulée. Le monstre ne semblant pas réaliser que vous vous trouvez ici, se mit à bouger vers votre direction petit à petit, son bras s’allonge de plus en plus vers votre direction.",1,0);
            document.getElementById("ouibutton").style.display = "flex";
            document.getElementById("nonbutton").style.display = "flex";
            document.querySelector(".monstre").style.display = "block";
            balFirst = "false";           
        }

        elementclickables.forEach((piece)=> {
           if(piece.id == "ballroomo" || piece.id == "dinners"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }

    //BALLROOMO
    if(numeroPiece == "ballroomo"){
        if(balEFirst == "true" && balFirst == "false"){
            typeWriter(" En fouillant la salle de bal, vous remarqué la présence d’une note à terre la où le monstre se trouvait. La note se trouvait être adressée à un certain Bence Korhonen. Cette note était remplie de mot d’amours à son égard. Apparement on aurait même fait une statue à son effigie",1,0)
            balEFirst = "false"
        }
        elementclickables.forEach((piece)=> {
           if(piece.id == "ballroome"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }

    //ROOMHALL
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

    //ROOM1
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

    //ROOM2
    if(numeroPiece != "room2"){
        document.querySelector(".lampe").style.display = "none";
        }
    
    if(numeroPiece == "room2"){
        if(lampe == "false"){
            document.querySelector(".lampe").style.display = "block";
        }
        elementclickables.forEach((piece)=> {
           if(piece.id == "roomhall"){
            piece.dataset.deplaceable = "true";
           }
           else{
            piece.dataset.deplaceable = "false";
           }
        })
    }

   
    //ROOM3
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
}

/* 
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

 */

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