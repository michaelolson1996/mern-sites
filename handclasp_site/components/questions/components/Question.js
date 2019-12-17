import {Component} from 'react'

class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="question_answer_container">
                    <div className ="question_container">
                        <h3 className="question">{props.question}</h3>
                        <i className="fas fa-angle-right question_right_arrow"></i>
                    </div>
                    <div className="answer-container">
                        <p className="answer">{props.answer}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}


export default Question