document.getElementById('formLogin').addEventListener('submit',
    function(event){
        event.preventDefault();
        
        if(confereDados()){
            document.getElementById("formError").style = "visibility: hidden;"
            window.location.replace('/Home.html');
        } else {
            document.getElementById("formError").style = "visibility: visible;"
        }
    }
)


//funcao de conferir os dados 
function confereDados() {
    const email = document.getElementById('E-mail').value;
    const password = document.getElementById('password').value;
    const localEmail = window.localStorage.getItem('email');
    const localPassword = window.localStorage.getItem('password');

    return email === localEmail && password === localPassword;

}