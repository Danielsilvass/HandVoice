import TestReference from "../../public/TestReference.png"
import { useIsMobile } from "../hooks/useIsMobile"

export function Reference() {
    const isMobile = useIsMobile()
    return (
        <div className="flex flex-col justify-center items-center dark:bg-darksblue">
            <h1 className="text-4xl mb-3 text-darksblue dark:text-white">Referências do Projeto</h1>
            <div className={isMobile ? "grid grid-cols-1 w-64 h-auto" : "grid grid-cols-2 gap-4"}>
                <img src={TestReference} alt="" />
                <img src={TestReference} alt="" />
                <img src={TestReference} alt="" />
                <img src={TestReference} alt="" />
            </div>
        </div>
    )
}