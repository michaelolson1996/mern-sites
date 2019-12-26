import { Component } from 'react';
import StaffMember from '../components/StaffMember';
import Link from 'next/link';

class SectionThree extends Component {

    render() {
        return (
            <div className = "about-section-3-container">
                <h2 className ="about-section-3-title">Meet The Staff</h2>
                <div className = "member-container">
                    <Link href="/about/[id]" as={`/about/siami`}>
                        <StaffMember image="siami-image" name="Siami" />
                    </Link>
                </div>
                <div className = "member-container member-line-2">
                    <Link href="/about/[id]" as={`/about/lachaeh`}>
                        <StaffMember image="laechaeh-image" name="Lacheah" />
                    </Link>
                    <Link href="/about/[id]" as={`/about/moosee`}>
                        <StaffMember image="moosee-image" name="Moosee" />
                    </Link>
                    <Link href="/about/[id]" as={`/about/wanida`}>
                        <StaffMember image="wanida-image" name="Wanida" />
                    </Link>
                </div>
                <div className = "member-container">
                <Link href="/about/[id]" as={`/about/wandaet`}>
                    <StaffMember image="wandaet-image" name="Wandaet" />
                </Link>
                </div>
            </div>
        )
    }
}

export default SectionThree;