function sapinDeNoel(hauteur) {
    let largeur = hauteur * 2 - 1;
    for(let i = 0; i < hauteur; i++) {
        let nbEspace = hauteur - (i + 1);
        let nbZero = (i + 1) * 2 - 1;
        let chaine = "";
        for (let y = 0; y < nbEspace; y++) {
            chaine += " ";
        }
        for (let x = 0; x < nbZero; x++) {
            chaine += 0;
        }
        console.log(chaine);
    }
}

sapinDeNoel(15);