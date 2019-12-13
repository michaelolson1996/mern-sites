import React from 'react';

const Button = React.forwardRef(({onClick, href, text}, ref) => (
    <a href={href} onClick={onClick} ref={ref} className = "button-link">
        <svg className="svg">
            <rect x="0" y="0" fill="none" width="100%" height="100%" className = "rect" />
        </svg>
        {text}
    </a>
));

export default Button;