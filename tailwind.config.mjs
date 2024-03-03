/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                frutiger: ['Frutiger', 'sans-serif'],
                nunito: ['Nunito Extra Light', 'sans-serif'],
            },
            colors: {
                acent: '#035afc',
                primary: '#171717',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
