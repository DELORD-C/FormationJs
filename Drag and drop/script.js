let items = document.querySelectorAll('li'),
    list = document.getElementById('list'),   
    dragged,
    draggedOn;

items.forEach(function(item) {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragend', dragEnd);
});

function dragStart (e) {
    dragged = e.target;
    dragged.style.display = 'none';
}

function dragOver (e) {
    if (e.target.tagName == 'LI') {
        draggedOn = e.target;
    }
    else {
        draggedOn = null;
    }
    items.forEach(function(item){
        item.style.borderTop = 'none';
    })
    e.target.style.borderTop = 'solid 10px #a8ebff';
}

function dragEnd (e) {
    if (draggedOn != null) {
        console.log(dragged);
        dragged.remove();
        list.insertBefore(dragged, draggedOn);
    }
    dragged.style.display = 'list-item';
    dragged = null;
    draggedOn = null;
    items.forEach(function(item){
        item.style.borderTop = 'none';
    })
}