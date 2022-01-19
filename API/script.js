let ul = document.getElementById('list'),
    search = document.getElementById('search'),
    btn = document.getElementById('btn'),
    request = new XMLHttpRequest();

function getResult(val = null) {
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            let data = JSON.parse(request.responseText);
            displayData(data.entries);
        }
    };
    if (val == null) {
        request.open('GET', 'https://api.publicapis.org/entries');
    }
    else {
        request.open('GET', 'https://api.publicapis.org/entries?title=' + val);
    }
    request.send();
}

function displayData (data) {
    setTimeout(function(){
        ul.innerHTML = '';
        for (let entrie of data) {
            let li = document.createElement('li');
            li.innerHTML = '<a href="' + entrie.Link + '">' + entrie.API + '</a>';
            ul.append(li);
        }
    }, 1000);
}

btn.addEventListener('click', () => {
    updateData();
});

function updateData () {
    ul.innerHTML = '<img src="load.gif">';
    let val = search.value;
    console.log(val);
    getResult(val);
}

getResult();

//Faire en sorte que lorsque l'on appuie sur le bouton OK :
// - Notre element UL se vide (on supprime tout son contenu)
// - On refait une requête à l'api avec en paramètre la chaine de caractère contenue dans notre champs "search"
// - On réaffiche nos résultats dans notre élément ul

//Aller plus loin :
// Ajouter un gif de chargement pendant la mise à jour des données
// Supprimer le bouton OK et mettre en place un eventListenenr pour que la mise à jour se fasse automatiquement au changement de valeur de notre champ search
//      Indice : change
// Ajouter un délai avant la mise à jour pour éviter les baisses de performances lors de la frappe