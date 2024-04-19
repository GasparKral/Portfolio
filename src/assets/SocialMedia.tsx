export const LinkedinLogo = ({
    style,
    measures,
}: {
    style?: string;
    measures?: number[];
}) => {
    return (
        <svg
            className={style}
            width={measures ? measures[0] : '24'}
            height={measures ? measures[1] : '24'}
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
            <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
            <path d='M8 11l0 5' />
            <path d='M8 8l0 .01' />
            <path d='M12 16l0 -5' />
            <path d='M16 16v-3a2 2 0 0 0 -4 0' />
        </svg>
    );
};

export const InstagramLogo = ({
    style,
    measures,
}: {
    style?: string;
    measures?: number[];
}) => {
    return (
        <svg
            className={style}
            width={measures ? measures[0] : '24'}
            height={measures ? measures[1] : '24'}
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
            <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
            <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
            <path d='M16.5 7.5l0 .01' />
        </svg>
    );
};
export const XLogo = ({
    style,
    measures,
}: {
    style?: string;
    measures?: number[];
}) => {
    return (
        <svg
            className={style}
            width={measures ? measures[0] : '24'}
            height={measures ? measures[1] : '24'}
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
            <path d='M4 4l11.733 16h4.267l-11.733 -16z' />
            <path d='M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772' />
        </svg>
    );
};
export const GithubLogo = ({
    style,
    measures,
}: {
    style?: string;
    measures?: number[];
}) => {
    return (
        <svg
            className={style}
            width={measures ? measures[0] : '24'}
            height={measures ? measures[1] : '24'}
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
            <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
        </svg>
    );
};
export const DiscordLogo = ({
    style,
    measures,
}: {
    style?: string;
    measures?: number[];
}) => {
    return (
        <svg
            className={style}
            width={measures ? measures[0] : '24'}
            height={measures ? measures[1] : '24'}
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
            <path d='M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0' />
            <path d='M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0' />
            <path d='M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3' />
            <path d='M7 16.5c3.5 1 6.5 1 10 0' />
        </svg>
    );
};
