import { jogos } from "@/data/listaJogos";

export const retornarOsJogos = () => {
    return jogos;
} 


export const buscarJogo = (textoDigitado) => {
    return jogos.filter((jogo) => 
    jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase())||   
    jogo.plataforma.toLowerCase().includes(textoDigitado.toLowerCase())
)} 


export const filtrarPorPlataforma = (plataforma) => {
    return jogos.filter((jogo) => jogo.plataforma === plataforma)
}