const InfoContainer = (props) => {
    return (
        <div className = "about-2-container-1" data-aos="fade-left"
                data-aos-delay="40" 
                data-aos-duration="1200">
            <div className = {props.picture}>
                <div className = {props.bgClass}>
                    <div className = "content-container">
                        <h2 className = "about-title">{props.title}</h2>
                        <p>{props.paragraph}</p>
                    </div>
                </div>
            </div>
    </div>
    )
};

export default InfoContainer;