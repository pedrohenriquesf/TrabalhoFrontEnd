const form = document.getElementById('form');
const email = document.getElementById('email')  
const password = document.getElementById('password')  
const password2 = document.getElementById('password2') 

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (confereSenha()){
        alert("Conta Criada com sucesso")
        window.location.replace("Index.html")
    }
})

function confereSenha() {
    if (password.value === password2.value){
        password2.setCustomValidity('');
        return true;
    } else {
        password2.setCustomValidity('As senhas não conferem');
        return false;
    }
}