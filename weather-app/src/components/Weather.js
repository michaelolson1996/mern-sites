import React, { Component } from 'react'


class Weather extends Component {

    render() {

        return (
            <React.Fragment>
                {
                    this.props.description === undefined ?
                    ""
                    :
                    <div className = "weather-container">
                        <div className = "weather-icon-container">
                            {
                                this.props.description === "Clear" ?
                                    <i class="fas fa-sun"></i>
                                :
                                    ""
                            }
                            {     
                                this.props.description === "Clouds" ?
                                    <i class="fas fa-cloud"></i>
                                :
                                    ""
                            }
                            {
                                this.props.description === "Atmosphere" ?
                                    <i class="fas fa-smog"></i>
                                :
                                    ""
                            }
                            {
                                this.props.description === "Snow" ?
                                    <i className ="fas fa-snowflake"></i>
                                :
                                    ""
                            }
                            {
                                this.props.description === "Drizzle" ?
                                    <i class="fas fa-cloud-rain"></i>
                                :
                                    ""
                            }
                            {
                                this.props.description === "Thunder Storm" ?
                                    <i class="fas fa-bolt"></i>
                                :
                                    ""
                            }
                            {
                                this.props.description === "Rain" ?
                                    <i class="fas fa-cloud-showers-heavy"></i>
                                :
                                    ""
                            }




                        </div>
                        <div className = "main-title">
                            <p className = "title-city-country">{ this.props.city }, </p>
                            <p className = "title-city-country">{ this.props.country }</p>
                        </div>
                        <div className = "temp-container">
                            <p className = "temp-titles">{ this.props.temperature.toFixed(0) }&#8451;</p>
                            <div className = "temp-spacing"></div>
                            <p className = "temp-titles">{(this.props.temperature * 9 / 5 + 32).toFixed(0)}&#x2109;</p>
                        </div>
                        <div className = "humid-container">
                            
                            <p className = "humid-text">Humidity: { this.props.humidity }</p>
                            <i class="fas fa-tint humid-text"></i>
                        </div>
                        <div className = "long-lat-container">
                        <p>Longitude, Latitude: </p>
                        <p>{ this.props.longitude } / { this.props.latitude }</p>
                        </div>



                        
                        
                        
                    </div>  
                }

            </React.Fragment>
        )
    }
}

export default Weather
