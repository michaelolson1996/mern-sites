const Button = React.forwardRef(({onClick, href, amount}, ref) => (
    <a href={href} onClick={onClick} ref={ref}>
        <div className = "donation-options-circles">
            <p className = "donate-circles-inner-text">&#36;{amount}</p>
        </div>
    </a>
))

export default Button;