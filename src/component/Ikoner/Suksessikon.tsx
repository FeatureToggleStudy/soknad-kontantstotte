import * as React from 'react';

const Suksessikon = (props: React.SVGProps<any>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Suksess</title>
        <g fill="#06893A" fillRule="evenodd">
            <path d="M10 16a.502.502 0 0 1-.354-.147l-2.5-2.5a.5.5 0 0 1 .707-.707l2.16 2.158 7.145-6.67a.502.502 0 0 1 .707.024.502.502 0 0 1-.024.707l-7.5 7a.5.5 0 0 1-.34.134z" />
            <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />
        </g>
    </svg>
);

export default Suksessikon;
