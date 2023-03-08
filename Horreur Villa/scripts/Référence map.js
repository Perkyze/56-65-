let elementclickables = document.querySelectorAll(".pieces");

elementclickables.forEach((element) => element.addEventListener("click", deplacer));

function deplacer(e) {
    let numeroPiece = e.target.id;
    let estDeplaceable = e.target.dataset.deplaceable;
    if (!estDeplaceable) {
        //patente.innerHtml = "Tu ne peux pas te deplacer dans cette piece!";
        return;
    }
    else{
        console.log(numeroPiece);
    }

/*     if (numeroPiece == 3) {
        deplacerPiece3();
    } */
}

function bouger(destination) {
    if (destination == 3) {
        piece1.addAttribute("data-deplaceable", "oui");
        piece2.addAttribute("data-deplaceable", "non");
    }
}

function deplacerPiece3() {
    if (piece3Verouille == true || etatCarte == 1) {
        patente.innerHtml = "la porte est barrée!";
    } else {
        bouger(3);
    }
}
