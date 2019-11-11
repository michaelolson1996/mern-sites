import React from 'react'
import '../home.css'
import $ from 'jquery'

const Home = (props) => {

    // let canvas = document.querySelector('canvas')
    // let c = canvas.getContext('2d')
    // c.beginPath()
    // c.moveTo(50, 50)

    return (
        <div className = "home-page-wrap">
            <div className = "home-page-blue">
                <div className = "home-box-container">
                    <h1 className = "home-box-title">Are you ready to upgrade?</h1>
                    <div className = "button-container">
                        <button onClick = { props.toggleForm } className = "get-started-button">Get Started Here</button>
                    </div>
                </div>
            </div>
            <div className = "home-page-2">
                <i className = "fas fa-angle-double-down" id = "button"></i>
                <div className = "image-text-container-page-2 second">
                    <div className = "image-text-box-1 page-2-boxes">
                        <img className = "picture" alt = "home" src = {require("./media/homepicture.jpg")} />
                        <h2 className = "box-title">Watch videos at home</h2>
                        <p className = "box-text">Etiam tristique faucibus orci, non tempor urna mollis a. Pellentesque et orci porttitor, lacinia ex sit amet, feugiat ipsum. Morbi sed congue diam, et malesuada risus. </p>
                    </div>
                    <div className = "image-text-box-2 page-2-boxes">
                        <img className = "picture" alt = "watching with friends" src = {require("./media/workpicture.jpg")} />
                        <h2 className = "box-title">Or on the go with friends</h2>
                        <p className = "box-text">lacinia ex sit amet, feugiat ipsum. Morbi sed congue diam, et malesuada risus. Pellentesque et orci porttitor, lacinia ex sit amet.</p>
                    </div>
                </div>
            </div>
            <div className = "home-page-3">
                <canvas id = "canvas"></canvas>
            </div>
            {
                    $('document').ready(function (){
                        $(".fas").click(function (){
                            $('html, body').animate({
                                scrollTop: $("#button").offset().top
                            }, 'slow')
                        })
                    })
                }
        </div>
    )
}

export default Home