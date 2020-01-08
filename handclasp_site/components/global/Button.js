import React from 'react';

const Button = React.forwardRef(({onClick, href, text, style}, ref) => (
    <a href={href} onClick={onClick} ref={ref} id={` ${style}`} className = {`button-link`}>
        <svg className="svg">
            <rect x="0" y="0" fill="none" width="100%" height="100%" className = "rect" />
        </svg>
        {text}
        <style jsx>{`
            #projects_button {
                position:absolute;
                bottom:10px;
            }
        `}</style>
    </a>
));

export default Button;