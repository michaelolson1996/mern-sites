const Icon = React.forwardRef(({onClick, href, iconID, iconClass, iconText}, ref) => (
    <a href={href} onClick={onClick} ref={ref}>
        <div className = "home-section-3-boxes home-box-1">
            <i id = {iconID} className = {`fas ${iconClass} home-section-3-icons`}></i>
            <h3 className = "home-section-3-text">{iconText}</h3>
        </div>
    </a>
));

export default Icon