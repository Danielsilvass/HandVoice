import { Banners } from "../components/Banners.jsx"
import { AvisoHome } from "../components/AvisoHome.jsx";
import { CardSelling } from "../components/CardSelling.jsx"
import { FeedBack } from "../components/FeedBack.jsx";
import { CharactersCards } from "../components/CharactersCards.jsx";

export function Home() {

    return(
        <div className={"bg-white dark:bg-darksblue"}>
            <Banners/>
            <AvisoHome/>
            <h3 className="text-lg p-3 text-darksblue font-bold dark:text-white">Acessórios</h3>
            <CardSelling/>
            <h3 className="text-lg p-3 text-darksblue font-bold dark:text-white">O que falam sobre Nós</h3>
            <FeedBack/>
        </div>
    )
}