import React from 'react';

const DropDownChild = React.forwardRef(({onClick, href, text, style}, ref) => (
    <a href={href} onClick={onClick} ref={ref} className={style}>
        <p className='dropdown_menu_item_text'>{text}</p>
    </a>
));

export default DropDownChild;