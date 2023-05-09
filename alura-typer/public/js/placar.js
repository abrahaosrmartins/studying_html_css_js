$('#botao-placar').click(mostraPlacar)
$("#botao-sync").click(sincronizaPlacar)

function inserePlacar() {
    let corpoTabela = $(".placar").find("tbody");
    let usuario = "Douglas"
    let numPalavras = $("#contador-palavras").text();

    let linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);

    $(".placar").slideDown(500);
    scrollPlacar();
}

function scrollPlacar() {
    // offset retorna a posição que o elemento está na página
    //. top pega a distância que ele está do topo
    let posicaoPlacar = $(".placar").offset().top;
    $("body").animate(
        { // recebe um objeto com o css que vai ser animado, e o tempo de animação
            scrollTop: posicaoPlacar + "px"
        }, 1000);
}

function novaLinha(usuario, palavras) {
    let linha = $("<tr>");
    let colunaUsuario = $("<td>").text(usuario);
    let colunaPalavras = $("<td>").text(palavras);
    let colunaRemover = $("<td>");

    let link = $("<a>").addClass("botao-remover").attr("href", "#");
    let icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    let linha = $(this).parent().parent()
    linha.fadeOut(1000);
    setTimeout(function () {
        linha.remove();
    }, 1000); // se não fizer o setTimeOut, o remove é executado antes do fadeOut terminar
}

function mostraPlacar() {
    // $(".placar").toggle().show();
    // $(".placar").toggle().hide();
    // $(".placar").toggle(); // mostra ou esconde um elemento
    // $(".placar").slideDown(500);
    // $(".placar").slideUp(500);
    $(".placar").stop().slideToggle(600);
    // o .stop() para qualquer animação que estiver em andamento antes de executar a próxima
}

function sincronizaPlacar() {
    console.log("oi");
}