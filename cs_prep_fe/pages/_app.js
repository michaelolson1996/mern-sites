import App from 'next/app';
import Layout from '../components/Layout';

class MyApp extends App {
    render() {

        const { Component, pageProps } = this.props;
        return (
            <Layout>
                <Component {...pageProps} />
                <style jsx>{`
                


                `}</style>
            </Layout>
        )
    }
}

export default MyApp;