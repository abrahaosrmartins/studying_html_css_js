import ehUmCPF from "./valida-cpf.js"

const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)); //blur é o evento de tirar o foco do input. clicar fora é um exemplo
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.lenght >= 1) {
        ehUmCPF(campo);
    }
}