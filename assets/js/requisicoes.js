//JSON.stringify = transform JSON into string
//JSON.parse = transform string into JSON
console.log(JSON.stringify({a:1,b:2,c:3}))
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))

/*
!full method
function clicou() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => alert(json[149].body))
        .catch(error => {
            console.log("Quando a requisição tem algum problema o catch é executado");
            console.error(error);
        }).finally(() => {
            console.log('finally é executado quando quando a requisição dá erro ou quando normalmente');
        });

}
*/
//!async await method
async function clicou() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const json = await response.json();

    console.log(json);

}
//!async await method
async function insert() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            body: 'This is a new content',
            title: 'This is a new title',
            userId: 3
        })
    })
    const json = await response.json();

    console.log(json);

    //*full method
    // .then(response => response.json())
    // .then(json => console.log(json));
}

document.querySelector('#button1').addEventListener('click', clicou);
document.querySelector('#insert').addEventListener('click', insert);

async function insertPhotos() {
    document.querySelector("#insertPhotos").innerHTML = "Carregando..."

    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const json = await response.json();
    mountPhotos(json);
}

function mountPhotos(list) {
    let html = '';

    for (let i in list) {
        html += `<h3>${list[i].title}</h3>`;
        html += `<img src="${list[i].thumbnailUrl}" alt="${list[i].url}"></img></br>`;
        html += "</hr>"
    }

    document.querySelector("#insertPhotos").innerHTML = html;
}

document.querySelector('#btnPhotos').addEventListener('click', insertPhotos);