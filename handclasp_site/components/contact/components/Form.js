import { Component } from 'react';
import Button from '../../global/Button';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        }
    }

    sendClientInfo = () => {
        const { name, email, phone, message } = this.state.inputs
        // this.toggleLoad()
        // sendClientMessage({
        //     name,
        //     email,
        //     phone,
        //     message
        // })
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

    render() {
        console.log(this.state)
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

export default Form;