'use client';
import Image from "next/image";
import Lupa from '../../public/lupa.png'
import Card_jogos from "@/components/Card_jogos";
import { useState } from "react";
import { retornarOsJogos, buscarJogo, filtrarPorPlataforma } from "@/services";

export default function Home() {

const [exibindoOsJogos, setExibindoOsJogos] = useState(retornarOsJogos());
const [textoBusca, setTextoBusca] = useState('');

const handleFiltrarPorPlataforma = (plataforma) => {
  setExibindoOsJogos(filtrarPorPlataforma(plataforma));
  setTextoBusca('');
};

const handleLimparFiltro = () => {
  setExibindoOsJogos(retornarOsJogos());
  setTextoBusca('');
};

const handleBuscarJogo = (textoDigitado) => {
  setTextoBusca(textoDigitado);
  setExibindoOsJogos(buscarJogo(textoDigitado))
}

return (
  <main className='flex flex-col items-center justify-center text-center text-slate-300 text-xl py-5 font-medium'>
    <h1 className="text-4xl mb-5">Lista de Jogos</h1>

    <div className="flex items-center gap-5 bg-black my-10 px-5 w-3/6 h-10 text-center text-white rounded-full">
      <Image className='w-8 h-8 ' src={Lupa} alt="icone da lupa"/>
      <input className=" bg-black w-full text-base"
        type="text"
        value={textoBusca}
        onChange={(event) => handleBuscarJogo(event.target.value)}
        placeholder="Pesquisa um jogo ou plataforma">
      </input>
    </div>

    <div className='bg-black text-white flex flex-row items-center justify-center flex-wrap p-2 gap-4 rounded-lg w-3/6'>
      <button onClick={() => handleFiltrarPorPlataforma('nintendo')} className="bg-red-600  rounded-lg w-52">Nintendo</button>
      <button onClick={() => handleFiltrarPorPlataforma('xbox')} className="bg-green-600  rounded-lg w-52">Xbox</button>
      <button onClick={() => handleFiltrarPorPlataforma('playstation')} className="bg-blue-600 rounded-lg w-52">Playstation</button>
      <button onClick={() => handleLimparFiltro()} className="bg-white text-black w-full rounded-lg">Limpar filtro</button>
    </div>

    <div className="pt-10 flex flex-col gap-4 ">
      {
        exibindoOsJogos.map( (jogo, index)=> (
          <Card_jogos key={index} nome={jogo.nome} plataforma={jogo.plataforma}/>
      ))}
    </div>
  </main>
)}
