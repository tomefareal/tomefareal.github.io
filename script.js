const loaderContainer = document.querySelector('.loaderContainer');

window.addEventListener('load', (e) => {
    loaderContainer.classList.add('fonduOut');
    setTimeout((e) => {
        loaderContainer.classList.add('hidden');
    }, 400);
});

//les couleurs et leurs RGB !
var couleurRougeRGB = [255, 0, 0];
var couleurJauneRGB = [255, 255, 0];
var couleurBleuRGB = [0, 0, 255];
var couleurBlancheRGB = [255, 255, 255];
var couleurNoireRGB = [0, 0, 0];
var couleurInitialRGB = [0, 0, 0];
var couleurFinalRGB = [255, 0, 0];

var couleurAjouterRGB = [0, 0, 0];

//les couleurs Selectionnées!
var couleurRougeSelectionnee = 0;
var couleurJauneSelectionnee = 0;
var couleurBleuSelectionnee = 0;
var couleurBlancheSelectionnee = 0;
var couleurNoireSelectionnee = 0;
var couleurInitialSelectionnee = 0;
// var couleurFinalSelectionnee = 0;

//couleurs de base selectionnées !
var couleurDeBaseSelectionnee = 0;

//Working with the color scale
const couleurRouge = document.querySelector('.couleurRouge');
const couleurJaune = document.querySelector('.couleurJaune');
const couleurBleu = document.querySelector('.couleurBleu');
const couleurBlanche = document.querySelector('.couleurBlanche');
const couleurNoire = document.querySelector('.couleurNoire');
const couleurInitial = document.querySelector('.couleurInitial');
//const couleurFinale = document.querySelector('.couleurFinale');

//ajouter des evènements aux clics des couleurs!

//Couleur Rouge Selectionnée !
couleurRouge.addEventListener('click', (e) => {
    if( couleurRougeSelectionnee == 0)
    {
        new Audio('click.mp3').play();

        couleurAjouterRGB = couleurRougeRGB;
        console.log("Couleur Ajoutée est :  " + couleurAjouterRGB+" ! ");
        couleurRougeSelectionnee = 1;
        couleurDeBaseSelectionnee = 1;
    }
    else
    {
        new Audio('click.mp3').play();

        console.log("Couleur Rouge Deselectionnée ! ");
        couleurRougeSelectionnee = 0;
        couleurDeBaseSelectionnee = 0;
    }
});

//Couleur Jaune Selectionnée !
couleurJaune.addEventListener('click', (e) => {
    if( couleurJauneSelectionnee == 0)
    {
        new Audio('click.mp3').play();
        couleurAjouterRGB = couleurJauneRGB;
        console.log("Couleur Ajoutée est :  " + couleurAjouterRGB+" ! ");
        couleurJauneSelectionnee = 1;
        couleurDeBaseSelectionnee = 1;
    }
    else
    {
        new Audio('click.mp3').play();
        console.log("Couleur Jaune Deselectionnée ! ");
        couleurJauneSelectionnee = 0;
        couleurDeBaseSelectionnee = 0;
    }
});
//Couleur Bleu Selectionnée !
couleurBleu.addEventListener('click', (e) => {
    if( couleurBleuSelectionnee == 0)
    {
        new Audio('click.mp3').play();
        couleurAjouterRGB = couleurBleuRGB;
        console.log("Couleur Ajoutée est :  " + couleurAjouterRGB+" ! ");
        couleurBleuSelectionnee = 1;
        couleurDeBaseSelectionnee = 1;
    }
    else
    {
        new Audio('click.mp3').play();
        console.log("Couleur Bleu Deselectionnée ! ");
        couleurBleuSelectionnee = 0;
        couleurDeBaseSelectionnee = 0;
    }
});
//Couleur Blanche Selectionnée !
couleurBlanche.addEventListener('click', (e) => {
    if( couleurBlancheSelectionnee == 0)
    {
        new Audio('click.mp3').play();
        couleurAjouterRGB = couleurBlancheRGB;
        console.log("Couleur Ajoutée est :  " + couleurAjouterRGB+" ! ");
        couleurBlancheSelectionnee = 1;
        couleurDeBaseSelectionnee = 1;
    }
    else
    {
        new Audio('click.mp3').play();
        console.log("Couleur Blanche Deselectionnée ! ");
        couleurBlancheSelectionnee = 0;
        couleurDeBaseSelectionnee = 0;
    }
});
//Couleur Noire Selectionnée !
couleurNoire.addEventListener('click', (e) => {
    if( couleurNoireSelectionnee == 0)
    {
        new Audio('click.mp3').play();
        couleurAjouterRGB = couleurNoireRGB;
        console.log("Couleur Ajoutée est :  " + couleurAjouterRGB+" ! ");
        couleurNoireSelectionnee = 1;
        couleurDeBaseSelectionnee = 1;
    }
    else
    {
        new Audio('click.mp3').play();
        console.log("Couleur Noire Deselectionnée ! ");
        couleurNoireSelectionnee = 0;
        couleurDeBaseSelectionnee = 0;
    }
});

//Couleur Initial Selectionnée !
couleurInitial.addEventListener('click', (e) => {
    if( couleurInitialSelectionnee == 0 && couleurDeBaseSelectionnee == 1)
    {
        new Audio('click.mp3').play();

        couleurInitialSelectionnee = 1;
        couleurDeBaseSelectionnee = 0;
        
        couleurInitialRGB[0] = (couleurAjouterRGB[0]+couleurInitialRGB[0])/2;
        couleurInitialRGB[1] = (couleurAjouterRGB[1]+couleurInitialRGB[1])/2;
        couleurInitialRGB[2] = (couleurAjouterRGB[2]+couleurInitialRGB[2])/2;

        couleurInitial.style.backgroundColor = "rgb("+couleurInitialRGB[0]+","+couleurInitialRGB[1]+","+couleurInitialRGB[2]+")";
        console.log("Couleur Initiale est :  " + couleurInitialRGB+" ! ");
        console.log("Couleur Finale est :  " + couleurFinalRGB+" ! ");

        if(Math.abs(couleurInitialRGB[0] - couleurFinalRGB[0])<= 10 && Math.abs(couleurInitialRGB[1] - couleurFinalRGB[1])<= 10 && Math.abs(couleurInitialRGB[2] - couleurFinalRGB[2])<= 10)
        {
            new Audio('./winner.mp3').play();
            new Audio('./voice.mp3').play();
        }
        else
        {
            console.log("resultat reste encore !");
        }
    }
    else
    {
        new Audio('click.mp3').play();
        console.log("Couleur Initial Deselectionnée ! ");
        couleurInitialSelectionnee = 0;
        couleurDeBaseSelectionnee = 0;
    }
});