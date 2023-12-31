"use strict";

const outputDate = document.getElementById('output');

const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');


function bindMode(name){
    return function(){
        mode = name;
        update();
    }
}

fullBtn.onclick = bindMode('full');
dateBtn.onclick = bindMode('date');
timeBtn.onclick = bindMode('time');

let mode = 'time';

update();
setInterval(update,1000)

function update(){
    outputDate.textContent = format(mode);
}

function format(formatMode){
    const now = new Date()
    switch(formatMode){
        case 'time': 
            return now.toLocaleTimeString();
        case 'date': 
            return now.toLocaleDateString();
        case 'full': 
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        
    }
}

