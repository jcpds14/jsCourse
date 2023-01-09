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

function insert() {
    fetch('https://jsonplaceholder.typicode.com/comments', {
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
        .then(response => response.json())
        .then(json => console.log(json));
}

document.querySelector('#button1').addEventListener('click', clicou);
document.querySelector('#insert').addEventListener('click', insert);