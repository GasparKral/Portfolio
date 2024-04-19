import HamburguerLogo from '@/assets/Hamburguer';
import { useState } from 'react';
export const HamburguerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <menu
            className={`flex flex-col absolute top-4 left-4 text-2xl text-acent font-bold  gap-4 z-20 pb-8 pr-4 overflow-hidden ${
                isOpen ? 'bg-white/80 backdrop-blur-xl h-screen' : ''
            }`}
        >
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='mb-4'
            >
                <HamburguerLogo
                    style='xl:hidden text-acent bg-white/80 p-2 rounded-md'
                    width='43'
                    height='43'
                />
            </div>
            {!isOpen ? null : (
                <>
                    <li className='px-4'>
                        <a href='/'>About</a>
                    </li>
                    <li className='px-4'>
                        <a href='/projects'>Projects & Experience</a>
                    </li>
                    <li className='px-4'>
                        <a href='/contact'>Contact</a>
                    </li>
                </>
            )}
        </menu>
    );
};
