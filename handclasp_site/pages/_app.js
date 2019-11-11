import App, {Container} from 'next/app'
import Layout from '../components/Layout'
import {Provider} from 'react-redux'
import withReduxStore from '../lib/with-redux-store'

class MyApp extends App {
    constructor(props) {
        super(props)
    }


    scrollFunction = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector(".nav_wrap").style.height = "100px";
            // document.querySelector(".nav-menu-small").style.top = "70px";
            // document.querySelector('.background-push').style.top = "30px";
            // document.querySelector('.nav-toggle-label').style.top = "5px";
            // let dropdowns = document.querySelectorAll('.dropdown')
            // for (let i = 0; i < dropdowns.length; i++) {
            //     dropdowns[i].style.top = "70px";
            // }
            console.log('hello')
        } else {
            // document.querySelector('.nav-toggle-label').style.top = "0px";
            // document.querySelector(".nav-menu-small").style.top = "60px";
            document.querySelector(".nav_wrap").style.height = "60px";
            // document.querySelector('.background-push').style.top = "40px";
            // let dropdowns = document.querySelectorAll('.dropdown')
            // for (let i = 0; i < dropdowns.length; i++) {
            //     dropdowns[i].style.top = "60px";
            // }
            console.log('good bye')
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollFunction());
    }


   

    render () {
        const {Component, pageProps, reduxStore} = this.props
        return (
            <Provider store={reduxStore}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        )
    }
}

export default withReduxStore(MyApp)