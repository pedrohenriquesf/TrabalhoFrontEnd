const email = document.getElementById('E-mail')  
const password = document.getElementById('password')
const btnconfirma = document.getElementById('btnconfirma')



btnconfirma.addEventListener('click', function(event){
    event.preventDefault()
    if(confereDados()){
    window.localStorage.setItem('email', value)
    window.localStorage.setItem('password', value)
    window.location.replace('/Home.html')
    }
})



function confereDados() {
    if(email === localStorage && password === localStorage){
       return true
    }
       return false 


}