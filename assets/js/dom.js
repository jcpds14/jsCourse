function darkWhiteBg() {
    let bg = document.querySelector('body');
    let btnDarkWhiteBg = document.querySelector('#btnDarkWhiteBg');
    console.log(btnDarkWhiteBg);
    
    if (bg.style.backgroundColor !== 'black') {
        btnDarkWhiteBg.innerHTML = 'White';
        bg.style.backgroundColor = 'black';
        bg.style.color = 'white';
    } else {
        btnDarkWhiteBg.innerHTML = 'Dark';
        bg.style.backgroundColor = 'white';
        bg.style.color = 'black';
    }
}
function redBg() {
    const btnRedBg = document.querySelector('body');
    const btnRedBgText = document.querySelector('#btnRedB');

    if (btnRedBg.classList.contains('bgRed')) { 
        btnRedBg.classList.remove('bgRed');
        btnRedBgText.innerHTML = 'White';

        // btnRedBg.classList.replace(to change ones to other class);
    } else {
        btnRedBg.classList.add('bgRed');
        btnRedBgText.innerHTML = 'Red';
    }
}
/* MORE SIMPLE CODE
function redBg() { 
    const bgRed = document.querySelector('body');

    bgRed.classList.toggle('bgRed')
}
*/


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
    if (e.keyCode === 13) {
        let adicionar = document.createElement("li");
        adicionar.innerText = document.querySelector("#texto2").value;
        document.querySelector("#test1 ul").appendChild(adicionar)
    }
}
//

function clickBtn4() {
    const btnAfter = document.querySelector("#test1");

    const ulAfter = btnAfter.querySelector("ul");
    ulAfter.after(ulAfter);

    for (i = 1; i <= 5; i++) {
        const liAfter = document.createElement('button', 'br');
        liAfter.innerHTML = `linha ${i}`;
        ulAfter.append(liAfter);
        clickBtn3();
    }
}