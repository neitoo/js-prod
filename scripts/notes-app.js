"use strict";

const inputElem = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElem = document.getElementById('list');


const notes = [
    {
        title: 'Выполнить все дела на день',
        completed: false
    },
];

function getNoteTemplate(note,index){
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center rounded my-1">
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
            <span>
            <span class="btn btn-small btn-${note.completed ? 'secondary' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
            </span>
        </li>
    `;
}

function render(){
    listElem.innerHTML = "";

    if(!notes.length)
        listElem.innerHTML = `<p class="text-center h4 text-secondary my-5">Ваш список задач пуст</p>`;

    for(let [index,note] of notes.entries())
        listElem.insertAdjacentHTML('beforeend', getNoteTemplate(note,index));
}

render();

createBtn.onclick = () => {
    if(!inputElem.value) return;
    
    const newNote= {
        title: inputElem.value,
        complete: false
    }
    notes.push(newNote);
    render();

    inputElem.value = "";
};

listElem.onclick = (event) =>{
    if(event.target.dataset.index){
        const index = Number(event.target.dataset.index);
        const type = event.target.dataset.type;

        if(type === 'toggle'){
            notes[index].completed = !notes[index].completed;
        } else if (type === 'remove') [
            notes.splice(index,1)
        ]

        render();
    }
}