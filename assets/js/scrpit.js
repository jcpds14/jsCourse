/*Estudando JavaScript
Exercício 1
*/

let carro = "Ferrari";
console.log(`O carro é: ${carro}`);

let precoDoBolo = 19.99;
console.log(`O preço do bolo é: ${precoDoBolo}`);

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