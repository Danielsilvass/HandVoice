import EntregaHome from "../../public/EntregaHome.png"
import ClienteHome from "../../public/ClienteHome.png"
import TelefoneHome from "../../public/TelefoneHome.png"
import CarteiraHome from "../../public/CarteiraHome.png"
import { Slider } from "../hooks/Slider"
import { useIsMobile } from "../hooks/useIsMobile"

export function AvisoHome() {
    const isMobile = useIsMobile()
    const imgs = isMobile ? [
            <div className="flex justify-center flex-col items-center mt-2 border-b-[2px] border-lightsblue pb-6 dark:text-white">
                <img className="w-20 h-11" src={EntregaHome} alt="Entrega"/>
                <p className="text-xl text-darksblue dark:text-white">Entrega mais rápida do Brasil</p>
                <p className="text-sm text-darksblue dark:text-white">Envio imedianto após o pagamento.</p>
            </div>,
            <div className="flex justify-center flex-col items-center mt-3 border-b-[2px] border-lightsblue pb-6 dark:text-white">
                <img className="w-8 h-9" src={ClienteHome} alt="Cliente"/>
                <p className="text-xl text-darksblue">Cliente Satisfeito</p>
                <p className="text-sm text-darksblue">Garantia de compra ou seu dinheiro de volta!</p>
            </div>,
            <div className="flex justify-center flex-col items-center mt-3 border-b-[2px] border-lightsblue pb-6">
                <img className="w-8 h-9" src={TelefoneHome} alt="Telefone"/>
                <p className="text-xl text-darksblue">Suporte ao Cliente</p>
                <p className="text-sm text-darksblue">Atendimento Seg. a Sáb. 9:00h às 18:00h.</p>
            </div>,
            <div className="flex justify-center flex-col items-center mt-3 border-b-[2px] border-lightsblue pb-6">
                <img className="w-8 h-9" src={CarteiraHome} alt="Carteira"/>
                <p className="text-xl text-darksblue">Pagamento Seguro</p>
                <p className="text-sm text-darksblue">Aceitamos Cartão, PIX e Boleto.</p>
            </div>
        ]: [
            <div className="flex justify-center gap-10 items-center border-b-[2px] border-lightsblue pb-6 mt-4 p-4 ">
                <div className="flex">
                    <img className="w-20 h-11" src={EntregaHome} alt="Entrega"/>
                    <div>
                        <p className="text-xl text-darksblue dark:text-white">Entrega mais rápida do Brasil</p>
                        <p className="text-xs text-darksblue dark:text-white">Envio imedianto após o pagamento</p>
                    </div>
                    
                </div>
                <div className="flex">
                    <img className="w-8 h-9 mt-1" src={ClienteHome} alt="Cliente"/>
                    <div>
                        <p className="text-xl text-darksblue dark:text-white">Cliente Satisfeito</p>
                        <p className="text-xs text-darksblue dark:text-white">Garantia de compra ou seu dinheiro de volta!</p>
                    </div>
                </div>
                <div className="flex">
                    <img className="w-8 h-9 mt-1" src={TelefoneHome} alt="Telfone"/>
                    <div>
                        <p className="text-xl text-darksblue dark:text-white">Suporte ao Cliente</p>
                        <p className="text-xs text-darksblue dark:text-white">Atendimento Seg. a Sáb. 9:00h às 18:00h</p>
                    </div>
                </div>
                <div className="flex">
                    <img className="w-8 h-9 mt-1" src={CarteiraHome} alt="Carteira"/>
                    <div>
                        <p className="text-xl text-darksblue dark:text-white">Pagamento Seguro</p>
                        <p className="text-xs text-darksblue dark:text-white">Aceitamos Cartão, PIX e Boleto.</p>
                    </div>
                </div>
            </div>
        ]
    return(
        <div>
            <Slider elementos={imgs} intervalo={2800} />
        </div>
    )
}