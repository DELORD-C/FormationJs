let variable1 = "let est utile pour déclarer une variable qu'on ne va pas trop modifier";
var variable2 = "var est utile pour déclarer une variable qu'on va beaucoup modifier";
const constante1 = "Cette valeur ne peut être modifiée";

variable1 = "Plus besoin de déclaration pour modifier une variable existante";

let a = 30;
let b = 40;
let c = a + b;
let d = "30";
// Les différents opérateur de comparaison :
// ==           est égale à
// ===          est égale à (type et valeur)
// !=           est différent de
// !==          est différent de (type et valeur)
// <            est inférieur à
// >            est supérieur à
// <=           est inférieur ou égale à
// >=           est supérieur ou égale à

//ARRAY
let monTableau = ["pome", "banane", "fraise"]
let monTableau2 = new Array("pomme", "banane", "fraise");

monTableau.push("figue"); //push permet d'ajouter un ou plusieurs éléments à un tableau
monTableau.slice(0, 2); //Slice permet de supprimer un ou plusieurs éléments à un tableau
monTableau.pop(); //pop supprime le dernier élément d'un tableau
monTableau.shift(); //meme chose que pop avec le premier
monTableau.reverse(); //inverse l'ordre du tableau

let search = monTableau.find(function(fruit) { //find et findIndex permettent de chercher des éléments respectant des conditions précisées dans la fonction passée en paramètre
    //return fruit === 'banane';
    if (fruit === 'banane') {
        return true;
    }
    else {
        return false;
    }
});
console.log(search);

monTableau[0] = "pomme";

// STRUCTURES DE CONTROLE


//CONDITIONS
//IF
if (a === d) {
    console.log("a et d ont la même valeur et le même type");
}
else if (a == d) {
    console.log("a et d ont la même valeur");
}
else {
    console.log("a et d n'ont pas la même valeur");
}

//SWITCH
switch (a) { // Switch permet de tester plusieurs valeur d'une variable
    case 30:
        console.log("a est égale à 30");
        break;

    case 40:
        console.log("a est égale à 40");
        break;

    default:
        console.log("la valeur de a est inconnue");
        break;
}

//BOUCLES (Iterations)
//FOR
for (let i = 0; i < 10; i++) {
    //console.log(i);
}

//FOREACH
monTableau.forEach(fruit => {
    console.log(fruit);
});


//équivalent à 
for(let element of monTableau) {
    console.log(element);
}



//FONCTIONS

function maFonction (phrase) {
    console.log(phrase);
}

maFonction("Cette phrase va être affichée par ma fonction");

function compter (fin, départ = 0) { //définir une valeur par défaut d'un paramètre dans la déclaration d'une fonction permet de le rendre facultatif
    for (let i = départ; i <= fin; i++) {
        console.log(i);
    }
}

function actions () {

}

compter(10);
compter(10, 9);

//MANIPULATION DE VARIABLES
//CONCATENATION
let debut = "Ceci est ";
let fin = "une phrase complète.";
let chiffre1 = 10;
let chiffre2 = 10;
let phrase = debut + fin + (chiffre1 + chiffre2);

console.log(phrase);



//SUCRES SYNTAXIQUES


//déclaration de variables
//let a = 1, b = 2, c = 3;

//FONCTIONS
//fonction normale
function nomDeLaFonction () {
    actions();
}

//fonction fléchée anonyme : réduction syntaxique uniquement
() => {
    actions();
}

//fonction anonyme auto invoquée : utile pour supprimer automatiquement des variables etc..
(function ()  {
    actions();
})()

//fonction anonyme stockée : utile pour manipuler des fonctions comme des variables.
let nomDeLaFonctionAnonyme = function () {
    actions();
}

//fonction anonyme nommée stockée : probablement utilse un jour
let nomDeLaFonctionAnonymeNommée = function nomDeLaFonctionAnonymeNomméeDeux () {
    actions();
}

let array = [nomDeLaFonctionAnonyme, nomDeLaFonctionAnonymeNommée]

nomDeLaFonction();
nomDeLaFonctionAnonyme();



//LOOP
for (let index = 0; index < array.length; index++) { //for classique
    const element = array[index];   
}

for (let element of array) { //pseudo for each : optimisé en fonction du type d'objet
//for (let element in array) {

}

array.forEach(element => { //foreach classique
    
});




//TERNAIRE
//if
//let c;
if (a == b) {
    c = true;
}
else {
    c = false
}

//let c = a == b ? true : false;
// ternaire : CONDITION ? VALEUR SI VRAI : VALEUR SI FAUX
//on l'utilise lorsque l'on souhaite réduire la verbosité d'une condition if else, idéalement
//lorsque cette condition est simple




//décomposition
let x, y, rest;
[x, y] = [10, 20]; //affectation par décomposition

[x, y, ...rest] = [10, 20, 30, 40, 50, 80]; //paramètre rest (rest parameter) permet une affectation par décomposition avec un nombre non définit de valeurs

console.log(rest);