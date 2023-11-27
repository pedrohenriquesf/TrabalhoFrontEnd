document.getElementById("pesquisa").addEventListener('keyup', function(event) {
    let pesquisas =  JSON.parse(window.localStorage.getItem("pesquisas"));
    let campo = document.getElementById("pesquisa").value.toLowerCase();//pega o valor do campo pesquisa em minusculo

    if (campo === "" || campo == null) {//se o campo for vazio, carrega todos os dados
        carregaCards(pesquisas);
    } else {
        carregaCards(pesquisas.filter(function(item) {//se o campo estiver preenchido, carrega somente o que contem no campo
            return item.nomeCard.toLowerCase().indexOf(campo) >= 0;
        }));
    }
});

function criarCard(id, nomeIcone, nomeCard, dataCard) {//Cria cada elemento e o card 
    let divCard = document.createElement("div");
    divCard.className = "c1";
    divCard.id = id;

    let link = document.createElement("a");
    link.href = "/AcoesPesquisa.html?id=" + id;
    link.className = "iconc1";

    let icone = document.createElement("i");
    icone.className = "fa fa-3x " + nomeIcone;

    link.appendChild(icone);

    let nome = document.createElement("h4");
    nome.textContent = nomeCard;

    let data = document.createElement("p");
    data.textContent = dataCard;

    divCard.appendChild(link);//Adiciona os link, nome e data na divCard
    divCard.appendChild(nome);
    divCard.appendChild(data);

    return divCard;
}

function carregaPagina() {//pega os dados das pesquisas e ja carrega as padroes
    let pesquisas =  window.localStorage.getItem("pesquisas");

    if(pesquisas == null || pesquisas == "") {
        /* JSON.stringify transforma objetos em texto, porquê o local storage só aceita texto */
        pesquisas = JSON.stringify([
            {
                "nomeIcone": "fa-laptop",
                "nomeCard": "Secomp 2023",
                "dataCard": "10/10/2023"
            },
            {
                "nomeIcone": "fa-users",
                "nomeCard": "UBUNTU 2022",
                "dataCard": "05/06/2022"
            },
            {
                "nomeIcone": "fa-female",
                "nomeCard": "MENINAS CPU",
                "dataCard": "01/04/2022"
            },
            {
                "nomeIcone": "fa-umbrella",
                "nomeCard": "COTB",
                "dataCard": "01/04/2022"
            }
        ]);

        window.localStorage.setItem("pesquisas", pesquisas);
    }

    /* JSON.parse transforma um texto em um objeto */
    pesquisas = JSON.parse(pesquisas);

    carregaCards(pesquisas);
}

function carregaCards(pesquisas) {//cria cada um dos cards
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    pesquisas.forEach(function(item, index) {
        lista.appendChild(criarCard(index, item.nomeIcone, item.nomeCard, item.dataCard));
    });
}

carregaPagina();