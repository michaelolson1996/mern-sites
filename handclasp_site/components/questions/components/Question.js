
const Question = (props) => {

    const attr = props.value == "none" ? {style: {display: 'none'}} : {style: {display: 'visible'}}
    return (
        <React.Fragment>
            <div className="question_answer_container">
                <div onClick={() => props.onClick(props.index)} className ="question_container">
                    <h3 className="question">{props.question}</h3>
                    <i className="fas fa-angle-right question_right_arrow"></i>
                </div>
                <div className="answer_container" {...attr}>
                    <p className="answer">{props.answer}</p>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Question