import React from 'react'
import $ from 'jquery'
import donatebutton from '../static/donatebutton.css'

const DonateButton = () => {
    return (
        <div className = {
            `${donatebutton.donate_button_container}`
        }>
            {
                $('document').ready(function (){
                    $("#donate-button").click(function (){
                        $('html, body').animate({
                            scrollTop: $(".donate_section_2_container").offset().top
                        }, 'slow')
                    })
                })
            }
            <button className = {
                `
                ${donatebutton.button_link}
                ${donatebutton.button_donations}
                `
            } id = "donate-button">
                <svg className = {
                    `${donatebutton.handclasp_button_svg}`
                }>
                    <rect className = {
                        `${donatebutton.donate_rect}`
                    } x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                Where is my money going?
            </button>
        </div>
        // <div></div>
    )
}

export default DonateButton