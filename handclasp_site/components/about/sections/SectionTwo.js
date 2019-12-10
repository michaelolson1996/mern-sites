import InfoContainer from '../components/InfoContainer'

const SectionTwo = () => {
    return (
        <div className = "about-section-1-content-container">
            <InfoContainer bgClass="stylized-bg" picture="about-2-picture-container-1" title="Who We Are"
                    paragraph="Handclasp is a Christian humanitarian organization committed to working with the needy children, families and the communities of Hill Tribes, giving them hope and dreams for their future" /> 
            <InfoContainer bgClass="stylized-bg-2" picture="about-2-picture-container-2" title="What We Do"
                    paragraph="Handclasp assists communities with rice and water that have had hard circumstances due to weather and insects which affect their every day survival." />
            <InfoContainer bgClass="stylized-bg-3" picture="about-2-picture-container-3" title="About Our Mission"
                    paragraph="The purpose of Handclasp is to benefit the needy people of Asia, particularly children. The girls at the center work to develop skills to aid their own support and avoid being sold into the “flesh trade” of Bangkok. Our prayers are for these students to to graduate from University and have a productive life." />
        </div>
    )
};

export default SectionTwo;