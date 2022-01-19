let ul = document.getElementById('list'),
    search = document.getElementById('search'),
    request = new XMLHttpRequest();

(function getResult() {
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            let data = JSON.parse(request.responseText);
            displayData(data.entries);
        }
    };
    request.open('GET', 'https://api.publicapis.org/entries');
    request.send();
})()

function displayData (data) {
    for (let entrie of data) {
        let li = document.createElement('li');
        li.innerHTML = '<a href="' + entrie.Link + '">' + entrie.API + '</a>';
        ul.append(li);
    }
}