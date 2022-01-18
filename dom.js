console.log(document);
console.log(window);

let paragraph = document.getElementById('paragraph');
let classe = document.getElementsByClassName('nav-link');
let paragraph2 = document.querySelector('#paragraph');
let aList = document.querySelectorAll('a');
let display = document.getElementById('display');

console.log(classe);
console.log(aList);

// évènements les plus utilisés
//click             au click
//keypress          à la pression d'une touche
//mouseover         lorsque la souris passe par dessus
//touchmove         lors d'un mouvement tactile
//change            lorsque la valeur d'un champs est modifiée

//alert("Un texte d'exemple");                      alert permet de créer un popup
//if (confirm("Voulez-vous continuer ?")) {         confirm permet de créer une alert avec une question et d'agire en fonction de sa réponse
//    alert('Merci');
//}

display.addEventListener("click", () => {
    if (document.querySelector('h1').style.opacity == 0) {
        showTitle();
    }
    else {
        hideTitle();
    }
});

function hideTitle() {
    let title = document.querySelector('h1');
    title.style.opacity = 0;
}

function showTitle() {
    let title = document.querySelector('h1');
    title.style.opacity = 1;
}

//methode 1 avec queryselector
console.log(document.querySelector('#paragraph span:first-child'));

//methode 2 avec getElementById sur parent
console.log(document.getElementById('paragraph').childNodes[1]);

//methode 3 avec ajout de l'id directement dans l'html
console.log(document.getElementById('span'));