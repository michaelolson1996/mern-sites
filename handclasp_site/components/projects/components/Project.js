const Project = (props) => {
    return (
        <div className="project_container_wrap">
            <h2 className="project_title">{props.name}</h2>
            <div className="project_image_container">
                <img className="project_image" src={props.image} alt = ""></img>
            </div>
            <div className="project_description_container">
                <p className="project_description">{props.description}</p>
            </div>
            <div className="project_cost_savings">
                <p>{`${props.savings} / ${props.cost}`}</p>
            </div>
            <style jsx>{`
                .project_container_wrap {
                    height:380px;
                    min-width:300px;
                    max-width:350px;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:space-around;
                    flex:1;
                    background-color: #008CBA;
                    border-radius:10%;
                    color: white;
                    padding:10px;
                    // padding-right:10px;
                    margin:50px;
                }

                .project_title {
                    margin-top:10px;
                    font-size:1.4em;
                    text-align:center;
                    // height:50px;
                }

                .project_image_container {
                    width:100%;
                    height:150px;
                    background-color:rgb(0, 0, 0, 0.4);
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                .project_image {
                    height:120px;
                    width:auto;
                }

                .project_description_container {
                    width:100%;
                    height:auto;
                    // padding: 10px;
                    text-align:center;
                }

                .project_description {
                    
                }

                .project_cost_savings {
                    font-weight:600;
                }
            `}</style>
        </div>
    )
}

export default Project;