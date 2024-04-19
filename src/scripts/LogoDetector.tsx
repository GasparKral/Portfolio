import {
    AstroLogo,
    ExpressLogo,
    ReactLogo,
    TailwindLogo,
    ViteLogo,
} from '@/assets/Technologies';

import {
    InstagramLogo,
    LinkedinLogo,
    XLogo,
    GithubLogo,
    DiscordLogo,
} from '@/assets/SocialMedia';

export const LogoDetector = ({
    logos,
    style,
    measures,
}: {
    logos: string | string[];
    style?: string;
    measures?: number[];
}): JSX.Element | JSX.Element[] => {
    if (typeof logos === 'string') {
        return switcher({ logo: logos });
    } else if (Array.isArray(logos)) {
        return logos.map((logo) => (
            <span key={logo}> {switcher({ logo, style, measures })}</span>
        ));
    } else {
        return switcher({ logo: logos, style, measures });
    }
};

const switcher = ({
    logo,
    style,
    measures,
}: {
    logo: string;
    style?: string;
    measures?: number[];
}): JSX.Element => {
    switch (logo.toLowerCase()) {
        case 'astro':
            return <AstroLogo style={style} />;
        case 'express':
            return <ExpressLogo style={style} />;
        case 'react':
            return <ReactLogo style={style} />;
        case 'tailwind':
            return <TailwindLogo style={style} />;
        case 'vite':
            return <ViteLogo style={style} />;
        case 'linkedin':
            return (
                <LinkedinLogo
                    style={style}
                    measures={measures}
                />
            );
        case 'instagram':
            return (
                <InstagramLogo
                    style={style}
                    measures={measures}
                />
            );
        case 'x':
            return (
                <XLogo
                    style={style}
                    measures={measures}
                />
            );
        case 'twitter':
            return (
                <XLogo
                    style={style}
                    measures={measures}
                />
            );
        case 'github':
            return (
                <GithubLogo
                    style={style}
                    measures={measures}
                />
            );
        case 'discord':
            return (
                <DiscordLogo
                    style={style}
                    measures={measures}
                />
            );
        default:
            return logo as any;
    }
};
