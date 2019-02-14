import * as React from 'react';

interface ISoppelbotteIkon {
    className?: string;
    style?: {};
}

const SoppelbotteIkon: React.FunctionComponent<ISoppelbotteIkon> = ({ className, style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={className}
            style={style}
        >
            <path d="M23.5 3H17V.5c0-.276-.224-.5-.5-.5h-8c-.276 0-.5.224-.5.5V3H1.5c-.276 0-.5.224-.5.5s.224.5.5.5H4v19.5c0 .276.224.5.5.5h16c.276 0 .5-.224.5-.5V4h2.5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zM9 18.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5s.5.224.5.5v11zM9 1h7v2H9V1zm4 17.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5s.5.224.5.5v11zm4 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5s.5.224.5.5v11z" />
        </svg>
    );
};

export default SoppelbotteIkon;