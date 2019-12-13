import Form from '../components/Form'

const ContactPage = (props) => {
    return (
        <div className="contact_page_wrap">
            <Form toggleLoad={props.toggleLoad} />
        </div>
    )
};

export default ContactPage;