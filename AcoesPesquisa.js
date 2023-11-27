let queryStrings = new URLSearchParams(window.location.search);
document.getElementById("linkModificar").href = "ModificarPesquisa.html?id=" + queryStrings.get("id");
//recebe o id do card que vai ser editavel pelo html, e o querystring pega o id