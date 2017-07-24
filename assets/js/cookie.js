var cookie = document.getElementById("cookie");
var multiplicateur = document.getElementById("multiplicateur");
var score = 0;
var nbMultiplicateur = 0;


function afficherScore() {
     score.innerHTML = "Score : " + score;
}

function afficherNbMultiplicateur() {
     nbMultiplicateur+=1;
}

function clic() {
    score +=1 * nbMultiplicateur;
    document.getElementById("score").innerHTML=score;
}

function afficherReset() {
	score=0;nbMultiplicateur=0;
	document.getElementById("score").innerHTML =score;
}

/* Essai d'ajout d'une fonction pour augmenter le multiplicateur  

function superMultiplicateur(){
	if (score>=50) {
		nbMultiplicateur + score;
	} else {
		alert ("Il faut 50 cookies pour utiliser le superMultiplicateur!");
	}
	document.getElementById("score").innerHTML = score;
	multiplicateur.onclick = superMultiplicateur;
} */

cookie.onclick = clic;
multiplicateur.onclick = afficherNbMultiplicateur;
reset.onclick=afficherReset;
afficherScore();
afficherNbMultiplicateur();


