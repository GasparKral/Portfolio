import { LogoDetector } from '@/scripts/LogoDetector';
import { SourceCodeLogo, WatchLogo } from '@assets/Links';

const ProyectCard = ({
    title,
    description,
    codeURL,
    liveURL,
    img,
    technologies,
    style,
}: {
    title: string;
    description: string;
    codeURL: string;
    liveURL: string;
    img: string;
    technologies: string[];
    style?: string;
}) => {
    return (
        <article
            className={`rounded-xl grid grid-cols-2 overflow-hidden bg-neutral-800 ${style} shadow-lg`}
        >
            <img
                style={{
                    maskImage:
                        'linear-gradient(to right , rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) )',
                }}
                className='w-full h-full relative object-cover select-none xl:block hidden'
                src={`/Portfolio/${img}`}
                alt={`image of ${title}`}
            />
            <div className='flex flex-col gap-4 p-4 text-neutral-50 relative xl:col-span-1 col-span-2'>
                <header>
                    <h2 className='text-4xl font-frutiger font-bold'>
                        {title}
                    </h2>
                </header>

                <p>{description}</p>
                <footer className='flex justify-between align-middle absolute bottom-4 right-4 w-[calc(100%-2rem)]'>
                    <div className='flex gap-2'>
                        <a
                            className='hover:drop-shadow-white transition-shadow duration-200'
                            href={codeURL}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <SourceCodeLogo />
                        </a>
                        <a
                            className='hover:drop-shadow-white transition-shadow duration-200'
                            href={liveURL}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <WatchLogo />
                        </a>
                    </div>
                    <div className='flex gap-2 '>
                        {LogoDetector({ logos: technologies })}
                    </div>
                </footer>
            </div>
        </article>
    );
};

export default ProyectCard;
