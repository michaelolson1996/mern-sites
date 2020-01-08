import Dave from '../../../public/static/about_image_9.webp';

const Child = (props) => {
    return (
        <div key = {props.key} className = "sponsor-kids-outer-container" onClick = {() => props.onClick(props.key)}>
            <div className = "sponsor-kids-container">
                <img className = "sponsor-child-image" src = { Dave } alt = "yeah" />
                <div className = "text-sponsor-container">
                    <h2>Get to Know Me</h2>
                </div>
            </div>
        </div>
    )
}

export default Child;