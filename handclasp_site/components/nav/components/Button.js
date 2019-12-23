const Button = React.forwardRef(({onClick, href, text, ddDisplay, style}, ref) => (
    <a href={href} onClick={onClick} ref={ref} className={style} id={ddDisplay}>
        {text}
    </a>
));

export default Button;