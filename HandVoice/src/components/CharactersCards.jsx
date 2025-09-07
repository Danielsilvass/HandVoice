import VictorCaracter from "../../public/VictorCaracter.png"
import KadriCaracter from "../../public/KadriCaracter.png"
import MotoCaracter from "../../public/MotoCaracter.png"
import DanielCaracter from "../../public/DanielCaracter.png"
import { useState } from "react"

import BackgroundCaracter from "../../public/BackgroundCaracter.png"
import {Slider} from "../hooks/Slider.jsx"

import { useIsMobile } from "../hooks/useIsMobile.jsx";

export function CharactersCards() {
    const [activeInfo, setActiveInfo] = useState(null); 

    const toggleInfo = (character) => {
        if (activeInfo === character) {
            setActiveInfo(null);
        } else {
            setActiveInfo(character);
        }
    };

    const isMobile = useIsMobile()

    const MotoInfo = () => {
        return (
            <div>
                {isMobile ? (
                    <div className="bg-darksblue text-white flex flex-col justify-center items-center rounded-2xl m-2">
                            <h1 className="font-['Pixelify_Sans'] font-bold text-4xl">Moto-Moto</h1>
                            <div className="relative w-40 h-46">
                                <img
                                    src={MotoCaracter}
                                    alt="Frame"
                                    className="absolute inset-0 w-full h-full z-10"
                                />
                                <img
                                    src={BackgroundCaracter}
                                    alt="Personagem"
                                    className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                                />
                            </div>
                            <p className="font-['Pixelify_Sans'] font-semibold m-3">
                            Moto:
                                Poder: Força é rolagem <br />
                                Historia: 
                                Moto é um cara que perdeu a habilidade de falar em uma aposta no bar. Desde então, 
                                ele não conseguiu mais se comunicar como as outras pessoas.
                                Depois de um tempo, ele vai a um bar para descontrair um pouco. Lá, encontra três pessoas perto do barman.
                                Ele se senta para beber algo, e então um velho se aproxima, oferecendo uma luva que poderia mudar seu estilo de vida
                                Ele e os outros caras aceitam a oferta. Depois de colocarem a luva, percebem que ela está corroendo seus braços.
                                Com isso, o objetivo dele passa a ser encontrar o velho para se livrar daquela luva.
                                Nisso, ele tinha pouca habilidade para se comunicar por causa das luvas e encontrava 
                                grande dificuldade em usá-las. Mas, quando conseguia, disparava um grande poder.
                            </p>
                    </div>
                ): (
                    <div className="bg-darksblue flex justify-center items-center text-white p-6 rounded-2xl w-full max-w-[950px] gap-7">
                        <div className="w-1/2">
                            <h1 className="font-['Pixelify_Sans'] font-bold text-4xl">Moto-Moto</h1>
                            <p className="font-['Pixelify_Sans'] font-semibold">
                                Moto:
                                Poder: Força é rolagem <br />
                                Historia: 
                                Moto é um cara que perdeu a habilidade de falar em uma aposta no bar. Desde então, 
                                ele não conseguiu mais se comunicar como as outras pessoas.
                                Depois de um tempo, ele vai a um bar para descontrair um pouco. Lá, encontra três pessoas perto do barman.
                                Ele se senta para beber algo, e então um velho se aproxima, oferecendo uma luva que poderia mudar seu estilo de vida
                                Ele e os outros caras aceitam a oferta. Depois de colocarem a luva, percebem que ela está corroendo seus braços.
                                Com isso, o objetivo dele passa a ser encontrar o velho para se livrar daquela luva.
                                Nisso, ele tinha pouca habilidade para se comunicar por causa das luvas e encontrava 
                                grande dificuldade em usá-las. Mas, quando conseguia, disparava um grande poder.
                            </p>
                        </div>
                        <div className="relative w-70 h-78">
                        <img
                            src={MotoCaracter}
                            alt="Frame"
                            className="absolute inset-0 w-full h-full z-10"
                        />
                        <img
                            src={BackgroundCaracter}
                            alt="Personagem"
                            className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                        />
                    </div>
                </div>
                )}
            </div>
            
        )
    }
    const DanielInfo = () => {
        return (
            <div>
                {isMobile ? (
                    <div className="bg-darksblue text-white flex flex-col justify-center items-center rounded-2xl m-2">
                            <h1 className="font-['Pixelify_Sans'] font-bold text-4xl">Daniel</h1>
                            <div className="relative w-40 h-46">
                                <img
                                    src={DanielCaracter}
                                    alt="Frame"
                                    className="absolute inset-0 w-full h-full z-10"
                                />
                                <img
                                    src={BackgroundCaracter}
                                    alt="Personagem"
                                    className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                                />
                            </div>
                            <p className="font-['Pixelify_Sans'] font-semibold m-3">
                            Daniel:
                                Poder: Velocidade  
                                Historia: 
                                Daniel sofreu um acidente grave que atingiu sua cabeça, e, com isso, perdeu a habilidade de falar.
                                Ele teve que desenvolver a comunicação por meio da linguagem de sinais. 
                                Certa noite, o Daniel decidiu ir a um bar. Ele se sentou em frente ao barman e pediu uma bebida.
                                Depois de um tempo, três caras chegaram ao bar e se sentaram ao lado dele.
                                Depois de um tempo, um velho chegou carregando uma caixa estranha com luvas que, segundo ele, eram inovadoras.
                                Daniel duvidou da proposta, mas ao ver as outras três pessoas colocando as luvas, decidiu experimentar também.
                                Assim que colocou a sua, sentiu uma picada estranha no braço, seguida por uma sensação esquisita.
                                Quando tentou perguntar ao velho o que aquelas luvas faziam, ele já havia desaparecido.
                                Depois de se acostumar com a dor, ele sentiu algo estranho em sua mão e descobriu que aquela luva lhe dava poderes de velocidade.
                            </p>
                    </div>
                ): (
                    <div className="bg-darksblue flex justify-center items-center text-white p-6 rounded-2xl w-full max-w-[950px] gap-7">
                        <div className="w-1/2">
                            <h1 className="font-['Pixelify_Sans'] font-bold text-4xl">Daniel</h1>
                            <p className="font-['Pixelify_Sans'] font-semibold">
                                Daniel:
                                Poder: Velocidade  
                                Historia: 
                                Daniel sofreu um acidente grave que atingiu sua cabeça, e, com isso, perdeu a habilidade de falar.
                                Ele teve que desenvolver a comunicação por meio da linguagem de sinais. 
                                Certa noite, o Daniel decidiu ir a um bar. Ele se sentou em frente ao barman e pediu uma bebida.
                                Depois de um tempo, três caras chegaram ao bar e se sentaram ao lado dele.
                                Depois de um tempo, um velho chegou carregando uma caixa estranha com luvas que, segundo ele, eram inovadoras.
                                Daniel duvidou da proposta, mas ao ver as outras três pessoas colocando as luvas, decidiu experimentar também.
                                Assim que colocou a sua, sentiu uma picada estranha no braço, seguida por uma sensação esquisita.
                                Quando tentou perguntar ao velho o que aquelas luvas faziam, ele já havia desaparecido.
                                Depois de se acostumar com a dor, ele sentiu algo estranho em sua mão e descobriu que aquela luva lhe dava poderes de velocidade.
                            </p>
                        </div>
                        <div className="relative w-70 h-78">
                        <img
                            src={DanielCaracter}
                            alt="Frame"
                            className="absolute inset-0 w-full h-full z-10"
                        />
                        <img
                            src={BackgroundCaracter}
                            alt="Personagem"
                            className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                        />
                    </div>
                </div>
                )}
            </div>
            
        )
    }
    const KadriInfo = () => {
        return (
            <div>
                {isMobile ? (
                    <div className="bg-darksblue text-white flex flex-col justify-center items-center rounded-2xl m-2">
                            <h1 className="font-['Pixelify_Sans'] font-bold text-4xl">Kaiser</h1>
                            <div className="relative w-40 h-46">
                                <img
                                    src={KadriCaracter}
                                    alt="Frame"
                                    className="absolute inset-0 w-full h-full z-10"
                                />
                                <img
                                    src={BackgroundCaracter}
                                    alt="Personagem"
                                    className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                                />
                            </div>
                            <p className="font-['Pixelify_Sans'] font-semibold m-3">
                                Kaiser:
                                Poder: Tiro <br/>
                                Historia: 
                                Kairon Arias é um homem que não gosta muito de conversar com as pessoas, 
                                preferindo se comunicar por meio da linguagem de sinais.
                                Certo dia, ao entrar em um bar, ele percebe duas pessoas sentadas perto do balcão. Pouco depois, 
                                um homem grande se senta ao seu lado e pede uma bebida.
                                Depois de um tempo, chegam mais duas pessoas ao bar.
                                Junto com elas, chega um velho estranho que oferece uma luva para as quatro pessoas que estavam lá.
                                Kairon coloca a luva, mas sente algo estranho ao colocá-la.
                                Kairon percebe que sua mão está estranha e que a luva está lhe dando poderes, 
                                incluindo o controle da gravidade e a habilidade de dar dashes rápidos.
                            </p>
                    </div>
                ): (
                    <div className="bg-darksblue flex justify-center items-center text-white p-6 rounded-2xl w-full max-w-[950px] gap-7">
                        <div className="w-1/2">
                            <h1 className="font-['Pixelify_Sans'] font-bold text-4xl">Kaiser</h1>
                            <p className="font-['Pixelify_Sans'] font-semibold">
                            Kaiser:
                                Poder: Tiro <br/>
                                Historia: 
                                Kairon Arias é um homem que não gosta muito de conversar com as pessoas, 
                                preferindo se comunicar por meio da linguagem de sinais.
                                Certo dia, ao entrar em um bar, ele percebe duas pessoas sentadas perto do balcão. Pouco depois, 
                                um homem grande se senta ao seu lado e pede uma bebida.
                                Depois de um tempo, chegam mais duas pessoas ao bar.
                                Junto com elas, chega um velho estranho que oferece uma luva para as quatro pessoas que estavam lá.
                                Kairon coloca a luva, mas sente algo estranho ao colocá-la.
                                Kairon percebe que sua mão está estranha e que a luva está lhe dando poderes, 
                                incluindo o controle da gravidade e a habilidade de dar dashes rápidos.
                            </p>
                        </div>
                        <div className="relative w-70 h-78">
                        <img
                            src={KadriCaracter}
                            alt="Frame"
                            className="absolute inset-0 w-full h-full z-10"
                        />
                        <img
                            src={BackgroundCaracter}
                            alt="Personagem"
                            className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                        />
                    </div>
                </div>
                )}
            </div>
            
        )
    }
    const VictorInfo = () => {
        return (
            <div>
                {isMobile ? (
                    <div className="bg-darksblue text-white flex flex-col justify-center items-center rounded-2xl m-2">
                            <h1 className="font-['Pixelify_Sans'] font-bold text-4xl">Vetor</h1>
                            <div className="relative w-40 h-46">
                                <img
                                    src={VictorCaracter}
                                    alt="Frame"
                                    className="absolute inset-0 w-full h-full z-10"
                                />
                                <img
                                    src={BackgroundCaracter}
                                    alt="Personagem"
                                    className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                                />
                            </div>
                            <p className="font-['Pixelify_Sans'] font-semibold m-3">
                            Vetor:
                                Poder: Cura <br/>
                                Historia: 
                                Vetor é um cara que perdeu a família em um incêndio quando era criança.
                                Por causa disso, ele ficou traumatizado e não conseguia mais falar, 
                                mas conseguia se comunicar bem por meio da linguagem de sinais.
                                Em um dia, Vetor decidiu ir a um bar. Lá, ele viu um cara sentado perto do balcão, bebendo algo.
                                Depois de um tempo, mais dois homens chegaram ao bar.
                                Depois de um tempo, um velho chegou oferecendo luvas para melhorar as habilidades.
                                Você decidiu duvidar das luvas, mas mesmo assim colocou uma e sentiu o braço formigar, pois havia uma toxina nelas.
                                Ele sente que algo estranho vem da luva e descobre que consegue se teleportar para outros lugares, além de curar pequenas feridas.
                            </p>
                    </div>
                ): (
                    <div className="bg-darksblue flex justify-center items-center text-white p-6 rounded-2xl w-full max-w-[950px] gap-7">
                        <div className="w-1/2">
                            <h1 className="font-['Pixelify_Sans'] font-bold text-4xl">Vetor</h1>
                            <p className="font-['Pixelify_Sans'] font-semibold">
                                Vetor:
                                Poder: Cura <br/>
                                Historia: 
                                Vetor é um cara que perdeu a família em um incêndio quando era criança.
                                Por causa disso, ele ficou traumatizado e não conseguia mais falar, 
                                mas conseguia se comunicar bem por meio da linguagem de sinais.
                                Em um dia, Vetor decidiu ir a um bar. Lá, ele viu um cara sentado perto do balcão, bebendo algo.
                                Depois de um tempo, mais dois homens chegaram ao bar.
                                Depois de um tempo, um velho chegou oferecendo luvas para melhorar as habilidades.
                                Você decidiu duvidar das luvas, mas mesmo assim colocou uma e sentiu o braço formigar, pois havia uma toxina nelas.
                                Ele sente que algo estranho vem da luva e descobre que consegue se teleportar para outros lugares, além de curar pequenas feridas.
                            </p>
                        </div>
                        <div className="relative w-70 h-78">
                        <img
                            src={VictorCaracter}
                            alt="Frame"
                            className="absolute inset-0 w-full h-full z-10"
                        />
                        <img
                            src={BackgroundCaracter}
                            alt="Personagem"
                            className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                        />
                    </div>
                </div>
                )}
            </div>
            
        )
    }

    const Cards = isMobile ? [
        <div className="flex justify-center">
            <button onClick={() => toggleInfo('Moto')} className="relative w-32 h-40">
                <img
                    src={MotoCaracter}
                    alt="Frame"
                    className="absolute inset-0 w-full h-full z-10"
                />
                <img
                    src={BackgroundCaracter}
                    alt="Personagem"
                    className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                />
                </button>
        </div>,
        <div className="flex justify-center">
            <button onClick={() => toggleInfo('Daniel')} className="relative w-32 h-40">
                <img
                    src={DanielCaracter}
                    alt="Frame"
                    className="absolute inset-0 w-full h-full z-10"
                />
                <img
                    src={BackgroundCaracter}
                    alt="Personagem"
                    className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                />
                </button>
        </div>,
        <div onClick={() => toggleInfo('Kadri')} className="flex justify-center">
            <button className="relative w-32 h-40 ">
            <img
                src={KadriCaracter}
                alt="Frame"
                className="absolute inset-0 w-full h-full z-10"
            />
            <img
                src={BackgroundCaracter}
                alt="Personagem"
                className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
            />
        </button>
        </div>,
        <div onClick={() => toggleInfo('Victor')} className="flex justify-center">
                <button className="relative w-32 h-40">
                <img
                    src={VictorCaracter}
                    alt="Frame"
                    className="absolute inset-0 w-full h-full z-10"
                />
                <img
                    src={BackgroundCaracter}
                    alt="Personagem"
                    className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                />
                </button>
        </div>
    ]: [
        <div className="flex justify-around">
                <button onClick={() => toggleInfo('Moto')} className="relative w-45 h-53">
                <img
                    src={MotoCaracter}
                    alt="Frame"
                    className="absolute inset-0 w-full h-full z-10"
                />
                <img
                    src={BackgroundCaracter}
                    alt="Personagem"
                    className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                />
                </button> 
                <div onClick={() => toggleInfo('Daniel')}className="relative w-45 h-53">
                <img
                    src={DanielCaracter}
                    alt="Frame"
                    className="absolute inset-0 w-full h-full z-10"
                />
                <img
                    src={BackgroundCaracter}
                    alt="Personagem"
                    className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                />
                </div> 
                <div onClick={() => toggleInfo('Kadri')} className="relative w-45 h-53">
                <img
                    src={KadriCaracter}
                    alt="Frame"
                    className="absolute inset-0 w-full h-full z-10"
                />
                <img
                    src={BackgroundCaracter}
                    alt="Personagem"
                    className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                />
                </div> 
                <div onClick={() => toggleInfo('Victor')} className="relative w-45 h-53">
                <img
                    src={VictorCaracter}
                    alt="Frame"
                    className="absolute inset-0 w-full h-full z-10"
                />
                <img
                    src={BackgroundCaracter}
                    alt="Personagem"
                    className="absolute inset-0 m-auto w-96 h-96 z-0 object-contain"
                />
                </div>
        </div>
    ]

    return (
        <div className="flex flex-col justify-center items-center">
            <Slider elementos={Cards} intervalo={2800} />

            {activeInfo === 'Moto' && <MotoInfo />}
            {activeInfo === 'Daniel' && <DanielInfo />}
            {activeInfo === 'Kadri' && <KadriInfo />}
            {activeInfo === 'Victor' && <VictorInfo />}
        </div>
    )
}