import { useEffect, useState } from "react";
import LogoHandVoice from "../../public/LogoHandVoice.png"
import BonecodoLogin from "../../public/BonecodoLogin.png"
import Rastreio from "../../public/Rastreio.png";
import CarrinhodeCompra from "../../public/CarrinhodeCompra.png"
import LinhaCian from "../../public/LinhaCian.png"
import MenuBurguer from "../../public/MenuBurguer.svg"
import { useIsMobile } from "../hooks/useIsMobile"
import { ButtomDarkMode } from "./ButtomDarkMode";
export function Headers() {
    const isMobile = useIsMobile();
    const [menuAberto, setMenuAberto] = useState(false);
    function menu () {
        console.log("Entrou")
        setMenuAberto(!menuAberto);
    }

    function campoDeBusca() {}
    function carrinho() {}
    return (
        <div>
            <div className={isMobile ? "flex items-center justify-between bg-darksblue h-31 w-full" : "flex items-center justify-between bg-darksblue h-24 w-full"}>
                <a href="/"><div className="flex items-center gap-2 ml-4">
                    <img className="w-16 h-16" src={LogoHandVoice} alt="HandVoice" />
                    <h1 className="text-whiteproject font-bold leading-tight">Hand <br/> Voice</h1>
                </div></a>
                <div className="flex-1 flex justify-center px-4">
                    {isMobile ? (
                        <>
                        </>
                    ): (
                        <div className="flex items-center bg-whiteproject rounded-xl shadow px-4 py-1 w-full max-w-[500px]">
                                <input
                                type="text"
                                placeholder="Pesquisar ..."
                                className="flex-grow outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400"
                            />
                            <button className="bg-yellowproject text-black text-sm font-semibold px-3 py-1 rounded-xl hover:bg-yellow-200 transition pointer">
                                Buscar
                            </button>
                            </div>
                    )}
                </div>
                <div className="flex justify-center items-center p-2">
                    {isMobile ? (
                        <>
                            <ButtomDarkMode />
                            <a href="" className="p-2"><img src={BonecodoLogin} alt="Boneco do Login"/></a>
                            <button onClick={menu}><img src={MenuBurguer} alt="Menu"/></button>
                        </>
                    ): (
                            <div className="flex justify-between items-center gap-3 p-2">
                                <ButtomDarkMode />
                                <div className="flex items-center">
                                    <a href="" className="p-2"><img src={BonecodoLogin} alt="Boneco do Login"/></a>
                                    <a href="" className="text-whiteproject font-bold flex mr-2">Minha Conta </a>
                                    <p className="text-whiteproject">v</p>
                                </div>
                                <img src={LinhaCian} alt="Linha Ciano" />
                                <div className="flex items-center">
                                    <a className="flex" href="https://www.correios.com.br/" target="_blank"><img src={Rastreio} alt="Logo de Rastreio" />
                                    <div>
                                    <p className="text-xs text-lightsblue font-bold leading-tight mr-2 cursor-pointer">Localize o seu produto</p>
                                    <p className="font-bold text-whiteproject leading-tight cursor-pointer">Rastrear pedido</p>
                                    </div></a>
                                </div>
                                <img src={LinhaCian} alt="Linha Ciano" />
                                <div className="flex items-center">
                                    <a  className="flex" href="https://produto.mercadolivre.com.br/MLB-5499060124-carrinho-de-supermercado-compras-180-litros-_JM?matt_tool=40300352&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354013&matt_ad_group_id=173090509916&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882725996&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5525783528&matt_product_id=MLB5499060124&matt_product_partition_id=2389721279223&matt_target_id=pla-2389721279223&cq_src=google_ads&cq_cmp=22090354013&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354013&gbraid=0AAAAAD93qcDl3WtYs-OYR0JfpglFYhdOH&gclid=CjwKCAjw2vTFBhAuEiwAFaScwhD6S_vbUwxFRYv18kWbrfTmz9vLcRq8GMGIQ0Niw9pSgeNm5wYIhhoC-Z8QAvD_BwE" target="_blank"><img src={CarrinhodeCompra} alt="Carinho de Compra"/>
                                    <p className="font-bold text-whiteproject ml-2 cursor-pointer">Carrinho</p> </a>
                                </div>
                            </div>
                        
                    )}
                </div>
            </div>
            <div>
                {isMobile ? (
                    <div className="h-4 bg-lightsblue"></div>
                ): (
                    <div className="h-11 bg-lightsblue flex items-center justify-center">
                        <div className="flex justify-between w-full max-w-[902px]">
                            <a href="/Ecommerce" className="font-bold text-sm text-whiteproject cursor-pointer">E-Commerce</a>
                            <a href="/Game" className="font-bold text-sm text-whiteproject cursor-pointer">Jogo</a>
                            <a href="/Content" className="font-bold text-sm text-whiteproject cursor-pointer">Conteúdo</a>
                            <a href="/Alphabet" className="font-bold text-sm text-whiteproject cursor-pointer">Alfabeto</a>
                            <a href="/Contact" className="font-bold text-sm text-whiteproject cursor-pointer">Entrar em Contato</a>
                            <a href="/reference" className="font-bold text-sm text-whiteproject cursor-pointer">Referências</a>
                        </div>
                    </div>
                )}
                {isMobile && menuAberto && (
                    
                        <div className="fixed inset-0 z-50">
                        <div
                        onClick={() => setMenuAberto(false)}
                        className="absolute inset-0 backdrop-blur-sm"
                        ></div>

                        <div className="fixed top-0 right-0 h-full w-64 bg-cyan-400 z-50 shadow-lg rounded-l-xl p-4 flex flex-col gap-2 animate-slideIn">
                        <div className="flex justify-between items-center mb-4 mt-7">
                            <img className="w-10 h-10" src={LogoHandVoice} alt="Logo" />
                            <button onClick={menu} className="text-red-600 text-3xl font-bold">✕</button>
                        </div>
                        <a className="bg-darkblue text-white rounded p-2 font-semibold" href="/">Home</a>
                        <a className="bg-darkblue text-white rounded p-2 font-semibold" href="/Ecommerce">E-commerce</a>
                        <a className="bg-darkblue text-white rounded p-2 font-semibold" href="/Game">Jogo</a>
                        <a className="bg-darkblue text-white rounded p-2 font-semibold" href="/Content">Conteúdo</a>
                        <a className="bg-darkblue text-white rounded p-2 font-semibold" href="/Alphabet">Alfabeto</a>
                        <a className="bg-darkblue text-white rounded p-2 font-semibold" href="/Contact">Entre em contato</a>
                        <a className="bg-darkblue text-white rounded p-2 font-semibold" href="/reference">Referências</a>
                        </div>
                    </div>
                )}
            </div>
            <div className="h-4 bg-yellowproject "></div>
        </div>
        
    )
}