const form = document.getElementById('form');
const email = document.getElementById('E-mail')  
const password = document.getElementById('password')  
const password2 = document.getElementById('password2') 
const btncriar = document.getElementById('btncriar')

btncriar.addEventListener('click', function(event){
    event.preventDefault()
    if(confereSenha()){
    window.localStorage.setItem('email', email.value)
    window.localStorage.setItem('password', password.value)
    window.location.replace('/Index.html')
    }
})





function confereSenha() {
    if(password.value == password2.value){
        return true;
    }
        return false
}
