// import Head from 'next/head'
import { Component } from 'react'
// import { connect } from 'react-redux'
// import { sendClientMessage } from '../redux/actions/emailActions'
import ContactPage from '../components/contact/sections/ContactPage'
import LoadingPage from '../components/contact/sections/LoadingPage'
// import '../public/contact.css'

class Contact extends Component{
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    toggleLoad = () => {
        this.setState(prevState => ({
            loading: !prevState.loading
        }))
    }

    render() {
        return(
            <div>
                { !this.state.loading ? <ContactPage toggleLoad={this.toggleLoad} /> : <LoadingPage toggleLoad = { this.toggleLoad } /> }
            </div>
        )
    }
}

// export default connect(state => state, { sendEmailAction })(Contact)

export default Contact