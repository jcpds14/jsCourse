function clicked() {
    console.log('CLICOU NO BOTÃO 1 USANDO ONCLICK()');
}

let clickButton = document.querySelector(".button2");
clickButton.addEventListener('click', () => console.log('CLICOU NO BOTÃO 2 USANDO LISTENER'));

function clickBtn3() {
    const btnHtml = document.querySelector('#test1');
    const ul = btnHtml.querySelector('ul');

    let newLi = document.createElement('strong');
    newLi.innerHTML = "Item adicionado <br>";

    ul.append(newLi);
}


//add elemento de acordo com o que digita ao pressionar enter
function adicionarElemento(e) {
    if (e.keyCode == 13) {
        let adicionar = document.createElement("li");
        adicionar.innerText = document.querySelector("#texto2").value;
        document.querySelector("#test1 ul").appendChild(adicionar)
    }
}