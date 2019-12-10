import { Component } from 'react'
import '../public/loading.css'

class LoadingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: '',
            icon: '',
            image: ''
        }
    }

    componentDidUpdate() {
        if ( this.props.formSubmitIsSuccess[0] !== undefined && this.props.formSubmitIsSuccess.length > 0) {
            this.props.toggleLoad()
        }
    }

    render() {
        return (
            // <div className = {
            //     `${loading.loading_bg}`
            // }>
            //     <div className = {
            //         `${loading.loading_inner_container}`
            //     }>
                    
            //     </div>
            // </div>
            <div></div>
        )
    }
}

export default LoadingPage