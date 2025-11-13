import EcommerceImageHand from "../../public/EcommerceImageHand.jpeg"
import PayIcon from "../../public/PayIcon.png"
import PixIcon from "../../public/PixIcon.png"
import { useIsMobile} from "../hooks/useIsMobile.jsx"
import { CardSelling } from "./CardSelling.jsx"
import { FeedBack } from "./FeedBack.jsx"

export function CardEcommerce() {
    const isMobile = useIsMobile()
    return (
        <div className="dark:bg-darksblue">
            {isMobile ? (
                <div className="flex justify-center items-center flex-col bg-neutral-50 dark:bg-darksblue">
                    <img className="dark:bg-transparent dark:shadow-none m-3 bg-white p-5  shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px]" src={EcommerceImageHand} alt="" />
                    <div className="dark:bg-transparent dark:shadow-none p-5 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] bg-white">
                        <h1 className="text-3xl mb-3 dark:text-white">HandVoice - <br /> Interpretador de Libras</h1>
                        <div className="flex space-x-1 mb-3">
                            {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                                </svg>
                            ))}
                            <p className="ml-[5px] dark:text-white">5.0 (4 Avaliações)</p>
                        </div>
                        <p className="text-sm text-gray-400 line-through mb-1 dark:text-white">R$ 2300,00</p>
                        <p className="text-2xl font-bold text-green-500 mb-1">R$ 1897,99</p>
                        <div className="flex items-center justify-start">
                            <img src={PayIcon} alt="" />
                            <p className="dark:text-white"> ou 12x de <strong className="dark:text-white text-zinc-500">R$ 158</strong></p>
                        </div>
                        <div className="ml-[8px] flex items-center justify-start">
                            <img src={PixIcon} alt="" />
                            <strong className="ml-[8px] text-zinc-500 dark:text-white">5% OFF no PIX</strong>
                        </div>
                        
                        <div className="flex justify-center">
                            <button className="text-3xl bg-lightsblue text-white p-4 rounded-2xl mt-4">Comprar Agora</button>
                        </div>
                    </div>
                    <p className="text-xl text-start w-72 text-darksblue dark:text-white mt-5 mb-5">
                        <strong>Como Funciona?</strong> <br />
                        A luva possui sensores que detectam os movimentos das mãos e dedos enquanto o usuário sinaliza em Libras. Esses dados são enviados a um processador que interpreta os gestos e os transforma em áudio em tempo real. 
                        O áudio é reproduzido por um dispositivo na cintura do usuário, permitindo uma comunicação clara com ouvintes, mesmo sem a presença de intérpretes. Tudo isso acontece de forma automática, ágil e eficiente.
                    </p>
                    <div className="m-4 p-5 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] bg-white">
                        <h1 className="text-neutral text-xl">Produtos que ultilizamos para contruir a luva - HAND VOICE </h1>
                    </div>

                    <h3 className="text-lg p-3 text-darksblue font-bold dark:text-white">O que falam sobre Nós:</h3>
                </div>
            ): (
                <div className="bg-neutral-50 dark:bg-darksblue">
                    <div className="flex items-center justify-around max-w[1000px]">
                        <img className="m-3 bg-white p-5  shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] w-[700px] h-[650px]" src={EcommerceImageHand} alt="" />
                        <div className="p-5 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] bg-white flex flex-col justify-center">
                        <h1 className="text-3xl mb-3">HandVoice - <br /> Interpretador de Libras</h1>
                        <div className="flex space-x-1 mb-3">
                            {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                                </svg>
                            ))}
                            <p className="ml-[5px]">5.0 (4 Avaliações)</p>
                        </div>
                        <p className="text-sm text-gray-400 line-through mb-1">R$ 2300,00</p>
                        <p className="text-2xl font-bold text-green-500 mb-1">R$ 1897,99</p>
                        <div className="flex items-center justify-start">
                            <img src={PayIcon} alt="" />
                            <p> ou 12x de <strong className="text-zinc-500">R$ 158</strong></p>
                        </div>
                        <div className="ml-[8px] flex items-center justify-start">
                            <img src={PixIcon} alt="" />
                            <strong className="ml-[8px] text-zinc-500">5% OFF no PIX</strong>
                        </div>
                        <div className="flex justify-center">
                            <button className="text-3xl bg-lightsblue text-white p-4 rounded-2xl">Comprar Agora</button>
                        </div>
                    </div>
                        
                    </div>

                    <div className="flex items-center justify-around">
                        <div>
                            <p className="rounded-[10px] bg-white p-5 text-xl text-start w-[528px] text-darksblue mt-5 mb-5">
                                <strong>Como Funciona?</strong> <br />
                                A luva possui sensores que detectam os movimentos das mãos e dedos enquanto o usuário sinaliza em Libras. Esses dados são enviados a um processador que interpreta os gestos e os transforma em áudio em tempo real. <br />O áudio é reproduzido por um dispositivo na cintura do usuário, permitindo uma comunicação clara com ouvintes, mesmo sem a presença de intérpretes. Tudo isso acontece de forma automática, ágil e eficiente.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-lg p-3 text-darksblue font-bold dark:text-white">O que falam sobre Nós:</h3>                   
                </div>
            )}
            <div className="flex justify-center flex-col">
            <FeedBack/>
            </div>
            
        </div>
    )
}