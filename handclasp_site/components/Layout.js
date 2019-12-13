import React from 'react'
import Head from 'next/head'
import Navbar from './nav/Navbar'
import Footer from './Footer'

class Layout extends React.Component {
    render() {
        // const { Component, pageProps, reduxStore } = this.props
        return (
            // <Provider store={reduxStore}>
                <div>
                    <Head>
                        <title>HandClasp</title>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
                    </Head>
                    <Navbar />
                        {this.props.children}
                    <Footer />
                </div>
            // </Provider>      
        )
    }
}

export default Layout