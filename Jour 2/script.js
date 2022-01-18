function sendAlert () {
    alert('Alerte !');
}

let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let champs = document.querySelectorAll('.verify');
    console.log(champs);
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

//Exercice :
// ajouter un champ téléphone de type "tel", un champ sujet de type "text", et un champ select secteur d'activité de type text (liste déroulante)
// ajouter une vérification pour le type "tel" regex : /^((0|\+33)[0-9])( {0,1})([0-9]{2})( {0,1})([0-9]{2})( {0,1})([0-9]{2})( {0,1})([0-9]{2})$/