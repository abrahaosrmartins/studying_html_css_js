async function listaVideos() {
    /**
     * fetch é uma função assíncrona, logo retorna uma promessa (Objeto Promise).
     * O await faz com que a função espere a promessa ser resolvida para continuar a execução do código.
     * O await só pode ser usado dentro de uma função assíncrona.
     */
    const conexao = await fetch("http://localhost:3000/videos"); 
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const response = await conexao.json();
    return response;
}

/**
 * exporta um objeto com a função listaVideos para ser usada em outros arquivos.
 */
export const conectaApi = {
    listaVideos,
    criaVideo
}
