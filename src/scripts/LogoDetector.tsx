import {
    AstroLogo,
    ExpressLogo,
    ReactLogo,
    TailwindLogo,
    ViteLogo,
} from '@/assets/Technologies';

import { LinkedinLogo } from '@/assets/SocialMedia';

export const LogoDetector = ({
    logos,
}: {
    logos: string | string[];
}): JSX.Element | JSX.Element[] => {
    if (typeof logos === 'string') {
        return switcher({ logo: logos });
    } else if (Array.isArray(logos)) {
        return logos.map((logo) => (
            <span key={logo}> {switcher({ logo })}</span>
        ));
    } else {
        return switcher({ logo: logos });
    }
};

const switcher = ({ logo }: { logo: string }): JSX.Element => {
    switch (logo) {
        case 'Astro':
            return <AstroLogo />;
        case 'Express':
            return <ExpressLogo />;
        case 'React':
            return <ReactLogo />;
        case 'Tailwind':
            return <TailwindLogo />;
        case 'Vite':
            return <ViteLogo />;
        case 'Linkedin':
            return <LinkedinLogo />;
        default:
            return logo as any;
    }
};
