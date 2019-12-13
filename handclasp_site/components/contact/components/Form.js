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
        dispatch(sendClientMessage({ name, email, phone, subject, message })).then(res => {
            console.log(res)
        });
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
            <div className="form_container">
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

                <form className="contact_form">
                    <h3 className="contact_us_title">Contact Us!</h3>
                    <input onChange = { this.handleChange } value = { this.state.inputs.name } className="contact_form_inputs" name="name" type="text" placeholder="full name" required />
                    <input onChange = { this.handleChange } value = { this.state.inputs.email } className="contact_form_inputs" name="email" type="email" placeholder="email" required />
                    <input onChange = { this.handleChange } value = { this.state.inputs.phone } className="contact_form_inputs" name="phone" type="number" placeholder="phone" required />
                    <input onChange = { this.handleChange } value = { this.state.inputs.phone } className="contact_form_inputs" name="subject" type="text" placeholder="subject" required />
                    <textarea onChange = { this.handleChange } value = { this.state.inputs.message } className="form_inputs contact_page_textarea" name="message" type="text" placeholder="type your message here!" required />
                </form>
                <Button buttonClass="contact_form_submit_button" text="Submit" onClick={() => this.sendClientInfo()} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        email: state
    };
 }

export default connect(mapStateToProps)(Form);