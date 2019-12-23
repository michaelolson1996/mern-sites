import { Component } from 'react';
import ContactPage from '../components/contact/sections/ContactPage';
import LoadingPage from '../components/contact/sections/LoadingPage';


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
                { 
                    !this.state.loading ? 
                    <ContactPage toggleLoad={this.toggleLoad} /> 
                    : 
                    <LoadingPage toggleLoad={this.toggleLoad} /> 
                }
            </div>
        )
    }
}

export default Contact