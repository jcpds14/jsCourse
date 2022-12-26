/*Estudando JavaScript
Exercício 1
*/

const formatter = new Intl.NumberFormat('pt-BR',
    {
        style: 'currency',
        currency: 'BRL'
    });

let carro = "Ferrari";
console.log(`O carro é: ${carro}`);

let precoDoBolo = 19.99;
console.log(`O preço do bolo é: ${formatter.format(precoDoBolo)}`);

let cidade = "São Paulo";
console.log(cidade);

// Exercício 2
//Exiba o resultado TRUE
let x = 10;
let y = 5;
console.log(x > y);

//Exiba o resultado FALSE
let w = "10";
let z = 10;
console.log(w === z);

//Exiba o resultado TRUE
let a = 10;
let b = 5;
console.log(a != b);

//Condicional para saber se está barato ou caro o preço da carne
let precoCarne = 40.3;

if (precoCarne <= 45) {
    console.log("Barato");
} else {
    console.log("Caro");
}


//função com retorno condicional    
function isAdult(x) {
    if (x < 18) {
        return false
    } else {
        return true
    }
}

let age = 17; //prompt("Qual a sua idade?");
let isAdultVerification = isAdult(age);

if (isAdultVerification) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}


//Função que calcula a porcentagem entre dois números

function calcPct(x, y) {
    return (x * y) / 100;
}

let firstNumber = 5;
let secondNumber = 120;
// let firstNumber = prompt("Digite o primeiro número (para ser a porcentagem)");
// let secondNumber = prompt("Digite o segundo número");
let pct = calcPct(firstNumber, secondNumber);

console.log(`${firstNumber}% de ${secondNumber} é ${pct}`)


//Exercício 3
/*
Função que calcula o preço do imóvel
- m2 = 3.000
- 1 quarto = m2
- 2 quartos = m2 * 1.2
- 3 quartos = m2 * 1.5
*/

function calcularImovel(metragem, quartos) {
    let precoDoMetro = 3000;
    let preco = 0;

    if (quartos === 1) {
        preco = metragem * precoDoMetro;
        console.log(`A casa custa ${formatter.format(preco)}`);
    } else if (quartos === 2) {
        preco = metragem * (precoDoMetro * 1.2);
        console.log(`A casa custa ${formatter.format(preco)}`);
    } else if (quartos === 3) {
        preco = metragem * (precoDoMetro * 1.5);
        console.log(`A casa custa ${formatter.format(preco)}`);
    } else {
        console.log(`Valor incorreto, digite um valor de 1 a 3`);
    }
}

let metro = 123
let quartos = 1;
let preco = calcularImovel(metro, quartos);

//Exercício 4
//Função para validar usuário e senha

function loginVerification(user, password) {
    let userCorrect = 'pedro';
    let passwordCorrect = 123;

    let acessVerification = (user === userCorrect && password === passwordCorrect) ? true : false;

    if (acessVerification) {
        console.log("Acesso permitido");
    } else {
        console.log("Acesso negado");
    }
}

let username = 'Pedro';
let password = 123;
loginVerification(username, password);


//! ARRAY
let colors = ['red', 'green', 'blue'];

console.log(colors[1]);

let cakeIngredients = [
    'água',
    'farinha',
    'ovo',
    'leite',
    'açúcar',
    'sal'
]

//shift = remove first item from array
cakeIngredients.shift();

//pop = remove last item from array
cakeIngredients.pop();

//push = add last item to array
cakeIngredients.push('fermento', 'chocolate');

//unshift = add first item to array
cakeIngredients.unshift('margarina');

console.log(cakeIngredients);

//*Exercício 5
//Qual o num da Ferrari

let cars = ['BMW', 'FERRARI', 'MERCEDES'];

// let xy = cars[1];
console.log('1.', cars[1]);

//Remove ferrari and add audi
cars.splice(1, 1, 'AUDI');
console.log(cars);

// add volvo to array
cars.push('VOLVO');

// how many elements in array
console.log(`${cars.length} Itens no array`);


//!Obejct

//Create a object with function and array
const person = {
    name: 'Jean',
    lastname: 'Carlos',
    fullname: function () {
        this.name + this.lastname;
    },
    age: 25,
    cars: [
        'CRUZE LTZ', 'UNO MILLE', 'TORO'
    ],
    clothing: {
        shirts: ['Regata', 'Polo', 'Social'],
        trousers: ['Jeans', 'Social', 'Bermuda'],
        shoes: ['Sapato Social', 'Tênis', 'Sapatênis']
    }
}
