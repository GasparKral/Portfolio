import ProyectCard from './ProyectCard';
import { ProyectsData } from '../data/ProyectsData';

export const Proyects = () => {
    return (
        <section
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2.5rem',
                gridTemplateRows: '80px',
                gridAutoRows: '300px',
            }}
        >
            <h1 className='col-span-2 text-center text-7xl text-transparent bg-gradient-to-r from-acent to-sky-500 bg-clip-text font-bold font-nunito'>
                My projects
            </h1>
            {ProyectsData.map((proyect) => (
                <ProyectCard
                    key={proyect.title}
                    title={proyect.title}
                    description={proyect.description}
                    codeURL={proyect.codeURL}
                    liveURL={proyect.liveURL}
                    img={proyect.img}
                    technologies={proyect.technologies}
                />
            ))}
        </section>
    );
};
