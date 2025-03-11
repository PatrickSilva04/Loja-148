//Declaraçao da variavel produtos, global
let produtos

window.onload = function () {
    var storageUser = localStorage.getItem("usuario")
    var user = JSON.parse(storageUser)
    document.getElementById("user").textContent = user.name
    document.getElementById("perfil").textContent = user.name
    document.getElementById("idPerfil").textContent = user.id
};

document.addEventListener("DOMContentLoaded", function () {
    //fetch dos produtos e armazebamento na variavel global
    fetch("../Dados/Loja.json")
        .then((response) => response.json())
        .then((data) => {
            produtos = data;
            const produtosContainer = document.getElementById("produtos container")

            produtos.forEach((produtos, index) => {
                const card = document.createElement("div")
                card.className = "card"
                card.style.width = "18rem"

                const imagem = document.createElement("img")
                imagem.src= produtos.imagem
                imagem.className = "card-img-top"

                const cardBody = document.createElement("div")
                cardBody.className = "card-body"

                const cardTitle = document.createElement("h5")
                cardTitle.className = "card-title"
                cardTitle.textContent = produtos.descricao

                const cardText = document.createElement("p")
                cardText.className = "card-text"
                cardText.textContent = "Preço: $" +produtos.preco.toFixed(2)

                const btnAdionarAoCarrinho = document.createElement("a")
                btnAdionarAoCarrinho.href ='#'
                btnAdionarAoCarrinho,className = "btn btn-primary btn-adicionar-ao-carrinho"
                btnAdionarAoCarrinho.setAttribute("data-indice", index)

            })
        })
        .catch((error) => console.error("Error ao carregar o arquivo JSON", error))
})