import App, { Container } from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../redux/store';
import '../public/about.css'
import '../public/navbar.css'
import '../public/volunteer.css'
import '../public/loading.css'
import '../public/donate.css'
import '../public/inprogress.css'
import '../public/questions.css'
import '../public/footer.css'
import '../public/contact.css';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};
        return pageProps;
    }

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