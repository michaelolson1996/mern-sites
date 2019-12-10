import { Component } from 'react';
import NavBig from './versions/NavBig'
import '../../public/navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownVisible: true
        }
    }

    dropdownSwitch = () => {
        this.setState(prevState => ({
            dropdownVisible: !prevState.dropdownVisible
        }))
    }

    render() {
        return (
            <div className = 'nav_wrap'>
                <input id = 'nav_checkbox_id' className = 'nav_checkbox' type = 'checkbox'></input>
                <div className = 'nav_burger_menu_container'
                     onClick = { () => {
                         this.dropdownSwitch()
                     } }>
                    <span className = 'nav_burger_menu_bars'></span>
                </div>
                <header className = 'header'>
                    <div className = 'nav_title_container'>
                        <h1 className="nav_title">HandClasp</h1>
                    </div>
                    <NavBig />
                </header>
            </div>
        )
    }
}

export default Navbar