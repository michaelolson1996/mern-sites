import Head from 'next/head';
import { Component } from 'react';
import SectionOne from '../components/about/sections/SectionOne';
import SectionTwo from '../components/about/sections/SectionTwo';
import SectionThree from '../components/about/sections/SectionThree';
import SectionFour from '../components/about/sections/SectionFour';
import SectionFive from '../components/about/sections/SectionFive';
import SectionSix from '../components/about/sections/SectionSix';

class About extends Component {
    constructor() {
        super()
        this.state = {
            storiesVisible: false,
            members: undefined
        }
    }

    displayStory = (member) => {
        this.setState(prevState => ({
            storiesVisible: !prevState.storiesVisible,
            members: member
        }))
    }

    render() {
        return (
            <div>
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
            </div>
        )
    }
}

export default About