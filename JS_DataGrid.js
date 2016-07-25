var entries = [{
    id: 1,
    title: 'Bajka',
    description: 'Dla dzieci...'
}, {
    id: 2,
    title: 'Dramat',
    description: 'Dla kobiet...'
}, {
    id: 3,
    title: 'Fantastyka',
    description: 'Dla młodzieży...'
}, {
    id: 4,
    title: 'Kryminały',
    description: 'Dla wszystkich...'
}];

var tr = document.getElementsByTagName("tr");
var cols = [];

for (var i = 0; i < tr[0].cells.length; i++) {
    if (tr[0].cells[i].id != '') {
        cols.push(tr[0].cells[i].id);
    }
}

for (var i = 0; i < entries.length; i++) {
    var entry = document.createElement("tr");

    for (var j = 0; j < cols.length; j++) {
        var td = document.createElement("td");
        td.innerText = entries[i][cols[j]];
        entry.appendChild(td);
    }

    document.querySelector('table').appendChild(entry);
}