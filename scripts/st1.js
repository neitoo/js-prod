"use strict";


function Calculator(){
    this.read = function(){
        this.a = +prompt("a:");
        this.b = +prompt("b:");
    };

    this.sum = function(){
        return this.a + this.b;
    };
    this.mul = function(){
        return this.a * this.b;
    };
}

let calculator = new Calculator();
//calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

let ladder = {
    step: 0,
    
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;

      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
};

//ladder.up().up().down().showStep().down().showStep();


function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function(){
        this.value += +prompt("value:",0);
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

//accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
//accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

//alert(accumulator.value);

function randomFloat(min,max){
    return min + Math.random() * (max - min);
}

//alert(randomFloat(1,5));

function randomInteger(min,max){
    let rand = min - 0.5 + Math.random() * (max-min+1);

    return Math.round(rand);
}

//alert(randomInteger(1,5));

function sumInput(){
    let numbers = [];

    while(true){
        let num = prompt("Value:", 0);

        if(num === "" || num === null || !isFinite(num)) break;

        numbers.push(+num);
    }

    let sum = 0;
    for(let value of numbers){
        sum += value;
    }
    
    return sum;
}

//alert(sumInput());

function camelize(str){
    return str
        .split("-")
        .map( (word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join("");
}


function filterRange(arr, a, b){
    return arr.filter(number => number >= a && number <= b);
}

function filterRangeInPlace(arr,a,b){
    for(let i = 0; i < arr.length; i++){
        let value = arr[i];

        if(value < a || value > b){
            arr.splice(i,1);
            i--;
        }
    }
}


function copySorted(arr){
    return arr.slice().sort();
}

function unique(arr) {
    return Array.from(new Set(arr));
}

function aclean(arr){
    let map = new Map();

    for(let word of arr){
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted,word);
    }

    return Array.from(map.values());
}

function sumSalaries(arr){
    let sum = 0;
    for(let value of Object.values(arr)){
        sum += value;
    }

    return sum;
}

function count(arr){
    return Object.keys(arr).length;
}

function sumTo(n){
    return (n<=1) ? n : (n + sumTo(n-1));
}

function factorial(n){
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function fib(n){
    return n <= 1 ? n : fib(n-1) + fib(n-2);
}

function printList(list){
    console.log(list.value);

    if(list.next){
        printList(list.next);
    }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printNumbers(from,to){
    let i = from;

    let timerId = setInterval( function(){
        alert(i);
        if(i==to){
            clearInterval(timerId);
        }
        i++;
    },1000);
}

let worker = {
    someMethod(){
        return 1;
    },

    slow(min,max){
        alert(`Called with ${min},${max}`);
        return min + max;
    }
}

function cashingDecorator(func,hash){
    let cashe = new Map();

    return function(){
        let key = hash(arguments);
        if(cashe.has(key)){
            return cashe.get(key);
        }

        let result = func.call(this,...arguments);

        cashe.set(key,result);
        return result;
    }
}

function hash(args){
    return args[0]+','+args[1];
}

worker.slow = cashingDecorator(worker.slow,hash);

function work(a, b) {
    alert( a + b ); 
}

function spy(func){
    function wrapper(...args){
        wrapper.calls.push(args);
        return func.apply(this,args);
    }

    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "123") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};
  
//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
