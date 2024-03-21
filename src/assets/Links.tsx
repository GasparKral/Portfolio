export const WatchLogo = ({ style }: { style?: string }) => {
    return (
        <svg
            className={style}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
            <path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6' />
        </svg>
    );
};

export const SourceCodeLogo = ({ style }: { style?: string }) => {
    return (
        <svg
            className={style}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M7 8l-4 4l4 4' />
            <path d='M17 8l4 4l-4 4' />
            <path d='M14 4l-4 16' />
        </svg>
    );
};
