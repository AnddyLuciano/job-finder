/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,tsx,ts,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2a68ff",
                secondary: "#f1f4f8",
                body: "#6f6f6f",
            },
            boxShadow: {
                base: "#f7f8f9",
            },
        },
    },
    plugins: [],
};
