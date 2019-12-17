import { Component } from 'react';
import StaffMember from '../components/StaffMember';
import Link from 'next/link';

class SectionThree extends Component {

    render() {
        return (
            <div className = "about-section-3-container">
                <h2 className ="about-section-3-title">Meet The Staff</h2>
                <div className = "member-container">
                    <Link href={{pathname:"/about", query: "siami"}}>
                        <StaffMember image="siami-image" name="Siami" />
                    </Link>
                </div>
                <div className = "member-container member-line-2">
                    <StaffMember image="laechaeh-image" name="Lacheah" />
                    <StaffMember image="moosee-image" name="Moosee" />
                    <StaffMember image="wanida-image" name="Wanida" />
                </div>
                <div className = "member-container">
                    <StaffMember image="wandaet-image" name="Wandaet" />
                </div>
            </div>
        )
    }
}

export default SectionThree;