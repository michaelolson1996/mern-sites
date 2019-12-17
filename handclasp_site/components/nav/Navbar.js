import { Component } from 'react';
import NavBig from './versions/NavBig'
import NavSmall from './versions/NavSmall'
import '../../public/navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navBig: true
        }
    }

    componentDidMount() {
        if (window.outerWidth <= 920) {
            this.setState({
                navBig: false
            })
        }
        
        window.addEventListener('resize', () => {
            if (window.outerWidth <= 920) {
                this.setState({
                    navBig: false
                })
            } else {
                this.setState({
                    navBig: true
                })
            }
        })
    }

    render() {
        return (
            <div className = 'nav_wrap'>
                <header className = 'header'>
                    <div className = 'nav_title_container'>
                        <h1 className="nav_title">HandClasp</h1>
                    </div>
                    {
                        this.state.navBig ? <NavBig /> : <NavSmall />
                    }
                </header>
            </div>
        )
    }
}

export default Navbar