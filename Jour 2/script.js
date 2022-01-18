function sendAlert () {
    alert('Alerte !');
}

let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let champs = document.querySelectorAll('.verify');
    let error = 0;
    for (let champ of champs) {
        let type = champ.getAttribute('type');
        let regex;
        switch (type) {
            case 'text':
                regex = /^.{2}.+$/
                break;
        
            case 'email':
                regex = /^([A-z]|\.|_|-|[0-9]){2}([A-z]|\.|_|-|[0-9])+@([A-z]|\.|_|-|[0-9]){2}([A-z]|\.|_|-|[0-9])+\.[A-z]{2,3}$/
                break;

            case 'tel':
                regex = /^((0|\+33)[0-9])( {0,1})([0-9]{2})( {0,1})([0-9]{2})( {0,1})([0-9]{2})( {0,1})([0-9]{2})$/
                break;
        }
        if (!champ.value.match(regex)) {
            error++;
            champ.style.border = "1px solid red";
        }
    }
    if (error === 0) {
        form.submit();
    }
    else {
        document.getElementById('error').style.opacity = '1';
    }
});

function resetForm () {
    form.reset();//reset permet de vider tous les champs d'un formulaire
}

//Exercice :
// ajouter un champ téléphone de type "tel", un champ sujet de type "text", et un champ select secteur d'activité de type text (liste déroulante)
// ajouter une vérification pour le type "tel" regex : /^((0|\+33)[0-9])( {0,1})([0-9]{2})( {0,1})([0-9]{2})( {0,1})([0-9]{2})( {0,1})([0-9]{2})$/

//évènements liés au navigateur
// Les plus connus :
// load, unload, resize



window.addEventListener('load', () => { //l'évènement load se lance lorsque tous les éléments de la page sont chargés.
    setTimeout(function(){ //setTimeout sert à créer un délai manuellement
        //element.classList permet de récupérer la liste des classes d'un élement
        //on peut ensuite appliquer plusieurs méthodes sur cette liste de classe
        document.getElementById('loading').classList.add('loaded');//add permet d'ajouter une classe
        document.getElementById('loading').classList.remove('loaded');//remove permet de retirer une classe
        document.getElementById('loading').classList.toggle('loaded');//toggle permet d'ajouter ou retirer une classe en fonction de si elle était présente ou non
        document.getElementById('loading').classList.item('loaded');//item renvoi l'index d'une classe
        document.getElementById('loading').classList.contains('loaded');//contains renvoi true si la classe existe, et false si elle n'existe pas
        document.getElementById('loading').classList.replace('loaded', 'newLoaded');//replace permet de remplacer une classe par une autre
    }, 100) //le délai est précisé en millisecondes
})

//unload se lance lorsque l'on quitte la page, lorsque la page se "décharge"

window.addEventListener('resize', () => {//resize se lance quand on modifie la taille de la fenètre
    console.log('La fenètre est redimensionnée');
})

