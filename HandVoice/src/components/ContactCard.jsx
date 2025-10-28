import MotoMoto from "../../public/MotoMoto.jpeg"
import Daniel from "../../public/Daniel.jpeg"
import Victor from "../../public/Victor.jpeg"
import Kadri from "../../public/Kadri.jpg"
import Linkedin from "../../public/Linkedin.png"
import GitHub from "../../public/GitHub.png"
import InstagramContact from "../../public/InstagramContact.png"
import { useIsMobile } from "../hooks/useIsMobile"
import { Slider } from "../hooks/Slider"

export function ContactCard() {
    const isMobile = useIsMobile()
    const contact = isMobile ? [
        <div className="flex justify-center items-center">
                <div>
                    <div class="w-50 bg-indigo-950">
                    <p class="justify-start text-white text-xl font-semibold text-center">Victor Gaspary</p>
                    <p class="text-cyan-500 text-base font-bold text-center">Designer Jogo/Site</p>
                    </div>
                    <img src={Victor} className="w-50 h-50 rounded-b-2xl" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <a href="#"><img src={Linkedin} alt="" /></a>
                    <a href="#"><img src={GitHub} alt="" /></a>
                    <a href="#"><img src={InstagramContact} alt="" /></a>
                </div>
            </div>,
            <div className="flex justify-center items-center">
                <div>
                    <div class="w-50 bg-indigo-950">
                    <p class="justify-start text-white text-xl font-semibold text-center">Pablo Almeida</p>
                    <p class="text-cyan-500 text-base font-bold text-center">Desenvolv. Jogo</p>
                    </div>
                    <img src={MotoMoto} className="w-50 h-50 rounded-b-2xl" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <a href="#"><img src={Linkedin} alt="" /></a>
                    <a href="#"><img src={GitHub} alt="" /></a>
                    <a href="#"><img src={InstagramContact} alt="" /></a>
                </div>
            </div>,
            <div className="flex justify-center items-center">
                <div>
                    <div class="w-50 bg-indigo-950">
                    <p class="justify-start text-white text-xl font-semibold text-center">Murilo Kadri</p>
                    <p class="text-cyan-500 text-base font-bold text-center">Desenvolv. Robo</p>
                    </div>
                    <img src={Kadri} className="w-50 h-50 rounded-b-2xl" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <a href="#"><img src={Linkedin} alt="" /></a>
                    <a href="#"><img src={GitHub} alt="" /></a>
                    <a href="#"><img src={InstagramContact} alt="" /></a>
                </div>
            </div>,
            <div className="flex justify-center items-center">
                <div>
                    <div class="w-50 bg-indigo-950">
                    <p class="justify-start text-white text-xl font-semibold text-center">Daniel Santos</p>
                    <p class="text-cyan-500 text-base font-bold text-center">Desenvolv. Site</p>
                    </div>
                    <img src={Daniel} className="w-50 h-50 rounded-b-2xl" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <a href="#"><img src={Linkedin} alt="" /></a>
                    <a href="#"><img src={GitHub} alt="" /></a>
                    <a href="#"><img src={InstagramContact} alt="" /></a>
                </div>
            </div>
    ] : [

    ]
    return (
        <div>
        {isMobile ? (
            <Slider elementos={contact} intervalo={2800} />
        ): (

            <div className="grid grid-cols-1 sm:grid-cols-2 p-6 gap-4">
                <div className="flex justify-center items-center">
                <div>
                    <div class="w-50 bg-slate-900">
                    <p class="justify-start text-white text-xl font-semibold text-center">Victor Gaspary</p>
                    <p class="text-cyan-500 text-base font-bold text-center">Designer Jogo/Site</p>
                    </div>
                    <img src={Victor} className="w-50 h-50 rounded-b-2xl" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <a href="#"><img src={Linkedin} alt="" /></a>
                    <a href="#"><img src={GitHub} alt="" /></a>
                    <a href="#"><img src={InstagramContact} alt="" /></a>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <div class="w-50 bg-slate-900">
                    <p class="justify-start text-white text-xl font-semibold text-center">Pablo Almeida</p>
                    <p class="text-cyan-500 text-base font-bold text-center">Desenvolv. Jogo</p>
                    </div>
                    <img src={MotoMoto} className="w-50 h-50 rounded-b-2xl" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <a href="#"><img src={Linkedin} alt="" /></a>
                    <a href="#"><img src={GitHub} alt="" /></a>
                    <a href="#"><img src={InstagramContact} alt="" /></a>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <div class="w-50 bg-slate-900">
                    <p class="justify-start text-white text-xl font-semibold text-center">Murilo Kadri</p>
                    <p class="text-cyan-500 text-base font-bold text-center">Desenvolv. Robo</p>
                    </div>
                    <img src={Kadri} className="w-50 h-50 rounded-b-2xl" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <a href="#"><img src={Linkedin} alt="" /></a>
                    <a href="#"><img src={GitHub} alt="" /></a>
                    <a href="#"><img src={InstagramContact} alt="" /></a>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <div class="w-50 bg-slate-900">
                    <p class="justify-start text-white text-xl font-semibold text-center">Daniel Santos</p>
                    <p class="text-cyan-500 text-base font-bold text-center">Desenvolv. Site</p>
                    </div>
                    <img src={Daniel} className="w-50 h-50 rounded-b-2xl" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <a href="#"><img src={Linkedin} alt="" /></a>
                    <a href="#"><img src={GitHub} alt="" /></a>
                    <a href="#"><img src={InstagramContact} alt="" /></a>
                </div>
            </div>
            </div>
        )}
        </div>
    )
}