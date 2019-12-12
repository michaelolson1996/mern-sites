import { Component } from 'react';
// import '../public/volunteer.css'

// import Footer from '../components/Footer';
import Router from 'next/router';
// import Layout from '../components/Layout'

class Volunteer extends Component {
    render() {
        return (
            <div className = "volunteer-page-wrap background-push">
            <div className = "jesus-picture" />
            <h1 className = "volunteer-questions-title">Volunteer Questions</h1>
            <div className = "volunteer-info-container">
                <h3 className = "volunteer-title">The following is basic rules for volunteers serving in Thailand at HRDC.</h3>
                <p className = "volunteer-centered-text">The HRDC Centers founded by Dr Z Ralte (Siami) has a Christian foundation and the rules & principles set out for the students  and staff  must be observed and followed.</p>
                <h3 className = "volunteer-title">COMMITMENT</h3>
                <p className = "volunteer-centered-text">Each Volunteer must commit their service for a stated period of time (eg. 2 -12 months). Less than 2 months is a VISIT. The Volunteer  is responsible for Transport to the Centers in Thailand.</p>
                <h3 className = "volunteer-title">CONDUCT</h3>
                <p className = "volunteer-centered-text">The Volunteer will agree to a work schedule (prepared in consultation with Siami) and adhere to the schedule.  Departure from the agreed schedule without permission may terminate the agreement.</p>
                <p className = "volunteer-centered-text">The Volunteer will acknowledge that their behavior is an influence on the students and refrain from  any bad conduct or conversation.</p>
                <h3 className = "volunteer-title list-title">THE CENTER PROVIDES</h3>
                <ul className = "center-provides">
                    <li>A room with a mattress, pillow and comforter.
                    </li>
                    <li>A bathroom with running water.
                    </li>
                    <li>3 square meals a day at the Center as provided for HRDC Staff.
                    </li>
                    <li>Transport to any organized function where the volunteer is required to attend.
                    </li>
                    <li>A Program schedule for each week at least 1 day before the week commences (ie Friday for next week).
                    </li>
                    <li>Weekly meetings to discuss program.
                    </li>
                    <li>4 days per month to visit a local town eg Chiangmai, Pai, Maechem (Volunteer pays all expenses for the visit). Sunday is deemed a” no work” day.
                    </li>
                </ul>
                <h3 className = "volunteer-title">THE VOLUNTEER PROVIDES</h3>
                <ul className = "center-provides">
                    <li>Accomodation comforts eg sheets, towel, soap, tissue , TP, laundry detergent etc.
                    </li>
                    <li>Comfort food  not on the regular menu.
                    </li>
                    <li>Attendence at weekly meetings.
                    </li>
                    <li>Medical coverage at the Center. This includes any special diet needs.
                    </li>
                </ul>
                <h3 className = "volunteer-title">LEADERSHIP</h3>
                <ul className = "center-provides">
                    <li>The Director of the Center has all authority while you are at the Center.</li>
                    <li>The first Court of Appeal  is  the  Exectutive Director (Dr Z Ralte)</li>
                    <li>Your Advocate is any Director of Handclasp. (However, Directors of Handclasp are NOT in authority over HRDC Staff.)</li>
                </ul>
                <h3 className = "volunteer-costs-title">COSTS in Thai Baht (In &#36;USA when rate is 30 baht per dollar)</h3>
                <table>
                    <tbody>
                    <tr className = "table-title-columns">
                        <th>ACTIVITY</th>
                        <th>VISITOR</th>
                        <th>SPONSOR</th>
                        <th>VOLUNTEER</th>
                    </tr>
                    <tr>
                        <td>Travel to Thailand</td>
                        <td colSpan="3">Find a cheap ticket</td>
                    </tr>
                    <tr>
                        <td>Travel Chiangmai to Musikee (Round Trip)</td>
                        <td>500&#3647; / &#36;17</td>
                        <td>500&#3647; / &#36;17</td>
                        <td>300&#3647; / &#36;10</td>
                    </tr>
                    <tr>
                        <td colSpan="4" className = "accomodation-title">Accomadation at Musekee (per day)</td>
                    </tr>
                    <tr>
                        <td>GUEST HOUSE</td>
                        <td>400&#3647; / &#36;13</td>
                        <td>400&#3647; / &#36;13</td>
                        <td>400&#3647; / &#36;13</td>
                    </tr>
                    <tr>
                        <td>KONDO</td>
                        <td>400&#3647; / &#36;13</td>
                        <td>400&#3647; / &#36;13</td>
                        <td>400&#3647; / &#36;13</td>
                    </tr>
                    <tr>
                        <td>DORM</td>
                        <td>100&#3647; / &#36;3</td>
                        <td>100&#3647; / &#36;3</td>
                        <td>20&#3647; / 60&#162;</td>
                    </tr>
                    <tr>
                        <td>Meal Cost</td>
                        <td>200&#3647; / &#36;6</td>
                        <td>200&#3647; / &#36;6</td>
                        <td>50&#3647;  &#36;1.60</td>
                    </tr>
                    </tbody>
                </table>
                <div className = "button-volunteer-container">
                    <div className = "button-link" to = '/contact'>
                        <svg className = "handclasp-button-svg">
                            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                        </svg>
                        Apply Now!
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>

        )
    }
}

export default Volunteer