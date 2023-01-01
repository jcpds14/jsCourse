function passwordClick(){
    const showPasswordCheckbox = document.querySelector('#checkbox');
    const passwordInput = document.querySelector('#password');
    const showPasswordText = document.querySelector('#showPass');

    if (showPasswordCheckbox.checked) {
        passwordInput.setAttribute('type', 'text');
        showPasswordText.innerHTML = 'Ocultar Senha';
    }else {
        passwordInput.setAttribute('type', 'password');
        showPasswordText.innerHTML = 'Mostrar Senha';
    }
    
}