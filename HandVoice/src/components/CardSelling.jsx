import Luvas from "../../public/Luvas-Treat-Grande.png"
import ESP32 from "../../public/ESP32.png"
import MPU from "../../public/MPU.png"
import Altofalante from "../../public/AltoFalante.png"
import { useIsMobile } from "../hooks/useIsMobile"
import { Slider } from "../hooks/Slider"

export function CardSelling() {
    const isMobile = useIsMobile()
    const Selling = isMobile ? [
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[250px] flex flex-col items-center text-center justify-center">
            <img
                src={Luvas}
                alt="Nome do Produto"
                className="h-48 object-contain mb-4"
            />

            <h3 className="text-gray-800 font-semibold mb-2">
                Luvas impermeáveis usado no projeto HAND VOICE
            </h3>

            <p className="text-sm text-gray-400 line-through mb-1">
                R$ 2300,00
            </p>

            <p className="text-2xl font-bold text-green-500 mb-1">
                R$ 1897,99
            </p>

            <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8z"/>
                <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"/>
                </svg>
                ou 12x de <span className="font-bold text-gray-700 ml-1">R$ 158</span>
            </div>
        </div>,
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[250px] flex flex-col items-center text-center justify-center">
            <img
                src={ESP32}
                alt="Nome do Produto"
                className="h-48 object-contain mb-4"
            />

            <h3 className="text-gray-800 font-semibold mb-2">
                ESP32
            </h3>

            <p className="text-sm text-gray-400 line-through mb-1">
                R$ 108,00
            </p>

            <p className="text-2xl font-bold text-green-500 mb-1">
                R$ 37,90
            </p>

            <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8z"/>
                <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"/>
                </svg>
                ou 12x de <span className="font-bold text-gray-700 ml-1">R$ 3,20</span>
            </div>
        </div>,
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[250px] flex flex-col items-center text-center justify-center">
            <img
                src={MPU}
                alt="Nome do Produto"
                className="h-48 object-contain mb-4"
            />

            <h3 className="text-gray-800 font-semibold mb-2">
                Alto-Falante 
            </h3>

            <p className="text-sm text-gray-400 line-through mb-1">
                R$ 108,00
            </p>

            <p className="text-2xl font-bold text-green-500 mb-1">
                R$ 69,90
            </p>

            <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8z"/>
                <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"/>
                </svg>
                ou 12x de <span className="font-bold text-gray-700 ml-1">R$ 5,90</span>
            </div>
        </div>,
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[250px] flex flex-col items-center text-center justify-center">
            <img
                src={Altofalante}
                alt="Nome do Produto"
                className="h-48 object-contain mb-4"
            />

            <h3 className="text-gray-800 font-semibold mb-2">
                MPU6050
            </h3>

            <p className="text-sm text-gray-400 line-through mb-1">
                R$ 108,00
            </p>

            <p className="text-2xl font-bold text-green-500 mb-1">
                R$ 49,90
            </p>

            <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8z"/>
                <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"/>
                </svg>
                ou 12x de <span className="font-bold text-gray-700 ml-1">R$ 4,20</span>
            </div>
        </div>

    ]: [ 
        <div className="p-2 flex justify-center">
            <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[250px] flex flex-col items-center text-center ">
                <img
                    src={Luvas}
                    alt="Nome do Produto"
                    className="h-48 object-contain mb-4"
                />

                <h3 className="text-gray-800 font-semibold mb-2">
                    Luvas impermeáveis usado no projeto HAND VOICE
                </h3>

                <p className="text-sm text-gray-400 line-through mb-1">
                    R$ 2300,00
                </p>

                <p className="text-2xl font-bold text-green-500 mb-1">
                    R$ 1897,99
                </p>

                <div className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8z"/>
                    <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"/>
                    </svg>
                    ou 12x de <span className="font-bold text-gray-700 ml-1">R$ 158</span>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[250px] flex flex-col items-center text-center">
                <img
                    src={ESP32}
                    alt="Nome do Produto"
                    className="h-48 object-contain mb-4"
                />

                <h3 className="text-gray-800 font-semibold mb-2">
                    ESP32
                </h3>

                <p className="text-sm text-gray-400 line-through mb-1">
                    R$ 108,00
                </p>

                <p className="text-2xl font-bold text-green-500 mb-1">
                    R$ 37,90
                </p>

                <div className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8z"/>
                    <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"/>
                    </svg>
                    ou 12x de <span className="font-bold text-gray-700 ml-1">R$ 3,20</span>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[250px] flex flex-col items-center text-center">
                <img
                    src={MPU}
                    alt="Nome do Produto"
                    className="h-48 object-contain mb-4"
                />

                <h3 className="text-gray-800 font-semibold mb-2">
                    Alto-Falante 
                </h3>

                <p className="text-sm text-gray-400 line-through mb-1">
                    R$ 108,00
                </p>

                <p className="text-2xl font-bold text-green-500 mb-1">
                    R$ 69,90
                </p>

                <div className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8z"/>
                    <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"/>
                    </svg>
                    ou 12x de <span className="font-bold text-gray-700 ml-1">R$ 5,90</span>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[250px] flex flex-col items-center text-center">
                <img
                    src={Altofalante}
                    alt="Nome do Produto"
                    className="h-48 object-contain mb-4"
                />

                <h3 className="text-gray-800 font-semibold mb-2">
                    MPU6050
                </h3>

                <p className="text-sm text-gray-400 line-through mb-1">
                    R$ 108,00
                </p>

                <p className="text-2xl font-bold text-green-500 mb-1">
                    R$ 49,90
                </p>

                <div className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8z"/>
                    <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"/>
                    </svg>
                    ou 12x de <span className="font-bold text-gray-700 ml-1">R$ 4,20</span>
                </div>
            </div>
        </div>
    ]

    return (
        <Slider elementos={Selling} intervalo={1000} />
    )
}