const Director = (props) => {
    return (
        <div className = "directors-boxes">
            <div className = {props.className}></div>
            <h3 className = "directors-titles">{props.name}</h3>
            <p className = "directors-position">{props.position}</p>
        </div>
    )
}

export default Director;