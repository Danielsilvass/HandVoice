import { useIsMobile } from "../hooks/useIsMobile"
import { Slider } from "../hooks/Slider"
export function FeedBack () {
    const isMobile = useIsMobile()
    const FeedbackMobile = isMobile ? [
        <div className="max-w-sm bg-#FBFBFB shadow-md rounded-lg p-6 relative overflow-hidden dark:bg-white">
            <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400 rounded-b-lg dark:bg-white" />

            <h3 className="text-lg font-semibold text-gray-800 ">Olivia Fernandes</h3>
            <p className="text-sm text-gray-500 mb-4 ">22 de abril de 2023</p>

            <p className="text-gray-700 text-sm mb-4 ">
                Fiquei impressionado com a seriedade da loja. Desde o primeiro contato até a entrega, tudo
                foi muito claro e confiável. Me senti seguro durante toda a compra!
            </p>

            <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                ))}
            </div>                        
        </div>,
        <div className="max-w-sm bg-#FBFBFB shadow-md rounded-lg p-6 relative overflow-hidden dark:bg-white">
            <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400 rounded-b-lg dark:bg-white" />

            <h3 className="text-lg font-semibold text-gray-800 ">Olivia Fernandes</h3>
            <p className="text-sm text-gray-500 mb-4 ">22 de abril de 2023</p>

            <p className="text-gray-700 text-sm mb-4 ">
                Fiquei impressionado com a seriedade da loja. Desde o primeiro contato até a entrega, tudo
                foi muito claro e confiável. Me senti seguro durante toda a compra!
            </p>

            <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                ))}
            </div>                        
        </div>,
        <div className="max-w-sm bg-#FBFBFB shadow-md rounded-lg p-6 relative overflow-hidden dark:bg-white">
            <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400 rounded-b-lg dark:bg-white" />

            <h3 className="text-lg font-semibold text-gray-800 ">Carlos Eduardo</h3>
            <p className="text-sm text-gray-500 mb-4 ">2 de outubro de 2024</p>

            <p className="text-gray-700 text-sm mb-4 ">
                O produto é simplesmente incrível! Muito melhor do que eu esperava. Chegou fresquinho, bem embalado e com um sabor maravilhoso. Dá pra ver que tem cuidado e qualidade em cada detalhe.
            </p>

            <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                ))}
            </div>                        
        </div>,
        <div className="max-w-sm bg-#FBFBFB shadow-md rounded-lg p-6 relative overflow-hidden dark:bg-white">
            <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400 rounded-b-lg dark:bg-white" />

            <h3 className="text-lg font-semibold text-gray-800 ">Victor Spenser</h3>
            <p className="text-sm text-gray-500 mb-4 ">7 de maio de 2025</p>

            <p className="text-gray-700 text-sm mb-4 ">
                Tudo foi perfeito, desde o pedido até a entrega. É aquele tipo de loja que a gente tem prazer em indicar pros amigos. Com certeza vou comprar de novo!
            </p>

            <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                ))}
            </div>                        
        </div>
    ]: 
    [
        <div className="flex gap-2 p-2 justify-center w-full">
                    <div className="max-w-sm bg-#FBFBFB shadow-md rounded-lg p-6 relative overflow-hidden dark:bg-white">
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400 rounded-b-lg dark:bg-white" />

                        <h3 className="text-lg font-semibold text-gray-800 ">Arthur Galdino</h3>
                        <p className="text-sm text-gray-500 mb-4 ">10 de dezembro de 2024</p>

                        <p className="text-gray-700 text-sm mb-4 ">
                            O atendimento foi impecável! Me responderam super rápido, com educação e paciência. Tiraram todas as minhas dúvidas e ainda entregaram antes do prazo. Me senti valorizado como cliente.
                        </p>

                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                            </svg>
                            ))}
                        </div>
                        
                    </div>


                    <div className="max-w-sm bg-#FBFBFB shadow-md rounded-lg p-6 relative overflow-hidden dark:bg-white">
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400 rounded-b-lg dark:bg-white" />
                        <h3 className="text-lg font-semibold text-gray-800 ">Carlos Eduardo</h3>
                        <p className="text-sm text-gray-500 mb-4 ">2 de outubro de 2024</p>

                            <p className="text-gray-700 text-sm mb-4 ">
                                O produto é simplesmente incrível! Muito melhor do que eu esperava. Chegou fresquinho, bem embalado e com um sabor maravilhoso. Dá pra ver que tem cuidado e qualidade em cada detalhe.
                            </p>

                            <div className="flex space-x-1">
                                {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                                </svg>
                                ))}
                            </div>
                            
                        </div>


                        <div className="max-w-sm bg-#FBFBFB shadow-md rounded-lg p-6 relative overflow-hidden dark:bg-white">
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400 rounded-b-lg dark:bg-white" />

                            <h3 className="text-lg font-semibold text-gray-800 ">Victor Spenser</h3>
                            <p className="text-sm text-gray-500 mb-4 ">7 de maio de 2025</p>

                            <p className="text-gray-700 text-sm mb-4 ">
                                Tudo foi perfeito, desde o pedido até a entrega. É aquele tipo de loja que a gente tem prazer em indicar pros amigos. Com certeza vou comprar de novo!
                            </p>

                            <div className="flex space-x-1">
                                {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                                </svg>
                                ))}
                            </div>
                            
                        </div>


                        <div className="max-w-sm bg-#FBFBFB shadow-md rounded-lg p-6 relative overflow-hidden dark:bg-white">
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400 rounded-b-lg dark:bg-white" />

                            <h3 className="text-lg font-semibold text-gray-800 ">Arthur Galdino</h3>
                            <p className="text-sm text-gray-500 mb-4 ">10 de dezembro de 2024</p>

                            <p className="text-gray-700 text-sm mb-4 ">
                                O atendimento foi impecável! Me responderam super rápido, com educação e paciência. Tiraram todas as minhas dúvidas e ainda entregaram antes do prazo. Me senti valorizado como cliente.
                            </p>

                            <div className="flex space-x-1">
                                {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                                </svg>
                                ))}
                            </div>
                    </div>
                </div>
    ]
    return (
        <div>           
                <Slider elementos={FeedbackMobile} intervalo={2800} />
        </div>
        )}  