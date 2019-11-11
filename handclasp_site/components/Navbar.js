import { Component } from 'react'
import Router from 'next/router';

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
                        <span className = 'handclasp_nav_logo'
                              onClick={() => Router.push('/').then(() => window.scrollTo(0, 0))}>
                        </span>
                        <span className = 'nav_title'
                              onClick={() => Router.push('/').then(() => window.scrollTo(0, 0))}>
                            HandClasp
                        </span>
                    </div>
                    <div className = 'nav_menu'>
                        <span className = 'nav_menu_item'
                              onClick={() => Router.push('/').then(() => window.scrollTo(0, 0))}>
                            Home
                        </span>
                        <p className = 'nav_dividers'>
                            |
                        </p>
                        <span id = 'nav_about_hover_dd1_display'
                              className = 'nav_menu_item'
                              onClick={() => Router.push('/about').then(() => window.scrollTo(0, 0))}>
                            Our Mission
                        </span>
                        <ul id = 'dropdown_container_1'
                            className = 'dropdown_global'>
                            <span onClick={() => Router.push('/questions').then(() => window.scrollTo(0, 0))}>
                                <li className = 'dropdown_menu_item'>
                                    <p className = 'dropdown_menu_item_text'>
                                        Questions
                                    </p>
                                </li>
                            </span>
                            <span onClick={() => Router.push('/media').then(() => window.scrollTo(0, 0))}>
                                <li className = 'dropdown_menu_item'>
                                    <p className = 'dropdown_menu_item_text'>
                                        Media
                                    </p>
                                </li>
                            </span>
                        </ul>
                        <p className = 'nav_dividers'>
                            |
                        </p>
                        <span onClick={() => Router.push('/projects').then(() => window.scrollTo(0, 0))}
                              className = 'nav_menu_item'>
                                Projects
                        </span>
                        <p className = 'nav_dividers'>
                            |
                        </p>
                        <span id = 'nav_about_hover_dd2_display'
                              onClick={() => Router.push('/get_involved').then(() => window.scrollTo(0, 0))}
                              className = 'nav_menu_item'>
                                Get Involved
                        </span>
                        <ul id = 'dropdown_container_2'
                            className = 'dropdown_global'>
                            <span onClick = {() => Router.push('/contact').then(() => window.scrollTo(0, 0))}>
                                <li className = 'dropdown_menu_item'>
                                    <p className = 'dropdown_menu_item_text'>
                                        Contact Us
                                    </p>
                                </li>
                            </span>
                            <span onClick={() => Router.push('/volunteer').then(() => window.scrollTo(0, 0))}>
                                <li className = 'dropdown_menu_item'>
                                    <p className = 'dropdown_menu_item_text'>
                                        Volunteers
                                    </p>
                                </li>
                            </span>
                            <span onClick={() => Router.push('/sponsor').then(() => window.scrollTo(0, 0))}>
                                <li className = 'dropdown_menu_item'>
                                    <p className = 'dropdown_menu_item_text'>
                                        Sponsor a Kid
                                    </p>
                                </li>
                            </span>
                        </ul>
                        <p className = 'nav_dividers'>
                            |
                        </p>
                        <span onClick={() => Router.push('/donate').then(() => window.scrollTo(0, 0))}
                              className = 'nav_menu_item'>
                                Donate
                        </span>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navbar