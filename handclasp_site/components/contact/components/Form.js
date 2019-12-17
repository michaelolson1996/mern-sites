import { Component } from 'react';
import {connect} from 'react-redux';
import Button from '../../global/Button';
import sendClientMessage from '../../../redux/actions/emailActions';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            }
        }
    }

    sendClientInfo = () => {
        const { name, email, phone, subject, message } = this.state.inputs;
        const {dispatch} = this.props;
        dispatch(sendClientMessage({ name, email, phone, subject, message }))
        this.props.toggleLoad()
        this.clearInputs()
    }

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
        console.log(this.state)
        console.log(this.props)
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
                    <input onChange = { this.handleChange } value = { this.state.inputs.name } className="contact_form_inputs" name="name" type="text" placeholder="full name" required="true" />
                    <input onChange = { this.handleChange } value = { this.state.inputs.email } className="contact_form_inputs" name="email" type="email" placeholder="email" required="true" />
                    <input onChange = { this.handleChange } value = { this.state.inputs.phone } className="contact_form_inputs" name="phone" type="number" placeholder="phone" required="true" strict="true" />
                    <input onChange = { this.handleChange } value = { this.state.inputs.subject } className="contact_form_inputs" name="subject" type="text" placeholder="subject" required="true" />
                    <textarea onChange = { this.handleChange } value = { this.state.inputs.message } className="contact_page_textarea" name="message" placeholder="type your message here!" />
                </div>
                <Button buttonClass="contact_form_submit_button" text="Submit" onClick={() => this.sendClientInfo()} />
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state
    };
 }

export default connect(mapStateToProps)(Form);