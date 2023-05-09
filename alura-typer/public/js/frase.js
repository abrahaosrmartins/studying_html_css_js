$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
        .fail(function () {
            $("#erro").toggle();
            setTimeout(() => {
                $("#erro").toggle();
            }, 2000)
        }).always(function () {
            $("#spinner").toggle();
        })
}

function trocaFraseAleatoria(data) {
    let frase = $(".frase");
    let numeroAleatorio = Math.floor(Math.random() * data.length)
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase()
    atualizaTempoInicial(data[numeroAleatorio].tempo)
}

$("#botao-frase-id").click(buscaFrase)

function buscaFrase() {
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    var dados = {id: fraseId}

    $.get("http://localhost:3000/frases", dados, trocaFrase)
        .fail(function () {
            $("#erro").toggle();
            setTimeout(() => {
                $("#erro").toggle();
            }, 2000)
        }).always(function () {
            $("#spinner").toggle();
        })
}

function trocaFrase(response) {
    let frase = $(".frase");
    frase.text(response.texto)
    atualizaTamanhoFrase()
    atualizaTempoInicial(response.tempo)
}