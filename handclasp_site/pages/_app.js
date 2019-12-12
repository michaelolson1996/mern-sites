import App from 'next/app'
import Layout from '../components/Layout'
import {Provider} from 'react-redux'
import withReduxStore from '../lib/with-redux-store'
import '../public/about.css'
import '../public/home.css'
import '../public/contact.css'
import '../public/footer.css'
import '../public/navbar.css'
import '../public/volunteer.css'


class MyApp extends App {

    componentDidMount() {
        document.addEventListener('scroll', this.scrollFunction());
    }

    scrollFunction = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector(".header").style.height = "80px";
            // document.querySelector(".nav-menu-small").style.top = "70px";
            // document.querySelector('.background-push').style.top = "30px";
            // document.querySelector('.nav-toggle-label').style.top = "5px";
            // let dropdowns = document.querySelectorAll('.dropdown')
            // for (let i = 0; i < dropdowns.length; i++) {
            //     dropdowns[i].style.top = "70px";
            // }
            console.log(document.body)
        } else {
            // document.querySelector('.nav-toggle-label').style.top = "0px";
            // document.querySelector(".nav-menu-small").style.top = "60px";
            document.querySelector(".header").style.height = "60px";
            // document.querySelector('.background-push').style.top = "40px";
            // let dropdowns = document.querySelectorAll('.dropdown')
            // for (let i = 0; i < dropdowns.length; i++) {
            //     dropdowns[i].style.top = "60px";
            // }
            console.log(document.body)
        }
    }

    render () {
        const {Component, pageProps, reduxStore} = this.props
        return (
            // <Provider store={reduxStore}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            // </Provider>
        )
    }
}

export default (MyApp)