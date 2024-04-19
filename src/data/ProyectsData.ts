export type ProyectsData = {
    title: string;
    description: string;
    codeURL: string;
    liveURL: string;
    img: string;
    technologies: string[];
};

export const ProyectsData: ProyectsData[] = [
    {
        title: 'TheRealColor',
        description:
            'A web app that allows you to create palettes, saved and export to vanilla CSS or Tailwind',
        codeURL: '',
        liveURL: '',
        img: './ThRealColorthumb.webp',
        technologies: ['Express', 'React', 'Vite', 'Tailwind'],
    },
    {
        title: 'Scomponents',
        description:
            'A collection of reusable components for React, Astro and Vanilla JS/HTML',
        codeURL: '',
        liveURL: '',
        img: './ScomponentsThumb.webp',
        technologies: ['React', 'Astro', 'Tailwind'],
    },
    {
        title: 'LMweb',
        description:
            'A blog made with Astro, React and Tailwind explaining the Marks Language subject and CSS ',
        codeURL: '',
        liveURL: '',
        img: './LMwebThumb.webp',
        technologies: ['Astro', 'React', 'Tailwind'],
    },
];