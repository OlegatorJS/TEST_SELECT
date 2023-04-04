const root = document.getElementById("root");
const container = document.getElementById("container");

const selectedOnlyCheckBox = document.getElementById("onlySelected");
const searchBar = document.getElementById("search-bar");

const elems = [
    {id: '0', state: false, name: 'Afghanistan'},
    {id: '1', state: true, name: 'Albania'},
    {id: '2', state: false, name: 'Algeria'},
    {id: '3', state: false, name: 'Egypt'},
    {id: '4', state: true, name: 'Palestine'},
    {id: '5', state: true, name: 'Mauritania'},
    {id: '6', state: false, name: 'Morocco'},
    {id: '7', state: false, name: 'Qatar'},
    {id: '8', state: false, name: 'Saudi Arabia	'},
    {id: '9', state: true, name: 'Tunisia'},
    {id: '10', state: true, name: 'Turkey'},
    {id: '11', state: true, name: 'United Arab Emirates'},
];

let tempElems = [...elems];

refreshView(tempElems);

function handleSelectedOnly() {
    refreshView(tempElems);
}

function clearAll() {
    elems.map(elem => elem.state = false);
    refreshView(tempElems);
}

function refreshView(arr) {
    container.innerHTML = "";

    if(selectedOnlyCheckBox.checked)
        arr = arr.filter(elem => elem.state===true);

    arr.forEach(e => {
        container.innerHTML +=
        `<div class="row">
            <input class="selection-state" type="checkbox" ${e.state?"checked":""} onchange="handleSelect(this, ${e.id})">
            <a class="name">${e.name}</a>
        </div>`
    });
}

function handleSelect(checkbox, id) {
    tempElems.find(elem => elem.id == id).state = checkbox.checked;
    refreshView(tempElems);
}

function handleSearch() {
    tempElems = elems.filter(elem => elem.name.toLowerCase().includes(searchBar.value.toLowerCase()));
    refreshView(tempElems);
}
