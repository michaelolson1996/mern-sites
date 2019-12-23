import SectionOne from '../components/home/sections/SectionOne';
import SectionTwo from '../components/home/sections/SectionTwo';
import SectionThree from '../components/home/sections/SectionThree';
import SectionFour from '../components/home/sections/SectionFour';
// import '../public/home.css';
import '../public/home.css'


const Home = () => {
    return (
        <div className = "home-page-flex">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
    )
}

export default Home