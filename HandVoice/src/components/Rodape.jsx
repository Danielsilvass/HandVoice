import Mail from "../../public/Mail.png"
import MailCian from "../../public/MailCian.png"
import Telefone from "../../public/Telefone.png"
import Relogio from "../../public/Relogio.png"
import Facebook from "../../public/Facebook.png"
import Tiktok from "../../public/Tiktok.png"
import Instagram from "../../public/Instagram.png"
import Whatsapp from "../../public/Whatsapp.png"
import RetanguloRodape from "../../public/RetanguloRodape.png"
import { useIsMobile } from "../hooks/useIsMobile";

export function Rodape() {
    const isMobile = useIsMobile()
    return (
        <div>
            <div className="h-4 bg-lightsblue"></div>
            <div className="h-4 bg-yellowproject"></div>
            <div className={isMobile ? "bg-darksblue justify-center flex " : "bg-darksblue flex w-full"}>
                {isMobile ? (
                    <div className="flex flex-col p-4">
                        <h2 className="text-whiteproject font-bold">Atendimento ao Cliente</h2>
                        <div className="flex items-center p-1">
                            <img src={Relogio} alt="Relógio"/>
                            <p className="text-whiteproject ml-1 text-sm">Atendimento: seg. à sáb. 09 às 18h</p>
                        </div>
                        <div className="flex items-center p-1">
                            <img src={Telefone} alt="Telefone"/>
                            <p className="text-whiteproject ml-1 text-sm">Contato: (11) 9 4002-8922</p>
                        </div>
                        <div className="flex items-center p-1">
                            <img src={Mail} alt="E-Mail" />
                            <p className="text-whiteproject ml-1 text-sm">E-mail: contato@handvoice.com.br</p>
                        </div>
                        <a href=""><button className="bg-lightsblue p-2 rounded-xl flex items-center justify-center text-whiteproject gap-1 mt-2 "><img className="w-8 h-8" src={Whatsapp} alt="Logo WhatsApp"/>Via WhatsApp</button></a>
                        <div className="flex items-center">
                        <p className="p text-whiteproject mr-2">Redes Sociais </p>
                        <img className="p-1 w-7 " src={Tiktok} alt="Tiktok"/><img className="p-1 w-7 h-7" src={Instagram} alt="Instagram"/> <img className="p-1 w-7 h-7" src={Facebook} alt="Facebook" />
                        </div>
                        <h2 className="text-whiteproject mt-4 font-bold">Menu de Rodapé</h2>
                        <ul className="list-disc text-sm ml-6 mt-2">
                            <li className="text-whiteproject ml-1 text-sm">Aviso Legal</li>
                            <li className="text-whiteproject ml-1 text-sm">Entrar em contato</li>
                            <li className="text-whiteproject ml-1 text-sm">Política de Envio e Prazo de Entrega (Frete)</li>
                            <li className="text-whiteproject ml-1 text-sm">Política de Privacidade</li>
                            <li className="text-whiteproject ml-1 text-sm">Quem somos</li>
                            <li className="text-whiteproject ml-1 text-sm">Termos e Condições</li>
                            <li className="text-whiteproject ml-1 text-sm">Trocas e Devoluções</li>
                            <li className="text-whiteproject ml-1 text-sm">POLITICA DE PRODUTOS PERSONALIZADOS</li>
                        </ul>
                        <h2 className="text-whiteproject mt-4 font-bold">Novidades</h2>
                        <p className="text-whiteproject ml-1 text-sm">Fique por dentro de todas as novidades e ofertas em primeira mão</p>
                        <div className="w-full max-w-72 mx-auto">
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="w-full bg-whiteproject rounded-md px-4 py-3 mb-2 text-gray-700 placeholder-gray-500 focus:outline-none mt-2"
                            />
                            <button
                                className="w-full bg-lightsblue hover:bg-cyan-500 text-whiteproject font-bold py-3 rounded-md flex items-center justify-center gap-2 transition"
                            >
                                <img src={MailCian} alt="Ícone de E-mail"/>
                                Enviar
                            </button>
                        </div>


                    </div>
                ):(
                    <div className="flex gap-12 justify-center w-full max-w-[1200px] mx-auto items-center p-4">
                        <div>
                            <h2 className="text-whiteproject font-bold">Atendimento ao Cliente</h2>
                            <div className="flex items-center p-1">
                                <img src={Relogio} alt="Relógio"/>
                                <p className="text-whiteproject ml-1 text-sm">Atendimento: seg. à sáb. 09 às 18h</p>
                            </div>
                            <div className="flex items-center p-1">
                                <img src={Telefone} alt="Telefone"/>
                                <p className="text-whiteproject ml-1 text-sm">Contato: (11) 9 4002-8922</p>
                            </div>
                            <div className="flex items-center p-1">
                                <img src={Mail} alt="E-Mail" />
                                <p className="text-whiteproject ml-1 text-sm">E-mail: contato@handvoice.com.br</p>
                            </div>
                            <a href=""><button className="bg-lightsblue p-2 rounded-xl flex items-center justify-center text-whiteproject gap-1 mt-2 "><img className="w-8 h-8" src={Whatsapp} alt="Logo WhatsApp"/>Via WhatsApp</button></a>
                            <div className="flex items-center">
                            <p className="p text-whiteproject mr-2">Redes Sociais </p>
                            <img className="p-1 w-7 " src={Tiktok} alt="Tiktok"/><img className="p-1 w-7 h-7" src={Instagram} alt="Instagram"/> <img className="p-1 w-7 h-7" src={Facebook} alt="Facebook" />
                            </div>
                        </div>
                        <img src={RetanguloRodape} alt="" />
                        <div>
                            <h2 className="text-whiteproject mt-4 font-bold">Menu de Rodapé</h2>
                            <ul className="list-disc text-sm ml-6 mt-2">
                                <li className="text-whiteproject ml-1 text-sm">Aviso Legal</li>
                                <li className="text-whiteproject ml-1 text-sm">Entrar em contato</li>
                                <li className="text-whiteproject ml-1 text-sm">Política de Envio e Prazo de Entrega (Frete)</li>
                                <li className="text-whiteproject ml-1 text-sm">Política de Privacidade</li>
                                <li className="text-whiteproject ml-1 text-sm">Quem somos</li>
                                <li className="text-whiteproject ml-1 text-sm">Termos e Condições</li>
                                <li className="text-whiteproject ml-1 text-sm">Trocas e Devoluções</li>
                                <li className="text-whiteproject ml-1 text-sm">POLITICA DE PRODUTOS PERSONALIZADOS</li>
                            </ul>
                        </div>
                        <img src={RetanguloRodape} alt="" />
                        <div>
                            <h2 className="text-whiteproject mt-4 font-bold">Novidades</h2>
                            <p className="text-whiteproject ml-1 text-sm">Fique por dentro de todas as novidades e ofertas em primeira mão</p>
                            <div className="w-full max-w-72 mx-auto">
                                <input
                                    type="email"
                                    placeholder="Seu e-mail"
                                    className="w-full bg-whiteproject rounded-md px-4 py-3 mb-2 text-gray-700 placeholder-gray-500 focus:outline-none mt-2"
                                />
                                <button
                                    className="w-full bg-lightsblue hover:bg-cyan-500 text-whiteproject font-bold py-3 rounded-md flex items-center justify-center gap-2 transition"
                                >
                                    <img src={MailCian} alt="Ícone de E-mail"/>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}