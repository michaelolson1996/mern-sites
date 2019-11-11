import React, { Component } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './about.css'
import Footer from '../footer'
import Review from './review'
import { connect } from 'react-redux'
import { postReview, getReviews } from '../../redux/reviews'
AOS.init()


class About extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            review: '',
            stars: 0,
            reviews: []
        }
    }

    componentDidMount() {
        this.props.getReviews()
        .then( () => {
            this.setState({
                reviews: [...this.props.reviews]
            })
        })
    }

    handleFirstNameChange = (event) => {
        event.preventDefault()
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        event.preventDefault()
        this.setState({
            lastName: event.target.value
        })
    }

    handleEmailChange = event => {
        event.preventDefault()
        this.setState({
            email: event.target.value
        })
    }

    handleReviewChange = event => {
        event.preventDefault()
        this.setState({
            review: event.target.value
        })
    }

    clickStarOne = () => {
        this.setState({
            stars: 1
        })
    }

    clickStarTwo = () => {
        this.setState({
            stars: 2
        })
    }

    clickStarThree = () => {
        this.setState({
            stars: 3
        })
    }

    clickStarFour = () => {
        this.setState({
            stars: 4
        })
    }

    clickStarFive = () => {
        this.setState({
            stars: 5
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const newReview = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            review: this.state.review,
            stars: this.state.stars
        }
        this.props.postReview(newReview)
        this.props.getReviews()
        .then( () => {
            this.setState({
                reviews: [...this.props.reviews],
                firstName: '',
                lastName: '',
                email: '',
                review: '',
                stars: 0
            })
        })
    }
   
    render() {
        let mappedReviews = this.state.reviews
        console.log(mappedReviews)
        return (
            <React.Fragment>
                <div className = "page-about-wrap">
                    <div className = "page-1-about-wrap">
                        <div className = "page-1-about-text-container">
                            <h3 className = "page-1-about-title">Why Flash Stacks?</h3>
                        </div>
                    </div>
                    <div className = "page-2-about-wrap">
                        <div className = "page-2-about-reasons-container"
                             data-aos="fade-left"
                             data-aos-delay="40" 
                             data-aos-duration="1200"
                             data-aos-anchor-placement="center-bottom">
                             
                            <div className = "page-2-about-boxes box1">
                                <p className = "page-2-text">Simple and User-Friendly</p>
                                <p className = "page2-secondary-text">Our website is created with the user's experience in mind, making this a simple yet effective approach towards learning.</p>
                            </div>
                            <div className = "page-2-about-boxes box2">
                                <p className = "page-2-text" id = "free-text">Free!!!</p>
                                <p className = "page2-secondary-text">Has anyone mentioned that this beautiful piece of machinery is free?</p>
                            </div>
                            <div className = "page-2-about-boxes box3">
                                <p className = "page-2-text">Designed for All Ages</p>
                                <p className = "page2-secondary-text">No matter your age, you will be able to use this tool effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div className = "page-3-about-wrap">
                        <h2 className = "how-title-about">How to Use Flash Stacks</h2>
                        <div className = "about-page-3-grid">
                            <div className = "about-page-3-containers">
                                <div 
                                    className = "about-page-3-images-container" 
                                    data-aos="fade-left"
                                    data-aos-delay="40" 
                                    data-aos-duration="1200">
                                    <div className = "about-page-3-images image1"></div>
                                </div>
                                <div className = "about-page-3-text-container">
                                    <p className = "about-pages-3-text">Go to the login page, if you do not have an account click on the link at the bottom of the form to sign up</p>
                                </div>
                            </div>
                            <div className = "about-page-3-containers">
                                <div className = "about-page-3-images-container"  data-aos="fade-left"
                                    data-aos-delay="40" 
                                    data-aos-duration="1200">
                                    <div className = "about-page-3-images image2"></div>
                                </div>
                                <div className = "about-page-3-text-container">
                                    <p className = "about-pages-3-text">Once you fill out the form it will bring you to your own stacks page, the buttons on the top right allow you to create and delete stacks</p>
                                </div>
                            </div>
                            <div className = "about-page-3-containers">
                                <div className = "about-page-3-images-container"  data-aos="fade-left"
                                    data-aos-delay="40" 
                                    data-aos-duration="1200">
                                    <div className = "about-page-3-images image3"></div>
                                </div>
                                <div className = "about-page-3-text-container">
                                    <p className = "about-pages-3-text">After you have created a stack, you can click on that stack to be transferred to the cards page. The menu is at the top right</p>
                                </div>
                            </div>
                            <div className = "about-page-3-containers">
                                <div className = "about-page-3-images-container"  data-aos="fade-left"
                                    data-aos-delay="40" 
                                    data-aos-duration="1200">
                                    <div className = "about-page-3-images image4"></div>
                                </div>
                                <div className = "about-page-3-text-container">
                                    <p className = "about-pages-3-text">Click on the new icon to create a new card specifically for this stack. fill out what you want on the front and back of the card</p>
                                </div>
                            </div>
                            <div className = "about-page-3-containers">
                                <div className = "about-page-3-images-container"  data-aos="fade-left"
                                    data-aos-delay="40" 
                                    data-aos-duration="1200">
                                    <div className = "about-page-3-images image5"></div>
                                </div>
                                <div className = "about-page-3-text-container">
                                    <p className = "about-pages-3-text">Edit and delete your cards using the same  drop-down menu. You can toggle cards front and back by clicking the card</p>
                                </div>
                            </div>
                            <div className = "about-page-3-containers">
                                <div className = "about-page-3-images-container"  data-aos="fade-left"
                                    data-aos-delay="40" 
                                    data-aos-duration="1200">
                                    <div className = "about-page-3-images image6"></div>
                                </div>
                                <div className = "about-page-3-text-container">
                                    <p className = "about-pages-3-text">If you have any questions, feel free to reach out to us in the contact page and we will get back to you ASAP. Enjoy your stacks!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "page4-about-reviews">
                        <div className = "page-4-reviews-top">
                            <div className = "reviews-title-container">
                                <h2 className = "reviews-title">Reviews</h2>
                            </div>
                            <div className = "star-container">
                                <div className = "star-inner-container">
                                    <i className = "fa fa-star outer-stars" data-aos="fade-in" data-aos-duration="1000"></i>
                                    <i className = "fa fa-star outer-stars" data-aos="fade-in" data-aos-delay="40" data-aos-duration="1200"></i>
                                    <i className = "fa fa-star outer-stars" data-aos="fade-in" data-aos-delay="60" data-aos-duration="1300"></i>
                                    <i className = "fa fa-star outer-stars" data-aos="fade-in" data-aos-delay="80" data-aos-duration="1400"></i>
                                    <i className = "fa fa-star outer-stars" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1500"></i>
                                </div>
                            </div>
                        </div>
                        <div className = "page-4-reviews-bot">
                            <div className = "reviews-bot-left">
                                <div className = "reviews-container-left" data-aos = "fade-right">
                                    <div className = "reviews-read-container">
                                    {
                                        this.state.reviews.length > 0 ?
                                        mappedReviews.map(review => {
                                            return <Review key = { review._id }
                                                           id = { review._id }
                                                           firstName = { review.firstName }
                                                           lastName = { review.lastName }
                                                           review = { review.review }
                                                           rating = { review.stars } />
                                        })
                                        :
                                        ''
                                    }
                                    </div>
                                </div>
                            </div>
                            <div className = "reviews-bot-right">
                                <form className = "reviews-form-container-right">
                                    <div className = "form-inputs-container" data-aos = "fade-left">
                                        <div className = "title-container">
                                            <h1 className = "form-title-main">Write a Review!</h1>
                                        </div>
                                        <div className = "form-blocks-container">
                                            <div className = "form-block-container">
                                                <input type = "text" placeholder = "First Name" className = "form-input-container in1" value = { this.state.firstName } name = "firstName" onChange = { this.handleFirstNameChange } />
                                            </div>
                                            <div className = "form-block-container">
                                                <input type = "text" placeholder = "Last Name" className = "form-input-container in2" value = { this.state.lastName } name = "lastName" onChange = { this.handleLastNameChange } />
                                            </div>
                                            <div className = "form-block-container">
                                                <input type = "email" placeholder = "Email" className = "form-input-container in3" value = { this.state.email } name = "email" onChange = { this.handleEmailChange } />
                                            </div>
                                            <div className = "form-block-container review-container-input">
                                                <p className = "form-label-element el4">Share Your Experience</p>
                                                <textarea type = "text" className = "form-input-container in4" value = { this.state.review } name = "review" onChange = { this.handleReviewChange } />
                                            </div>
                                        </div>

                                    </div>
                                </form>
                                <div className = "reviews-chart-container">
                                    <div className = "interactive-star-container">
                                        <div className = "stars">
                                            <form action = "">
                                                <input className = "star star-5" id="star-5" type="radio" name="star"/>
                                                <label className = "fa fa-star star outer-stars star-5" htmlFor="star-5" onClick = {this.clickStarFive}></label>
                                                <input className = "star star-4" id="star-4" type="radio" name="star"/>
                                                <label className = "fa fa-star star outer-stars star-4" htmlFor="star-4" onClick = {this.clickStarFour}></label>
                                                <input className = "star star-3" id="star-3" type="radio" name="star"/>
                                                <label className = "fa fa-star star outer-stars star-3" htmlFor="star-3" onClick = {this.clickStarThree}></label>
                                                <input className = "star star-2" id="star-2" type="radio" name="star"/>
                                                <label className = "fa fa-star star outer-stars star-2" htmlFor="star-2" onClick = {this.clickStarTwo}></label>
                                                <input className = "star star-1" id="star-1" type="radio" name="star"/>
                                                <label className = "fa fa-star star outer-stars star-1" htmlFor="star-1" onClick = {this.clickStarOne}></label>
                                            </form>
                                        </div>
                                    </div>
                                    <input className = "submit-review" value = "Submit" type = "submit" onClick = { this.handleSubmit } />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />

                </div>
            </React.Fragment>
        )
    }
}

export default connect(state => state, { postReview, getReviews })(About)