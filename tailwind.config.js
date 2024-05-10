/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            textColor: {
                secondary: "#3A3740",
            },
            colors: {
                gradient_start: "#06286E",
                gradient_stop: "#164EC0",

                blueMain: "#06286E",
            },
            backgroundColor: {
                main: "#F9F9F9",
            },

            keyframes: {
                "animate-in": {
                    "0%": { opacity: "0", transform: "translateX(100%)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "animate-out": {
                    "0%": { opacity: "1", transform: "translateX(0)" },
                    "100%": { opacity: "0", transform: "translateX(100%)" },
                },
            },

            animation: {
                in: "animate-in 0.5s forwards",
                out: "animate-out 0.5s forwards",
            },
        },
    },
    plugins: [],
};
