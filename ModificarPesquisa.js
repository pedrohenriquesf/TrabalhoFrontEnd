document.getElementById('listaImagem').addEventListener('change', function(event) {
    /*Muda os icones selecionados */
      let icone = document.getElementById('listaImagem').value;
      document.getElementById("exemploIcone").className = "fa fa-3x " + icone;
  });

document.getElementById('botaoExcluir').addEventListener('click', function(event){
   event.preventDefault(); //impede o evento, esta impedindo o link
   
   let queryStrings = new URLSearchParams(window.location.search);
   let index = queryStrings.get("id");

   let pesquisas = JSON.parse(window.localStorage.getItem('pesquisas')); //carregando array com as pesquisas
   pesquisas.splice(index, 1);//localiza o index e exclui a partir dele
   window.localStorage.setItem('pesquisas', JSON.stringify(pesquisas));
   window.location.replace('/Home.html');
});

function carregaDados() {
    let pesquisas = JSON.parse(window.localStorage.getItem('pesquisas')); //carregando array com as pesquisas
    let queryStrings = new URLSearchParams(window.location.search);
    let index = queryStrings.get("id");//posicao da matriz
    let data = pesquisas[index].dataCard;
    data = data.substring(6,10) + "-" + data.substring(3,5) + "-" + data.substring(0,2);//Arruma a data, substring pega o trecho de uma 

    //Mechendo na DOM da pagina, carrega o nome para cada card
    document.getElementById('txtPesquisa').value = pesquisas[index].nomeCard;//Pega oq esta na pesquisa e passa para o campo
    document.getElementById('txtData').value = data;
    document.getElementById('listaImagem').value = pesquisas[index].nomeIcone;
    document.getElementById('exemploIcone').className = "fa fa-3x " + pesquisas[index].nomeIcone;
}

//capturando o formulario para trabalhar nele e adicionando o observador no evento submit
document.getElementById('formModifica').addEventListener('submit', function(event){
    event.preventDefault(); //impede o evento, esta impedindo o formulario
    let pesquisas = JSON.parse(window.localStorage.getItem('pesquisas')); //carregando array com as pesquisas
    let queryStrings = new URLSearchParams(window.location.search);
    let index = queryStrings.get("id");//posicao da matriz

    pesquisas[index].nomeCard = document.getElementById('txtPesquisa').value;//Pega oq esta campo e passa para o array da pesquisa
    pesquisas[index].dataCard = new Date(document.getElementById('txtData').value).toLocaleDateString();
    pesquisas[index].nomeIcone = document.getElementById('listaImagem').value;
    
    window.localStorage.setItem('pesquisas', JSON.stringify(pesquisas));//
    window.location.replace('/Home.html');
});

carregaDados();