const StaffMember = (props) => {
    return (
        <div className = "row-2-about-containers">
                <div className = {`member-image ${props.image}`} onClick = {() => this.displayStory('siami')}>
                    <div className = "overlay">
                        <p className = "image-inner-text">{`${props.name}'s Story`}</p>
                    </div>
                </div>
            <h3 className = "member-name">{props.name}</h3>
        </div>
    )
};

export default StaffMember;