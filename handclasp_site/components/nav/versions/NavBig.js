import { Component } from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import Divider from '../components/Divider';
import DropDown from '../components/DropDown';
import DropDownChild from '../components/DropDownChild';

class NavBig extends Component {

    render() {
        return (
            <React.Fragment>
                <div className = 'nav_menu'>
                    <Link href="/">
                        <Button text="home" style='nav_menu_item' />
                    </Link>
                    <Divider />
                    <Link href="/about">
                        <Button text = "our mission" ddDisplay='nav_about_hover_dd1_display' style='nav_menu_item' />
                    </Link>
                    <DropDown ddId='dropdown_container_1'>
                        <Link href="/questions">
                            <DropDownChild text="questions" style="dropdown_menu_item" />
                        </Link>
                        <Link href="/inprogress" as="/media">
                            <DropDownChild text="media" style="dropdown_menu_item" />
                        </Link>
                    </DropDown>
                    <Divider />
                    <Link href="/projects">
                        <Button text="projects" style='nav_menu_item' />
                    </Link>
                    <Divider />
                    <Link href="/inprogress" as="/getinvolved">
                        <Button text="get involved" style='nav_menu_item' ddDisplay='nav_about_hover_dd2_display' />
                    </Link>
                    <DropDown ddId='dropdown_container_2'>
                        <Link href="/contact">
                            <DropDownChild text="contact" style="dropdown_menu_item" />
                        </Link>
                        <Link href="/volunteer">
                            <DropDownChild text="volunteers" style="dropdown_menu_item" />
                        </Link>
                        <Link href="/sponsor">
                            <DropDownChild text="sponsor a kid" style="dropdown_menu_item" />
                        </Link>
                    </DropDown>
                    <Divider />
                    <Link href="/donate">
                        <Button text="donate" style='nav_menu_item' />
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default NavBig