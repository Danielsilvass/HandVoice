import { Slider } from "../hooks/Slider.jsx"
import Banner1 from "../../public/Banner1.png"
import Banner2 from "../../public/Banner2.png"
import Banner3 from "../../public/Banner3.png"
import Banner1Desk from "../../public/Banner1Desk.png"
import Banner2Desk from "../../public/Banner2Desk.png"
import Banner3Desk from "../../public/Banner3Desk.png"
import { useIsMobile } from "../hooks/useIsMobile.jsx"

export function Banners() {
    const isMobile = useIsMobile()
    const imgs = isMobile ? [
        <img src={Banner1} alt="Banner 1" className="w-full max-w-[500px] mx-auto h-auto object-cover"/>,
        <img src={Banner2} alt="Banner 2" className="w-full max-w-[500px] mx-auto h-auto object-cover"/>,
        <img src={Banner3} alt="Banner 3" className="w-full max-w-[500px] mx-auto h-auto object-cover" />
    ]: [
        <img src={Banner1Desk} alt="Banner 1" className="w-full h-auto object-cover"/>,
        <img src={Banner2Desk} alt="Banner 2" className="w-full h-auto object-cover"/>,
        <img src={Banner3Desk} alt="Banner 3" className="w-full h-auto object-cover" />
    ]
    return (
        <Slider elementos={imgs} intervalo={2800} />
    )
}