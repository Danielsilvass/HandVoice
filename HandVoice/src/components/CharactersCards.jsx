import VictorCaracter from "../../public/VictorCaracter.png"
import BackgroundCaracter from "../../public/BackgroundCaracter.png"
import {Slider} from "../hooks/Slider.jsx"

import { useIsMobile } from "../hooks/useIsMobile.jsx";

export function CharactersCards() {
    const isMobile = useIsMobile()
    const Cards = isMobile ? [
            <div className="relative w-32 h-40">
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
                </div>,
                <div className="relative w-32 h-40">
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
                </div>,
                <div className="relative w-32 h-40">
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
                </div>,
                <div className="relative w-32 h-40">
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
    ]: [
        <div>
            
        </div>
    ]

    return (
        <div >
            <Slider elementos={Cards} intervalo={2800} />
        </div>
    )
}