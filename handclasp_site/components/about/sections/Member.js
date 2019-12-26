const Member = (props) => {
    return (
        <div className="member_about_page">
            <div className="member_about_container">
                <div className="member_about_container_one">
                    <div className="member_about_text_container">
                        <h2 className="member_about_text_title">{props.title}</h2>
                        <p>{props.message}</p>
                    </div>
                </div>
                <div className="member_about_image_container">
                    <div className={props.style}></div>
                </div>
            </div>
        </div>
    )
}

export default Member