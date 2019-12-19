import { PureComponent } from 'react';

const Question = (props) => {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         styles: {
    //             display: 'none'
    //         }
    //     }
    // }

    // onClick = () => {
    //     if (this.state.styles.display == 'none') {
    //         this.setState(() => ({
    //             styles: {
    //                 display: 'visible',
    //             }
    //         }))
    //     } else {
    //         this.setState(() => ({
    //             styles: {
    //                 display: 'none'
    //             }
    //         }))    
    //     }
    // }


    return (
        <React.Fragment>
            <div className="question_answer_container">
                <div className ="question_container">
                    <h3 className="question">{props.question}</h3>
                    {/* <i className="fas fa-angle-right question_right_arrow"></i> */}
                </div>
                <div className="answer_container">
                    <p className="answer">{props.answer}</p>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Question