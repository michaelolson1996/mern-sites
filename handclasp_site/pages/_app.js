import App from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../redux/store';
import '../public/home.css';
import '../public/about.css';
import '../public/navbar.css';
import '../public/volunteer.css';
import '../public/loading.css';
import '../public/donate.css';
import '../public/inprogress.css';
import '../public/questions.css';
import '../public/footer.css';
import '../public/contact.css';
import '../public/sponsor.css';

class MyApp extends App {

    render () {
        const {Component, pageProps, store} = this.props
        return (
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        )
    }
}

export default withRedux(initializeStore)(MyApp)