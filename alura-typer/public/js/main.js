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

campo.one("focus", function () {
    let cronometroId = setInterval(function () { //todo setInterval retorna o seu próprio ID
        tempoRestante--
        // console.log(tempoRestante);
        $("#tempo-digitacao").text(tempoRestante)
        if (tempoRestante < 1) {
            campo.attr("disabled", true)
            clearInterval(cronometroId)
        }
    }, 1000)
})

/**
 * os métodos .text(), .val() e .attr() tem função de pegar ou modificar um atributo/texto/valor
 * o .text() é utilizado para tags de texto (h2, p, span...)
 * .val() é utilizado para campos do tipo input
 * .attr() é utilizado para capturar, modificar, adicionar ou remover atributos do HTML
 */