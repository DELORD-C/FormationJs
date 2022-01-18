//Un objet js possède des attributs et des méthodes, il est basé sur un prototype
//accéder à une propriété :
//Object.nomDeLaPropriété
//Object.propriété = 'valeur'

//utiliser une méthode :
//Object.nomDeLaMéthode()


//Créer un objet de manière littérale (à la main)
let mario = {
    nom: 'Mario',
    level: 12,
    hp: 10,

    jump: function () {
        console.log('Mario Jumped !');
    },

    die: function () {
        console.log('Mario is dead.');
    }
}

console.log(mario.nom)
mario.die();

//créer un prototype d'objet
class Personnage { //une classe est un schéma d'object, un moule.
    constructor(nom, level, hp) { //un constructueur est une fonction qui se lancera automatiquement lorsque l'on instanciera un object de la classe en question
        this.nom = nom;
        this.level = level;
        this.hp = hp;
    }

    jump () {
        console.log(this.nom + ' Jumped !');
    }

    die () {
        console.log(this.nom + ' is dead.')
    }

    static outch () { //une fonction static doit être utilisée sans instancier l'object // donc il faut bien qu'elle n'utilise pas d'attribut propre à un objet instancié
        console.log(this.nom + ' Outch');
    }
}

let luigi = new Personnage ('Luigi', 12, 10);
luigi.jump();

Personnage.outch(); //Une fonstion statique peut petre appellée avec un objet non instancié en faisant directement référence à la classe