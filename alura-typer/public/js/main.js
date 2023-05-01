let frase = $(".frase").text();
let numeroPalavras = frase.split(" ").length;
let tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numeroPalavras);

let campo = $(".campo-digitacao")
campo.on('input', function () {
    let conteudo = campo.val()
    let quantidadePalavras = conteudo.split(/\S+/).length - 1;
    let quantidadeCaracteres = conteudo.length
    $("#contador-palavras").text(quantidadePalavras)
    $("#contador-caracteres").text(quantidadeCaracteres)
})

let tempoRestante = $("#tempo-digitacao").text()

campo.on("focus", function () {
    setInterval(function () {
        tempoRestante--
        console.log(tempoRestante);
        $("#tempo-digitacao").text(tempoRestante)
        if (tempoRestante) {
            campo.attr("disabled", true)
        }
    }, 1000)
})

/**
 * os métodos .text(), .val() e .attr() tem função de pegar ou modificar um atributo/texto/valor
 * o .text() é utilizado para tags de texto (h2, p, span...)
 * .val() é utilizado para campos do tipo input
 * .attr() é utilizado para capturar, modificar, adicionar ou remover atributos do HTML
 */