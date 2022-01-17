console.log(window);
console.log(document);

class Personnage {
    constructor(nom, level, hp) {
        this.nom = nom;
        this.level = level;
        this.hp = hp;
    }

    static jump () {
        console.log('Jumped !');
    }
}

let mario = {
    nom: 'Mario',
    level: 12,
    hp: 10,

    jump: function () {
        console.log('Mario Jumped !');
    }
}

console.log(mario)

let luigi = new Personnage ('Luigi', 12, 10);

console.log(luigi.nom);

Personnage.jump(); //Une fonstion statique peut petre appellée avec un objet non instancié en faisant directement référence à la classe