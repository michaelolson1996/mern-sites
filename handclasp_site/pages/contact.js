// import Head from 'next/head'
import { Component } from 'react'
import { connect } from 'react-redux'
import { sendClientMessage } from '../redux/actions/emailActions'
import Layout from '../components/Layout'
import LoadingPage from '../components/LoadingPage'
// import contact from '../static/styles/contact.css'
// import global from '../static/styles/main.css'

class Contact extends Component{
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            loading: false
        }
    }

    // static getInitialProps ({ reduxStore, req }) {
    //     const isServer = !!req
    //     reduxStore.dispatch(serverRenderClock(isServer))
    
    //     return {}
    //   }

    handleChange = event => {
        const { name, value } = event.target
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        })
    }

    toggleLoad = () => {
        this.setState(prevState => ({
            loading: !prevState.loading
        }))
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

    render() {
        console.log(sendClientMessage)
        return(
                <div>
                    {/* {
                        !this.state.loading ?
                            <div className = {
                                `${contact.contact_page_wrap}`
                            }>
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
                                </div>
                                <form className = {
                                    `${contact.contact_form_container}`
                                }>
                                    <div className = {
                                        `${contact.contact_form}`
                                    }>
                                        <h3 className = {
                                            `${contact.contact_us_title}`
                                        }>Contact Us!</h3>
                                        <input onChange = { this.handleChange } value = { this.state.inputs.name } className = {
                                            `${contact.contact_form_inputs}`
                                        } name = "name" type = "text" placeholder = "full name" required />
                                        <input onChange = { this.handleChange } value = { this.state.inputs.email } className = {
                                            `${contact.contact_form_inputs}`
                                        } name = "email" type = "email" placeholder = "email" required />
                                        <input onChange = { this.handleChange } value = { this.state.inputs.phone } className = {
                                            `${contact.contact_form_inputs}`
                                        } name = "phone" type = "number" placeholder = "phone" required />
                                        <textarea onChange = { this.handleChange } value = { this.state.inputs.message } className = {
                                            `${contact.form_inputs}
                                            ${contact.contact_page_textarea}
                                            `
                                        } name = "message" type = "text" placeholder = "type your message here!" required />
                                    </div>
                                    <button className = {
                                        `${contact.contact_form_submit_button}
                                        ${global.global_hc_button}
                                        `
                                    } type = "submit" onClick = { () => this.sendClientInfo() }>
                                    <svg className = {
                                        `${global.svg}`
                                    }>
                                        <rect className = {
                                            `${global.rect}`
                                        }x="0" y="0" fill="none" width="100%" height="100%"/>
                                    </svg>
                                    Submit
                                    </button>
                                    
                                </form>
                            </div>
                        :
                            <LoadingPage toggleLoad = { this.toggleLoad } />
                    } */}
                </div>
        )
    }
}

// export default connect(state => state, { sendEmailAction })(Contact)

export default Contact