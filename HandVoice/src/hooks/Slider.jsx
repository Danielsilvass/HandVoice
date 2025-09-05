import { useEffect, useRef, useState } from 'react';

export function Slider({ elementos, intervalo = 2800 }) {
    const [idx, setIdx] = useState(0);
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const [largura, setLargura] = useState(0);


    useEffect(() => {
        const atualizarLargura = () => {
        if (wrapperRef.current) {
            setLargura(wrapperRef.current.offsetWidth);
        }
        };

        atualizarLargura(); // Inicial
        window.addEventListener('resize', atualizarLargura);
        return () => window.removeEventListener('resize', atualizarLargura);
    }, []);

    // Avança os slides automaticamente
    useEffect(() => {
        const id = setInterval(() => {
        setIdx((prev) => (prev + 1) % elementos.length);
        }, intervalo);
        return () => clearInterval(id);
    }, [elementos.length, intervalo]);

    // Aplica o efeito de transição
    useEffect(() => {
        if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${idx * largura}px)`;
        }
    }, [idx, largura]);

    return (
        <div ref={wrapperRef} className="overflow-hidden w-full mx-auto">
        <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${largura * elementos.length}px` }}
        >
            {elementos.map((el, i) => (
            <div
                key={i}
                className="flex-shrink-0"
                style={{ width: `${largura}px` }}
            >
                {el}
            </div>
            ))}
        </div>
        </div>
    );
}
