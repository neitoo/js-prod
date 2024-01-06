"use strict";

const list = document.querySelector('#list');

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
    const html = users.map(toHTML).join('');
    console.log(html);
    list.innerHTML = html
}

function toHTML(user){
    return `
    <li class="list-group-item rounded my-1">${user.name}</li>
    `
}

start();