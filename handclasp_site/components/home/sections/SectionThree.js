import Link from 'next/link';
import Icon from '../components/Icon';

const SectionThree = () => {
    return (
        <div>
            <div className = "home-section-3-container">
                <div className = "home-section-3-image">
                    <div className = "home-section-3-content-container">
                        <div className = "home-section-3-content">
                            <p className = "home-section-3-quote">"We make a living by what we get, But we make a life by what we give."</p>
                        </div>
                        <div className = "home-section-3-icons-container"> 
                            <Link href="/volunteer">
                                <Icon iconID="icon-home-1" iconClass="fa-hand-holding-heart" iconText="Get Involved" />
                            </Link>
                            <Link href="/donate">
                                <Icon iconID="icon-home-2" iconClass="fa-hand-holding-usd" iconText="Donate" />
                            </Link>
                            <Link href="/donate">
                                <Icon iconID="icon-home-3" iconClass="fa-church" iconText="Our Mission" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree;