"use strict";

const resultElement = document.getElementById('result');
const num_a = document.getElementById('number-a');
const num_b = document.getElementById('number-b');
const res_btn = document.getElementById('input-btn');

const buttons = {
    plus: document.getElementById('plus'),
    minus: document.getElementById('minus'),
    mnoz: document.getElementById('mnoz'),
    del: document.getElementById('dele')
};

class Calculator{
    #operator = ""

    set operator(oper){
        this.#operator = oper
    }

    operate(numA, numB) {
        switch (this.#operator) {
            case "+":
                return +numA + +numB;
            case "-":
                return +numA - +numB;
            case "*":
                return numA * numB;
            case "/":
                if (numB != 0) {
                    return numA / numB;
                } else {
                    return "Ошибка: Деление на 0 невозможно";
                }
            default:
                return "Ошибка: Выберите оператор";
        }
    }

    
}


let calculator = new Calculator();

function handleClick(btn) {
    for (const button of Object.values(buttons)) {
        button.classList.remove('active');
    }
    btn.classList.toggle('active', !btn.classList.contains('active'));
}

buttons.plus.onclick = () => {
    handleClick(buttons.plus);
    calculator.operator ='+';
};

buttons.minus.onclick = () => {
    handleClick(buttons.minus);
    calculator.operator ='-';
};

buttons.mnoz.onclick = () => {
    handleClick(buttons.mnoz);
    calculator.operator ='*';
};

buttons.del.onclick = () => {
    handleClick(buttons.del);
    calculator.operator ='/';
};


res_btn.onclick = () => {
    let A = num_a.value;
    let B = num_b.value;
    resultElement.textContent = calculator.operate(A,B);
};

