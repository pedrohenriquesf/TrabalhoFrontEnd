let queryStrings = new URLSearchParams(window.location.search);
document.getElementById("linkModificar").href = "ModificarPesquisa.html?id=" + queryStrings.get("id");