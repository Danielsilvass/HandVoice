import {ContactCard} from "../components/ContactCard.jsx"
import { useIsMobile } from "../hooks/useIsMobile"

export function Contact() {
    const isMobile = useIsMobile()
    return (
        <div className="dark:bg-indigo-950">
        {isMobile ? (
            <div className="flex flex-col">
                <div className="text-2xl text-center flex flex-col gap-4 m-6">
                    <h1 className="text-lightsblue dark:text-white bg-darksblue dark:bg-lightsblue p-5 text-3xl rounded-3xl">Contatos</h1>
                    <div className="bg-lightsblue dark:bg-white text-white dark:text-darksblue p-3 rounded-3xl">
                        <strong>Telefone:</strong>
                        <p>(55)11 95933-3357</p>
                    </div>
                    <div className="text-lightsblue dark:text-white bg-darksblue dark:bg-lightsblue p-3 rounded-3xl">
                        <strong>Email:</strong>
                        <p>HandVoice@gmail.com</p>
                    </div>
                </div>
                <ContactCard />
            </div>
        ): (
            <div className="flex items-center justify-around">
                <div className="text-3xl text-center flex flex-col gap-4">
                    <h1 className="text-lightsblue dark:text-white bg-darksblue dark:bg-lightsblue p-6 text-6xl rounded-3xl">Contatos</h1>
                    <div className="bg-lightsblue dark:bg-white text-white dark:text-darksblue p-5 rounded-3xl">
                        <strong>Telefone:</strong>
                        <p>(55)11 95933-3357</p>
                    </div>
                    <div className="text-lightsblue dark:text-white bg-darksblue dark:bg-lightsblue p-5 rounded-3xl">
                        <strong>Email:</strong>
                        <p>HandVoice@gmail.com</p>
                    </div>
                </div>
                <ContactCard/>
            </div>
        )}
        </div>
    )
}