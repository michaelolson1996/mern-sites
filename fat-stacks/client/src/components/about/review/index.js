import React, { Component } from 'react'

class Review extends Component {

    returnStars = () => {
        if (this.props.rating === 1) {
            return <div className = "star-container-inner"><i className = "fa fa-star inner-stars"></i></div>
        } else if (this.props.rating === 2) {
            return <div className = "star-container-inner"><i className = "fa fa-star inner-stars"></i><i className = "fa fa-star inner-stars"></i></div>
        } else if (this.props.rating === 3) {
            return <div className = "star-container-inner"><i className = "fa fa-star inner-stars"></i><i className = "fa fa-star inner-stars"></i><i className = "fa fa-star inner-stars"></i></div>
        } else if (this.props.rating === 4) {
            return <div className = "star-container-inner"><i className = "fa fa-star inner-stars"></i><i className = "fa fa-star inner-stars"></i><i className = "fa fa-star inner-stars"></i><i className = "fa fa-star inner-stars"></i></div>
        } else {
            return <div className = "star-container-inner"><i className = "fa fa-star inner-stars"></i><i className = "fa fa-star inner-stars"></i><i className = "fa fa-star inner-stars"></i><i className = "fa fa-star inner-stars"></i><i className = "fa fa-star inner-stars"></i></div> 
        }
    }

    render() {
        return (
            <div className = "review-wrapper">
                <div className = "review-star-container">
                    { this.returnStars() }
                </div>
                <div className = "review-left-container">
                    <div className = "review-name-container">{ this.props.firstName }</div>
                    <div className = "review-review-container">{ this.props.review }</div>
                </div>
            </div>
        )
    }
}

export default Review