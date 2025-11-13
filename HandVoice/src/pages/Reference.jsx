import PrimeiroCardReference from "../../public/PrimeiroCardReference.png"
import SegundoCardReference from "../../public/SegundoCardReference.png"
import TerceiroCardReference from "../../public/TerceiroCardReference.png"
import QuartoCardReference from "../../public/QuartoCardReference.png"
import { useIsMobile } from "../hooks/useIsMobile"

export function Reference() {
    const isMobile = useIsMobile()
    return (
        <div className="flex flex-col justify-center items-center dark:bg-darksblue">
            <h1 className="text-4xl mb-3 text-darksblue dark:text-white">Referências do Projeto</h1>
            <div className={isMobile ? "grid grid-cols-1 w-64 h-auto" : "grid grid-cols-2 gap-4"}>
                <a href="http://milanesa.ime.usp.br/rbie/index.php/rbie/article/view/7140" target="_blank" ><img src={PrimeiroCardReference} alt="" /></a>
                <a href="https://www.scielo.br/j/rbee/a/n48zDNF4bSqzs7xHwQQ774c/" target="_blank" ><img src={SegundoCardReference} alt="" /></a>
                <a href="https://seer.faccat.br/index.php/redin/article/view/1539" target="_blank" ><img src={TerceiroCardReference} alt="" /></a>
                <a href="http://milanesa.ime.usp.br/rbie/index.php/sbie/article/view/3057" target="_blank" ><img src={QuartoCardReference} alt="" /></a>
            </div>
        </div>
    )
}