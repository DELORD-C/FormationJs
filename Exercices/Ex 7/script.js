let filter = 'w';


(() => {
   //1 récupérer la liste de tous les éléments <li>
   let list = document.querySelectorAll('li');
   //2 itérer sur chaque élément de la liste
   for(let element of list) {
      console.log(element);
      //3 récupérer la valeur du contenu html de chaque élément de la liste ==> utiliser la propriété innerHTML
      let content = element.innerHTML.toLowerCase();
      //4 comparer la valeur de l'élément avec la variable filter ==> utiliser la fonction includes()
      if(!content.includes(filter.toLowerCase())){
         //5 afficher ou non en fonction de la comparaison
         element.style.opacity = 0;
      }
   }
})()