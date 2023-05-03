const tempoInicial = $("#tempo-digitacao").text();

// $(document).ready(function () { //assim que todo o html é carregado, ele chama as funções
// versão enxuta (apenas chama o dollar, abre parenteses e ja chama a função)
$(function () {
    atualizaTamanhoFrase();
    incializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo); // se a função não retorna nada eu mando sem parenteses?
});

function atualizaTamanhoFrase() {
    const frase = $(".frase").text();
    const numeroPalavras = frase.split(" ").length;
    let tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numeroPalavras);
}

let campo = $(".campo-digitacao")

function incializaContadores() {
    campo.on('input', function () {
        let conteudo = campo.val();
        let quantidadePalavras = conteudo.split(/\S+/).length - 1;
        let quantidadeCaracteres = conteudo.length;
        $("#contador-palavras").text(quantidadePalavras);
        $("#contador-caracteres").text(quantidadeCaracteres);
    });
}

function inicializaCronometro() {
    let tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function () {
        let cronometroID = setInterval(function () { //todo setInterval retorna o seu próprio ID
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                campo.toggleClass("campo-desativado");
            }
        }, 1000);
    });
}

function inicializaMarcadores() {
    let frase = $(".frase").text();
    campo.on("input", function () {
        let digitado = campo.val();
        // let comparavel = frase.substr(0, digitado.length);
        let digitouCorreto = frase.startsWith(digitado);
        if(digitouCorreto) {
         campo.addClass("borda-verde");
        } else {
         campo.addClass("borda-vermelha");
        }
    });
}

function reiniciaJogo(){
    campo.attr("disabled",false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");

    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}


/**
 * os métodos .text(), .val() e .attr() tem função de pegar ou modificar um atributo/texto/valor
 * o .text() é utilizado para tags de texto (h2, p, span...)
 * .val() é utilizado para campos do tipo input
 * .attr() é utilizado para capturar, modificar, adicionar ou remover atributos do HTML
 */