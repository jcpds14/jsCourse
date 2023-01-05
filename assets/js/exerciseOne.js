function addLi(e) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        let liText = document.createElement('li');
        liText.innerText = document.querySelector('input').value;
        document.querySelector('ul').append(liText);

        inputText.value = '';
    }
}

let inputText = document.querySelector('input');
inputText.addEventListener('keyup', addLi);
