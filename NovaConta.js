const btncriar = document.getElementById('btncriar')

document.getElementById('criarConta').addEventListener('submit', function(event){
        event.preventDefault(); // Não deixa executar a função padrão do formulário

        let email = document.getElementById('E-mail').value;
        let password = document.getElementById('password').value;
        let password2 = document.getElementById('password2').value;

        if(password === password2){
            window.localStorage.setItem('email', email);
            window.localStorage.setItem('password', password);
            window.location.replace('/Index.html');
        }
    }
)

document.getElementById('password').addEventListener('keyup', function(event){
        let password = document.getElementById('password').value;
        let password2 = document.getElementById('password2').value;

        if(password === password2){
            document.getElementById('formError').style = "visibility: hidden;"
        } else {
            document.getElementById('formError').style = "visibility: visible;"
        }
    }
)

document.getElementById('password2').addEventListener('keyup', function(event){
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    if(password === password2){
        document.getElementById('formError').style = "visibility: hidden;"
    } else {
        document.getElementById('formError').style = "visibility: visible;"
    }
}
)