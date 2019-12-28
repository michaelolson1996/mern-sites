import { Component } from 'react';
import {connect} from 'react-redux';
import Button from '../../global/Button';
import client from '../../../redux/actions/sendEmail';
import verify from '../../../redux/actions/verifyEmail';
import Alert from '../../global/Alert'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alert: {
                border: 'none',
                message: ''
            },
            inputs: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            },
            status: {
                isValid: undefined
            }
        };
    };

    componentDidUpdate() {
        if (this.props.validStatus.status !== undefined && this.state.status.isValid == undefined) {
            this.setState(() => ({
                status: {
                    isValid: true
                }
            }));
        };
        
        if (this.props.emailStatus.status == true && this.state.alert.border !== 'red' && this.state.alert.border !== 'green') {
            this.setStatusState('green', 'message successfully sent');
            this.clearInputs();
        } else if (this.props.emailStatus.status == false && this.state.alert.border !== 'red' && this.state.alert.border !== 'green') {
            this.setStatusState('red', 'message not sent successfully, please try again or email [email goes here]');
        };
    };

    handleEmail = () => {
        if (this.state.alert.border !== 'none') {
            this.setState(() => ({
                alert: {
                    border: 'none',
                    message: ''
                }
            }))
        }
        this.checkInputs();
    };

    checkInputs = () => {
        const { name, email, phone, subject, message } = this.state.inputs;
        if (name.length == 0 || email.length == 0 || message.length == 0 || subject.length == 0 || phone.length == 0) {
            this.setStatusState("orange", "please fill out all required information");
        } else {
            this.validateEmail();
        };
    };

    validateEmail = () => {
        const clientEmail = this.state.inputs.email;
        const {dispatch} = this.props;
        dispatch(verify.verifyEmail({email: clientEmail})).then(() => {
            if (this.state.status.isValid) {
                const { name, email, phone, subject, message } = this.state.inputs;
                dispatch(client.sendClientMessage({ name, email, phone, subject, message }));
            } else {
                this.setStatusState("orange", "Please make sure your email is correct");
            };
        });
    };

    setStatusState = (border, message) => {
        this.setState(() => ({
            alert: {
                border: border,
                message: message
            }
        }));
    };

    clearInputs = () => {
        this.setState({
            inputs: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            }
        });
    };

    clearAlertState = () => {
        this.setState(() => ({
            alert: {
                border: 'none',
                message: ''
            }
        }))
    }

    returnAlert = (border, message) => {
        if (this.state.alert.border !== 'none') {
            return <Alert border={border} message={message} />
        }
    };

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
        console.log(this.props)
        console.log(this.state)
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
                {
                    this.returnAlert(this.state.alert.border, this.state.alert.message)
                }
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