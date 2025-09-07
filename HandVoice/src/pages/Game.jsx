import { CharactersCards } from "../components/CharactersCards.jsx"
import Infection from "../../public/Infection.png"
import InfectionLogo from "../../public/InfectionLogo.png"
import PcIcon from "../../public/PcIcon.png"
import PlayInfection from "../../public/PlayInfection.png"
import BackgroundGame from "../../public/BackgroundGame.png"



export function Game() {
    return (
        <div className="bg-[url('../../public/BackgroundGame.png')]">
            <div className="flex">
                <img className="h-60 w-auto" src={Infection} alt="" />
                <img className="h-60 w-auto" src={InfectionLogo} alt="" />
            </div>
            <p className="text-lightsblue text-5xl mb-5 ml-8 font-semibold font-['Pixelify_Sans']">Já Disponivel</p>
            <div className="text-white text-5xl ml-8 font-semibold font-['Pixelify_Sans'] flex">
                <img src={PcIcon} alt="" />
                <p>PC</p>
            </div>
            <img className="h-30 w-auto ml-4" src={PlayInfection} alt="" />
            <CharactersCards />
        </div>
    )
}