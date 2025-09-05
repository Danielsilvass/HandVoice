import { useState, useEffect } from "react"

export function ButtomDarkMode() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const tagHTML = document.documentElement
        tagHTML.classList.remove("dark")

        if(theme === "dark") {
            tagHTML.classList.add("dark")
        }
    }, [theme])

    return (
    <div className="flex flex-col items-center gap-4">
        <button onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")}
        className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 bg-cyan-400
        `}
        >
        <div
            className={`w-6 h-6 rounded-full transition-transform duration-300
            ${theme === "dark" ? "translate-x-8 bg-[#06112d]" : "translate-x-0 bg-white"}
            `}
        />
        </button>
    </div>
    );
}
