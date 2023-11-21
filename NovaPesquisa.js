const botaoNovaPesquisa = document.querySelector(".btn-criar")
const nomeDaPesquisa  = document.querySelector(".nomeDaPesquisa")
const data = document.querySelector(".data")
const imagem  = document.querySelector(".imagem")

botao.addEventListener("click",function(){ /*Clicar no Botão "Adicionar"*/
    caixinha.className = "dialog-mostrar";
    inpTit.value = "";
    inpDesc.value = "";
    inpImg.value = "";
});