const StaffMember = React.forwardRef(({href, onClick, name, image}, ref) => (
    <a href={href} onClick={onClick} ref={ref}>
        <div className = "row-2-about-containers">
            <div className = {`member-image ${image}`}>
                <div className = "overlay">
                    <p className = "image-inner-text">{`${name}'s Story`}</p>
                </div>
            </div>
            <h3 className = "member-name">{name}</h3>
        </div>
    </a>
));

export default StaffMember;