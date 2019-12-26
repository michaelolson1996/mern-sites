import { Component } from 'react';
import {connect} from 'react-redux';
import Button from '../../global/Button';
import sendClientMessage from '../../../redux/actions/sendEmail';
import verifyEmail from '../../../redux/actions/verifyEmail';


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: null,
            inputs: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            }
        }
    }

    componentDidUpdate() {
        // if (this.state.status === null) {
        //     this.setState(() => ({
        //         status: this.props.emailStatus
        //     }))
        // }
        // console.log(this.props)
    }

    handleEmail = () => {
        this.validateEmail();
    }

    // sendClientInfo = () => {
    //     if (name.length == 0 || email.length == 0 || message.length == 0 || phone.length == 0) {
    //         alert("please fill out required information");
    //     } else {
    //         const {dispatch} = this.props;
    //         dispatch(sendClientMessage({ name, email, phone, subject, message }))
    //         // this.props.toggleLoad()
    //         this.clearInputs()
    //     }
    // }

    validateEmail = () => {
        const clientEmail = this.state.inputs.email;
        const {dispatch} = this.props
        dispatch(verifyEmail({email: clientEmail})).then(() => {
            if (this.props.validStatus) {
                const { name, email, phone, subject, message } = this.state.inputs;
                dispatch(sendClientMessage({ name, email, phone, subject, message }))
            }

        })
    }

    // checkInputs = () => {
    //     if ()
    // }

    clearInputs = () => {
        this.setState({
            inputs: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            }
        })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    // handleSubmit = event => {
    //     event.preventDefault()
    //     const newReview = {
    //         name: this.state.name,
    //         email: this.state.email,
    //         phone: this.state.phone,
    //         subject: this.state.subject,
    //         message: this.state.message
    //     }
    //     this.props.postReview(newReview)
    //     this.props.getReviews()
    //     .then( () => {
    //         this.clearInputs()
    //     })
    // }

    render() {
        console.log(this.props)
        // console.log(this.state)
        return (
            <form className="form_container">
                {/* <div className="">
                    <div className = {
                        `${contact.contact_dave_info_container}`
                    }>
                        <div className = {
                            `${contact.contact_dave_image}`
                        }></div>
                        <div className = {
                            `${contact.contact_dave_info}`
                        }>
                            <p className = {
                                `${contact.dave_message}`
                            }>Hello, my name is David, Dave for short. Please fill out the following information and I will get back to you as soon as possible!</p>
                            <p className = {
                                `${contact.dave_email_info}`
                            }>davep@handclasp.org</p>
                        </div>
                    </div> */}

                <div className="contact_form">
                    <h3 className="contact_us_title">Contact Us!</h3>
                    <input onChange = { this.handleChange } value = { this.state.inputs.name } className="contact_form_inputs" name="name" type="text" placeholder="full name" required={true} />
                    <input onChange = { this.handleChange } value = { this.state.inputs.email } className="contact_form_inputs" name="email" type="email" placeholder="email" required={true} />
                    <input onChange = { this.handleChange } value = { this.state.inputs.phone } className="contact_form_inputs" name="phone" type="number" placeholder="phone" required={true} strict="true" />
                    <input onChange = { this.handleChange } value = { this.state.inputs.subject } className="contact_form_inputs" name="subject" type="text" placeholder="subject" required={true} />
                    <textarea onChange = { this.handleChange } value = { this.state.inputs.message } className="contact_page_textarea" name="message" placeholder="type your message here!" />
                </div>
                <Button buttonClass="contact_form_submit_button" text="Submit" onClick={() => this.handleEmail()} />
            </form>
        )
    }
}

function mapStateToProps({emailStatus, validStatus}) {
    return {
        emailStatus: emailStatus,
        validStatus: validStatus
    };
 }

export default connect(mapStateToProps)(Form);