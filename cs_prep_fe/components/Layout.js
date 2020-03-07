import { Component, Fragment } from 'react';
import Head from 'next/head';
import Nav from './Nav';

class Layout extends Component {

    render() {
        return (
            <Fragment>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
                    <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css" />
                </Head>
                
                <Nav />
                { this.props.children }
                <style jsx global>{`
                
                *, body {
                    margin: 0;
                    background-color: #100c08;
                }
                
                `}</style>
            </Fragment>
        )
    }
}

export default Layout;