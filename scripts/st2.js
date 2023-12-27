"use strict";


// class Clock{
//     constructor({template}){
//         this.template = template;
//     }

//     render(){
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
    
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
    
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
    
//         let output = this.template
//           .replace('h', hours)
//           .replace('m', mins)
//           .replace('s', secs);
    
//         console.log(output);
//     }

//     stop(){
//         clearInterval(this.timer);
//     }

//     start(){
//         this.render();
//         this.timer = setInterval(() => this.render(),1000);
//     }
// }

// new Clock({template: 'h:m:s'}).start();


// class CoffeMachine{
//     #waterAmount = 0;


//     set waterAmount(value){
//         if(value < 0) throw new Error("Отрицательное количество воды");
//         this.#waterAmount = value;
//     }

//     get waterAmount(){
//         return this.#waterAmount;
//     }

//     constructor(power){
//         this._power = power;
//     }

//     get power(){
//         return this._power;
//     }
// }

// let coffeMachine = new CoffeMachine(100);

// coffeMachine.waterAmount = 100;


// fetch('/article/promise-chaining/user.json')
//   // Загружаем данные в формате json
//   .then(response => response.json())
//   // Делаем запрос к GitHub
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   // Загружаем ответ в формате json
//   .then(response => response.json())
//   // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
//   .then(githubUser => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => img.remove(), 3000); // (*)
//   });

