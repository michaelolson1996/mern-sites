import Head from 'next/head';
import { Component } from 'react';
import Layout from '../components/Layout';

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
            <div className = "about-page-wrap">
            <div className = "background-push"></div>
                {
                    this.state.storiesVisible === false ?
                        null
                    :
                        <StoriesContainer displayStory = { this.displayStory } member = {this.state.members}/>
                }
                <div className = "about-section-2-container"  
                     data-aos="fade-left"
                     data-aos-delay="40" 
                     data-aos-duration="1200">
                    <h2 className = "about-section-2-title">What is HandClasp?</h2>
                    <p className = "about-section-2-paragraph">
                        Handclasp is a child-advocacy ministry that pairs Handclasp people with those who are suffering from poverty. The ministry releases children from spiritual, economic, social, and physical poverty. The goal is for each child to become a responsible and fulfilled adult.<br /><br />

                        Handclasp's work has grown from modest beginnings in Thailand when Don and Kay Fox felt compelled to help 5 children in the Hill Tribes of Northern Thailand.  Parntering with Dr. Zothansiami Ralte, a missionary from Mizoram India. Today it is a worldwide ministry where thousands of children are now reaping the benefits of Don, Kay and Dr. Zothansiami's God-given vision.<br /><br />

                        Handclasp is a public charity exempt from federal income tax as an organization described in Section 501 (c)(3) of the Internal Revenue Code. Contributions to Handclasp are tax deductible to the fullest extent allowed by law.
                    </p>
                </div>
                <div className = "about-section-1-content-container" data-aos="fade-left"
                     data-aos-delay="40" 
                     data-aos-duration="1200">
                    <div className = "about-2-container-1">
                        <div className = "about-2-picture-container-1">
                            <div className = "stylized-bg">
                                <div className = "content-container">
                                    <h2 className = "about-title">Who We Are</h2>
                                    <p>Handclasp is a Christian humanitarian organization committed to working with the needy children, families and the communities of Hill Tribes, giving them hope and dreams for their future</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "about-2-container-1"data-aos="fade-left"
                     data-aos-delay="40" 
                     data-aos-duration="1200">
                        <div className = "about-2-picture-container-2">
                            <div className = "stylized-bg-2">
                                <div className = "content-container">
                                    <h2 className = "about-title">What We Do</h2>
                                    <p>Handclasp assists communities with rice and water that have had hard circumstances due to weather and insects which affect their every day survival. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "about-2-container-1" data-aos="fade-left"
                     data-aos-delay="40" 
                     data-aos-duration="1200">
                        <div className = "about-2-picture-container-3">
                            <div className = "stylized-bg-3">
                                    <div className = "content-container">
                                        <h2 className = "about-title">About Our Mission</h2>
                                        <p>The purpose of Handclasp is to benefit the needy people of Asia, particularly children. The girls at the center work to develop skills to aid their own support and avoid being sold into the “flesh trade” of Bangkok. Our prayers are for these students to to graduate from University and have a productive life.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className = "about-section-3-container" name = "members">
                    <h2 className ="about-section-3-title">Meet The Staff</h2>
                    <div className = "member-container">
                        <div className = "row-2-about-containers">
                                <div className = "member-image siami-image" onClick = {() => this.displayStory('siami')}>
                                    <div className = "overlay">
                                        <p className = "image-inner-text">Siami's Story</p>
                                    </div>
                                </div>
                            <h3 className = "member-name">Siami</h3>
                        </div>
                    </div>
                    <div className = "member-container member-line-2">
                        <div className = "row-2-about-containers">
                            <div className = "member-image laechaeh-image" onClick = {() => this.displayStory('lacheah')}>
                                <div className = "overlay">
                                    <p className = "image-inner-text">Lacheah's Story</p>
                                </div>
                            </div>
                            <h3 className = "member-name">Lacheah</h3>
                        </div>
                        <div className = "row-2-about-containers">
                            <div className = "member-image moosee-image" onClick = {() => this.displayStory('moosee')}>
                                <div className = "overlay">
                                    <p className = "image-inner-text">Moosee's Story</p>
                                </div>
                            </div>
                            <h3 className = "member-name">Moosee</h3>
                        </div>
                        <div className = "row-2-about-containers">
                            <div className = "member-image wanida-image" onClick = {() => this.displayStory('wanida')}>
                                <div className = "overlay">
                                    <p className = "image-inner-text">Wanida's Story</p>
                                </div>
                            </div>
                            <h3 className = "member-name">Wanida</h3>
                        </div>
                    </div>
                    <div className = "member-container">
                        <div className = "row-2-about-containers">
                            <div className = "member-image wandaet-image" onClick = {() => this.displayStory('wandaet')}>
                                <div className = "overlay">
                                    <p className = "image-inner-text">Wandaet's Story</p>
                                </div>
                            </div>
                            <h3 className = "member-name">Wandaet</h3>
                        </div>
                    </div>
                </div>
                <div className = "directors-founders-page">
                    {/* <div className = "directors-title-container"> */}
                        <h2 className = "directors-title">Directors</h2>
                    {/* </div> */}
                    <div className = "directors-container">
                        <div className = "directors-boxes">
                            <div className = "dave-image"></div>
                            <h3 className = "directors-titles">David Palacios</h3>
                            <p className = "directors-position">President</p>
                        </div>
                        <div className = "directors-boxes">
                            <div className = "daveC-image"></div>
                            <h3 className = "directors-titles">David Carpenter</h3>
                            <p className = "directors-position">Director</p>
                        </div>
                        <div className = "directors-boxes">
                            <div className = "bob-image"></div>
                            <h3 className = "directors-titles">Bob Carpenter</h3>
                            <p className = "directors-position">Treasurer</p>
                        </div>
                    </div>
                    <div className = "founders-container">
                        <h2 className = "founders-title">Founders</h2>
                        <div className = "don-and-kay-image member-image" onClick = {() => this.displayStory('don')}>
                        <div className = "overlay">
                            <p className = "image-inner-text">Don &amp; Kay's Story</p>
                        </div>
                        </div>
                        <h3 className = "presidents-title">Don and Kay Fox</h3>
                    </div>
                </div>
                <div className = "section-4-about-container">
                {/* <h3 className = "about-quote"></h3> */}
                    <div className = "section-4-about-picture"></div>
                </div>
                <div className = "section-5-about">
                
                </div>
            </div>
        )
    }
}

export default About