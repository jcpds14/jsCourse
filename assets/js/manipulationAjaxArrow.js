//!Manipulação de String

let nome = '  Jean Carlos Pereira dos Santos    ';

//*trim para remover os espaços adjacentes
let resultado = nome.replace('Pereira', 'Abadia').toUpperCase().trim();

//*transforma string em Array
let resultadoInArray = resultado.split(' ');

console.log('nome: ', nome);
console.log('nome: ', resultado);
console.log('nome em array: ', resultadoInArray);

//!Manipulação de Numbers

let n = 10.32415;

let nString = n.toString();
console.log(nString);

let nFixed = n.toFixed(2);
console.log(nFixed);

//parses
let nParseInt = parseInt(n);
console.log(nParseInt);

let nParseFloat = parseFloat(n);
console.log(nParseFloat);

let nFixedNumber = parseFloat(n.toFixed(2));
console.log(nFixedNumber);

//!Manipulação de Array

let ingredients = ['Ovo', 'Farinha', 'Leite', 'Fermento', 'Óleo'];

ingredients.pop();
ingredients.shift();

console.log(ingredients);

ingredients.push('Óleo');
ingredients.unshift('Ovo');

//*join is like split but inverse
let ingredientsInString = ingredients.join('/');
console.log(ingredientsInString);

//*indexOf show the position of item in array
let ingredientIndex = ingredients.indexOf('Ovo');
console.log(ingredientIndex);

//*splice remove items of array, first param is index, second param is amount items to remove
ingredients.splice(2, 1);

//*sort order in alphabetical order
ingredients.sort();
console.log(ingredients);

//*reverse order
ingredients.reverse();
console.log(ingredients);

let numberList = [45, 9, 16, 35, 7];
let numberListX2 = [];
let numberList2 = [];

numberListX2 = numberList.map(function (item) {
    return item * 2;
});
numberList2 = numberList.filter(function (item) {
    return (item < 20) ? true : false;
})

let resX2 = numberListX2;
console.log(resX2);
let res = numberList2;
console.log(res);

let findNumber = numberList.find(function (item) { //findIndex return the position in array
    return (item == 16) ? true : false;
})
console.log(findNumber);

//!Desconstruction of objects

let person = {
    firstName: "Jean",
    lastName: "Carlos",
    age: 25,
    city: "Salvador",
    country: "Brasil",
    social: {
        facebook: "faKefacebook.com/jean.carlos",
        instagram: "Fakeinstagram.jean.carlos/",
        twitter: "fakeTwitterjeancarlos",
        youtube: "fakeYTjeancarlos"
    },
    fullname: function () {
        return this.firstName + this.lastName
    }
}

let { name, lastName, age, country } = person;

console.log(name, lastName, age, country);