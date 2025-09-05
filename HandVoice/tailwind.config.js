// tailwind.config.js
export default {
    theme: {
    extend: {
        fontFamily: {
            sans: ['Open_Sans', 'sans-serif'], 
        },
    },
    },
    plugins: [],
    extend: {
        animation: {
            slideIn: 'slideIn 0.8s ease-out forwards',
    },
    keyframes: {
    slideIn: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
    },
    },
}
}
