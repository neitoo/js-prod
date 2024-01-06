"use strict";

const filter = document.querySelector('#filter');
const list = document.querySelector('#list');

let USERS = [];

filter.addEventListener('input', (event) =>{
    const value = event.target.value.toLowerCase();
    const filteredUsers = USERS.filter((user) => user.name.toLowerCase().includes(value));
    render(filteredUsers);
});

async function start() {
    list.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    `;
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await resp.json()

        setTimeout(() => {
            USERS = data;
            render(data)
        }, 2000)
    } catch (error) {
        list.innerHTML = `
            <div class="d-flex justify-content-center">
                <div class="alert alert-danger" role="alert">
                    Ошибка загрузки данных: ${error.name}
                </div>
            </div>
        `;
    }
}

function render(users = {}) {
    if(users.length === 0){
        list.innerHTML = 'Совпадений не найдено.'
    } else{
        const html = users.map(toHTML).join('');
        list.innerHTML = html
    }
    
}

function toHTML(user){
    return `
    <li class="list-group-item rounded my-1">${user.name}</li>
    `
}

start();