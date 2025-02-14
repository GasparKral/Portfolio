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
        codeURL: 'https://github.com/GasparKral/TheRealColorBun',
        liveURL: '',
        img: './ThRealColorthumb.webp',
        technologies: ['Express', 'React', 'Vite', 'Tailwind'],
    },
    {
        title: 'LMweb',
        description:
            'A blog made with Astro, React and Tailwind explaining the Marks Language subject and CSS ',
        codeURL: 'https://github.com/GasparKral/LMweb',
        liveURL: '',
        img: './LMwebThumb.webp',
        technologies: ['Astro', 'React', 'Tailwind'],
    },
    {
        title: 'GPS-SL web',
        description:
            'A web page made with Astro and TailwindCSS v4, using the mardoc Astro pluging and Github Actions to CD the news automatically to the hosting via FTP',
        codeURL: '',
        liveURL: 'http://web.gps-sl.es',
        img: './GPSSLThumb.png',
        technologies: ['Astro', 'Tailwind', "Github's Actions"],
    },
];
