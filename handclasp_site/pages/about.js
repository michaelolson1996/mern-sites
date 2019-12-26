import Head from 'next/head';
import SectionOne from '../components/about/sections/SectionOne';
import SectionTwo from '../components/about/sections/SectionTwo';
import SectionThree from '../components/about/sections/SectionThree';
import SectionFour from '../components/about/sections/SectionFour';
import SectionFive from '../components/about/sections/SectionFive';
import SectionSix from '../components/about/sections/SectionSix';

const About = () => {
    return (
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </div>
    );
};

export default About