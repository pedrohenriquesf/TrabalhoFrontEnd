document.getElementById('listaImagem').addEventListener('change', function(event) {
  /*Muda os icones selecionados */
    let icone = document.getElementById('listaImagem').value;
    document.getElementById("exemploIcone").className = "fa fa-3x " + icone;
});

document.getElementById('formAdicionar').addEventListener('submit', function(event) {
    event.preventDefault();//evita que o formulario seja enviado

    let pesquisas = window.localStorage.getItem('pesquisas');
    let listaImagem = document.getElementById('listaImagem').value;
    let txtPesquisa = document.getElementById('txtPesquisa').value;
    let txtData = new Date(document.getElementById('txtData').value).toLocaleDateString();
    //Cria uma variavel data, e conveter pra string

    if (pesquisas === "" || pesquisas == null) {
        pesquisas = [];
    } else {
        pesquisas = JSON.parse(pesquisas);//converte texto em objeto
    }


    pesquisas.push(//joga oq foi passado como ultimo item da matriz
        {
            "nomeIcone": listaImagem,
            "nomeCard": txtPesquisa,
            "dataCard": txtData
        }
    );

    window.localStorage.setItem("pesquisas", JSON.stringify(pesquisas));//transforma objeto em texto
    window.location.replace('/Home.html');

});