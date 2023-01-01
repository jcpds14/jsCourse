function addLi(e) {
    if (e.keyCode === 13) {
        let liText = document.createElement('li');
        liText.innerText = document.querySelector('input').value;
        document.querySelector('ul').append(liText);

        document.querySelector('input').value = '';
    }
}

let inputText = document.querySelector('input');
inputText.addEventListener('keyup', addLi);
