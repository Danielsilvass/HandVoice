import ComponetSemImg from "../../public/ComponetSemImg.png"
import DownloadButton from "../../public/DownloadButton.png"
import { useIsMobile } from "../hooks/useIsMobile";

export function ParagraphContent() {
    const isMobile = useIsMobile();
    return (
        <div>
            {isMobile ? (
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-4xl font-normal text-darksblue dark:text-white text-center mb-4">Diga olá para HandVoice</h1>
                    <img className="w-80 h-auto" src={ComponetSemImg} alt="" />
                    <p className="w-72 text-darksblue dark:text-white mb-4"><strong>Por que a nossa luva tradutora de Libras é única?</strong> <br/> Nossa tecnologia inovadora permite a tradução em tempo real dos gestos em Libras para áudio, tornando a comunicação mais acessível para todos. <br/> Com um design ergonômico e processamento rápido, nossa luva facilita a inclusão e conecta pessoas de forma simples e eficaz. Desenvolvida para trazer autonomia à comunidade surda, ela é uma ponte entre o silêncio e a voz.</p>
                    <img className="w-80 h-auto" src={ComponetSemImg} alt="" />
                    <p className="w-72 text-darksblue dark:text-white mb-4">
                            <strong>Como funciona?</strong> <br/> A luva possui sensores que detectam os movimentos das mãos e dedos enquanto o usuário sinaliza em Libras. Esses dados são enviados a um processador que interpreta os gestos e os transforma em áudio em tempo real. <br/> O áudio é reproduzido por um dispositivo na cintura do usuário, permitindo uma comunicação clara com ouvintes, mesmo sem a presença de intérpretes. Tudo isso acontece de forma automática, ágil e eficiente.
                    </p>
                    <a href="#" className="mb-4 w-64 h-auto p-2 text-center bg-lightsblue text-white rounded-[10px] font-bold">Avançar</a>
                    <p className="text-darksblue text-base font-bold mb-2">Faça dowload do nosso app</p>
                    <a href="#" className=" flex justify-around mb-4 w-64 h-auto p-2 text-center bg-lightsblue text-white rounded-[10px] font-bold">HandVoice Assistent <img src={DownloadButton} alt="" /></a>
                </div>
            ): (<div>
                    <div className="flex justify-center items-center">
                        <div className="w-[569px] mb-8">
                            <h1 className="text-darksblue dark:text-white text-7xl font-normal mb-4">Diga olá para HandVoice</h1>
                            <p className="text-xl text-darksblue dark:text-white"><strong>Por que a nossa luva tradutora de Libras é única?</strong> <br/> Nossa tecnologia inovadora permite a tradução em tempo real dos gestos em Libras para áudio, tornando a comunicação mais acessível para todos. <br/>Com um design ergonômico e processamento rápido, nossa luva facilita a inclusão e conecta pessoas de forma simples e eficaz. Desenvolvida para trazer autonomia à comunidade surda, ela é uma ponte entre o silêncio e a voz.</p>
                        </div>
                        <img src={ComponetSemImg} alt="" className="w-96 h-auto" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={ComponetSemImg} alt="" className="w-96 h-auto"/>
                        <div className="w-[569px]">
                            <p className="text-xl text-darksblue dark:text-white"><strong>Como funciona?</strong> <br/> A luva possui sensores que detectam os movimentos das mãos e dedos enquanto o usuário sinaliza em Libras. Esses dados são enviados a um processador que interpreta os gestos e os transforma em áudio em tempo real.<br/> O áudio é reproduzido por um dispositivo na cintura do usuário, permitindo uma comunicação clara com ouvintes, mesmo sem a presença de intérpretes. Tudo isso acontece de forma automática, ágil e eficiente.</p>
                        </div>
                    </div>
                    <p className="text-darksblue text-base font-bold mb-2 ml-2">Faça dowload do nosso app</p>
                    <div className="flex justify-between ml-2 mr-2">
                    <a href="#" className=" flex justify-around mb-4 w-64 h-auto p-2 text-center bg-lightsblue text-white rounded-[10px] font-bold">HandVoice Assistent <img src={DownloadButton} alt="" /></a>
                    <a href="#" className="mb-4 w-64 h-auto p-2 text-center bg-lightsblue text-white rounded-[10px] font-bold">Avançar</a>
                    </div>
                </div>
        )}
        </div>
    )
}