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
        description: 'A easy way to create your own color palette',
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
            'A blog with Astro, React and Tailwind explaining the Marks Language subject and its syllabus ',
        codeURL: '',
        liveURL: '',
        img: './LMwebThumb.webp',
        technologies: ['Astro', 'React', 'Tailwind'],
    },
];
