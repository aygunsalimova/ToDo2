const input = document.querySelector('.form');
const add = document.querySelector('#button-1');
let list = document.querySelector('.list-div');

add.addEventListener('click', buttonAdd);
document.addEventListener('DOMContentLoaded', loaded);


list.addEventListener('click', () => {
    let element = e.target;

    if (element.className == "btn btn-danger btn-sm") {
        element.parentElement.classList.add('d-none');

        let text = element.parentElement.textContent;
        let gonder = text.substr(0, text.length - 3)
        localSil(gonder);

    }
})

//For Add button
function buttonAdd(e) {
    e.preventDefault(); //??????????????????????
    add(input.value);
    addToLocalStorage(input.value);

    input.value = "";
}

//For adding new notes to local storage
function addToLocalStorage(not) {
    let notes;
    if (localStorage.getItem('notes') === null) {
        notes = []
    } else {
        notes = JSON.parse(localStorage.getItem('notes'));
    }
    notes.push(not);
    localStorage.setItem('notes', JSON.stringify(notes));
};


//Creat new notes
function add() {
    let div = document.createElement('div');
    let listdiv = document.querySelector('.list-div');
    div.classList.add('input-group');
    listdiv.appendChild(div);

    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.style.width('70%');
    div.appendChild(li);

    let button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-danger')
    button.type = 'button';
    button.textContent = 'Delete';
    div.appendChild(button);

    let button = document.createElement('button');
    button.classList.add('btn')
    button.classList.add('btn-success')
    button.classList.add('btn-sm')
    button.type = 'button';
    yeniLi.textContent = 'Add';
    div.appendChild(button);

}

//Get from local storage
function getFromLocalStorage() {
    let notes;

    if (localStorage.getItem('notes') === null) {
        notlar = [];
    } else {
        notlar = JSON.parse(localStorage.getItem('notes'));
    }

    notlar.forEach(item => {
        add(item)
    });

}