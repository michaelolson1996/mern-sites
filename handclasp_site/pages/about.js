import Head from 'next/head';
import { Component } from 'react';
import '../public/about.css';
import SectionOne from '../components/about/sections/SectionOne'
import SectionTwo from '../components/about/sections/SectionTwo'
import SectionThree from '../components/about/sections/SectionThree'

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
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <div className = "about-section-3-container">
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