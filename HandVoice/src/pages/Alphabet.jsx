import ExperienciaDesktop from "../../public/ExperimentalDesktop.png"
import ExperienciaMobile from "../../public/ExperienciaMobile.png"
import bannerDesktop from "../../public/Banner2Desk.png"
import Banner from "../../public/Banner2.png"

import { useIsMobile } from "../hooks/useIsMobile"

export function Alphabet() {
    const isMobile = useIsMobile()
    return (
        <div className="bg-white dark:bg-darksblue dark:text-white">
            {isMobile ? (
                <div className="flex justify-center items-center flex-col mb-4">
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="text-4xl mb-3">Alfabeto em Libras:</h1>
                        <iframe className="border-10 border-darksblue rounded-2xl" width="310" height="175" src="https://www.youtube.com/embed/3VUq8rZbF-4?si=iU6qZOIrEDA-OpEn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <p className="text-white bg-darksblue p-3 rounded-2xl m-2"><strong>Por que aprender o alfabeto em Libras?</strong> <br/> Aprender o alfabeto em Libras é um passo essencial para a comunicação e inclusão de pessoas surdas. Mesmo sem dominar a língua completamente, saber soletrar palavras facilita a interação e pode ser útil em situações do dia a dia ou emergências. Além disso, o alfabeto ajuda no aprendizado da Libras e no desenvolvimento da coordenação motora.</p>
                    </div>
                    <a href=""><img className="rounded-3xl" src={Banner} alt="" /></a>

                    <div>
                        <h1 className="text-3xl mb-3">Veja um pouco do produlto:</h1>
                        <img src={ExperienciaMobile} alt="" />
                    </div>

                </div>
            ): (
                <div>
                        <h1 className="text-6xl  mb-3 text-center">Alfabeto em Libras:</h1>
                    <div className="flex justify-center items-center gap-10 mb-4">
                        <div>
                            <iframe className="border-10 border-darksblue rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/3VUq8rZbF-4?si=iU6qZOIrEDA-OpEn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p className="w-[512px] text-white bg-darksblue p-3 rounded-2xl"><strong>Por que aprender o alfabeto em Libras?</strong> <br/> Aprender o alfabeto em Libras é um passo essencial para a comunicação e inclusão de pessoas surdas. Mesmo sem dominar a língua completamente, saber soletrar palavras facilita a interação e pode ser útil em situações do dia a dia ou emergências. Além disso, o alfabeto ajuda no aprendizado da Libras e no desenvolvimento da coordenação motora.</p>
                    </div>
                    <a href="" className="flex items-center justify-center "><img className="mb-4 w-[1200px] rounded-3xl" src={bannerDesktop} alt="" /></a>
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="text-5xl  mb-4 text-center">Veja um pouco do produlto:</h1>
                        <img src={ExperienciaDesktop} alt="" />
                    </div>
                </div> 
            )}
        </div>
        )
}