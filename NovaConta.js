const btncriar = document.getElementById('btncriar')//constante pra pegar o valor do botao

document.getElementById('criarConta').addEventListener('submit', function(event){
        event.preventDefault(); // Não deixa executar a função padrão do formulário

        //Pega os valores digitados nos campos 
        let email = document.getElementById('E-mail').value;
        let password = document.getElementById('password').value;
        let password2 = document.getElementById('password2').value;

        //Compara as senhas
        if(password === password2){
            window.localStorage.setItem('email', email);
            window.localStorage.setItem('password', password);
            window.location.replace('/Index.html');
        }
    }
)

//compara as senhas e mostra o erro até as senhas serem iguais
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
//compara as senhas e mostra o erro até as senhas serem iguais
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