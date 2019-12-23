import { Component } from 'react';

class SectionTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    onClick = () => {
        console.log('clicked!')
    }

    render() {
        return (
            <div className="footer_sec_2_wrap">
                <div className="newsletter_subscription_wrap">
                    <h3 className="newsletter_subscription_title">Subscribe to our newsletter!</h3>
                    <form className="email_subscription_input_form">
                        <input type="email" required={true} className="email_subscription_input" placeholder="enter email here" />
                        <button className="email_subscription_button" type="submit" onClick={() => this.onClick}>Submit</button>
                    </form> 
                </div>
            </div>
        );
    };
};

export default SectionTwo;