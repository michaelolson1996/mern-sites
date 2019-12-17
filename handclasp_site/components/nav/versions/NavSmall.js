import { Component } from 'react';
import Link from 'next/link';
import DropDownChild from '../components/DropDownChild';

class NavSmall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownVisible: false
        }
    }

    dropdownSwitch = () => {
        this.setState(prevState => ({
            dropdownVisible: !prevState.dropdownVisible
        }))
    }

    render() {
        return (
            <React.Fragment>
                <div className = 'nav_menu'>
                    <input id = 'nav_checkbox_id' className = 'nav_checkbox' type = 'checkbox'></input>
                    <div className = 'nav_burger_menu_container'
                        onClick = { () => {
                            this.dropdownSwitch()
                        } }>
                        <span className = 'nav_burger_menu_bars'></span>
                    </div>
                    {
                        !this.state.dropdownVisible ? 
                            <div></div>
                        :
                            <div className="nav_menu_small">
                                <Link href="/">
                                    <DropDownChild text="home" style='nav_menu_item nav_dropdown_small_ex' />
                                </Link>
                                <Link href="/about">
                                    <DropDownChild text = "our mission" ddDisplay='nav_about_hover_dd1_display' style='nav_menu_item nav_dropdown_small_ex' />
                                </Link>
                                <Link href="/questions">
                                    <DropDownChild text="questions" style='nav_menu_item nav_dropdown_small_ex' />
                                </Link>
                                <Link href="/media">
                                    <DropDownChild text="media" style='nav_menu_item nav_dropdown_small_ex' />
                                </Link>
                                <Link href="/inprogress" as="/projects">
                                    <DropDownChild text="projects" style='nav_menu_item' />
                                </Link>
                                <Link href="/involved">
                                    <DropDownChild text="get involved" style='nav_menu_item nav_dropdown_small_ex' ddDisplay='nav_about_hover_dd2_display' />
                                </Link>
                                <Link href="/contact">
                                    <DropDownChild text="contact" style='nav_menu_item nav_dropdown_small_ex' />
                                </Link>
                                <Link href="/volunteer">
                                    <DropDownChild text="volunteers" style='nav_menu_item nav_dropdown_small_ex' />
                                </Link>
                                <Link href="/sponsor">
                                    <DropDownChild text="sponsor a kid" style='nav_menu_item nav_dropdown_small_ex' />
                                </Link>
                                <Link href="/donate">
                                    <DropDownChild text="donate" style='nav_menu_item nav_dropdown_small_ex' />
                                </Link>
                            </div>
                    }

                </div>
            </React.Fragment>
        )
    }
}

export default NavSmall