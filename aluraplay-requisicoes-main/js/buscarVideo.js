import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", event => buscarVideo(event));

async function buscarVideo(event) {
    event.preventDefault();
    const dadosdePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosdePesquisa);

    const lista = document.querySelector("[data-lista]");
    
    // while (lista.firstChild) {
    //     lista.removeChild(lista.firstChild)
    // }
    
    lista.innerHTML = '';
    busca.forEach(element => lista.appendChild(
        constroiCard(element.titulo, element.descricao, element.url, element.imagem)
        ));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com este termo</h2>`
    }

}